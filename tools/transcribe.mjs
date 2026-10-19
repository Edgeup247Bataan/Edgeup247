#!/usr/bin/env node
// Free transcription with Groq (whisper-large-v3). Word-level timestamps, good for Taglish.
//   node tools/transcribe.mjs <video-or-audio> [output.json] [--language tl] [--prompt "..."] [--chunk-minutes 20]
// Needs GROQ_API_KEY in .env (get a free key at https://console.groq.com/keys).
//
// --prompt: example text in the speaker's style. The default Taglish sample keeps English words
//   in English and Tagalog in Tagalog. Add names, places and products so they are spelled right.
// --language: force one language code (tl, en). Off by default, which suits Taglish best.
// --chunk-minutes: long recordings are sent in slices of this length (Groq caps uploads at 25 MB).
import { spawnSync } from 'node:child_process';
import { readFileSync, writeFileSync, mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { basename, dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';

const TAGLISH_PROMPT = 'Hello guys! Kumusta kayo? Today, ita-try natin itong bagong cafe. ' +
  'Grabe, ang sarap nito, sobrang worth it talaga. Ganito yung gagawin natin, so first, i-click mo lang yung link.';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
try { process.loadEnvFile(join(root, '.env')); } catch { /* handled below */ }

const { values: opts, positionals: [input, outArg] } = parseArgs({
  allowPositionals: true,
  options: {
    language: { type: 'string', default: '' },
    prompt: { type: 'string', default: TAGLISH_PROMPT },
    'chunk-minutes': { type: 'string', default: '20' },
  },
});
if (!input) { console.error('Usage: node tools/transcribe.mjs <video-or-audio> [output.json] [--language tl] [--prompt "..."]'); process.exit(1); }
const key = process.env.GROQ_API_KEY;
if (!key) { console.error('GROQ_API_KEY is missing. Add it to the .env file.'); process.exit(1); }

const out = outArg || join(root, 'outbox', `${basename(input).replace(/\.[^.]+$/, '')}.transcript.json`);

const probe = spawnSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', input], { encoding: 'utf8' });
const duration = Number(probe.stdout);
if (probe.status !== 0 || !duration) { console.error('ffmpeg could not read the file.'); process.exit(1); }

// One Groq request for an audio slice; times in the result are relative to the slice.
async function groq(audio) {
  const form = new FormData();
  form.append('file', new Blob([readFileSync(audio)]), 'audio.mp3');
  form.append('model', 'whisper-large-v3');
  form.append('response_format', 'verbose_json');
  form.append('timestamp_granularities[]', 'word');
  form.append('timestamp_granularities[]', 'segment');
  if (opts.prompt) form.append('prompt', opts.prompt);
  if (opts.language) form.append('language', opts.language);
  const res = await fetch('https://api.groq.com/openai/v1/audio/transcriptions', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}` },
    body: form,
  });
  if (!res.ok) throw new Error(`Groq error ${res.status}: ${await res.text()}`);
  return res.json();
}

// Slices overlap by OVERLAP seconds. Each word or segment is kept from the slice whose
// middle-of-overlap boundary it starts after, so nothing at a slice edge is lost or doubled.
const OVERLAP = 5;
const chunk = Math.max(Number(opts['chunk-minutes']) || 20, 0.1) * 60;
const count = Math.max(1, Math.ceil(duration / chunk));
const tmp = mkdtempSync(join(tmpdir(), 'transcribe-'));
const audio = join(tmp, 'audio.mp3');
const words = [];
const segments = [];
let text = '';
try {
  for (let i = 0; i < count; i++) {
    const from = Math.max(0, i * chunk - OVERLAP);
    const to = Math.min(duration, (i + 1) * chunk);
    if (count > 1) console.log(`Transcribing part ${i + 1} of ${count}...`);
    // Small mono audio so each upload stays under Groq's file size limit.
    const ff = spawnSync('ffmpeg', ['-y', '-loglevel', 'error', '-ss', String(from), '-t', String(to - from), '-i', input,
      '-vn', '-ac', '1', '-ar', '16000', '-b:a', '48k', audio], { stdio: 'pipe' });
    if (ff.status !== 0) throw new Error('ffmpeg could not read the file.');
    const data = await groq(audio);
    if (count === 1) text = data.text;
    const keepFrom = i === 0 ? -Infinity : i * chunk - OVERLAP / 2;
    const keepTo = i === count - 1 ? Infinity : (i + 1) * chunk - OVERLAP / 2;
    const shift = (t) => +(t + from).toFixed(3);
    for (const w of data.words || []) {
      const start = shift(w.start);
      if (start >= keepFrom && start < keepTo) words.push({ ...w, start, end: shift(w.end) });
    }
    for (const s of data.segments || []) {
      const start = shift(s.start);
      if (start >= keepFrom && start < keepTo) segments.push({ ...s, id: segments.length, start, end: shift(s.end) });
    }
  }
} catch (e) {
  console.error(e.message);
  process.exit(1);
} finally {
  rmSync(tmp, { recursive: true, force: true });
}

if (count > 1) text = words.map((w) => w.word).join(' ');
writeFileSync(out, JSON.stringify({ text, words, segments }, null, 2));
console.log(`Transcript saved: ${out}`);
