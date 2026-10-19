#!/usr/bin/env node
// Makes original music beds and sound effects from scratch (pure math, no samples, no downloads),
// so they are 100% owned by the user and safe for commercial use.
//   node tools/make-sounds.mjs [outDir] [--seconds 30] [--bpm 112]
// Writes into my-sounds/generated/ by default:
//   bed-happy.wav (upbeat food/lifestyle bed), whoosh.wav, pop.wav, sparkle.wav, impact.wav
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const { values: opts, positionals: [outArg] } = parseArgs({
  allowPositionals: true,
  options: { seconds: { type: 'string', default: '30' }, bpm: { type: 'string', default: '112' } },
});
const out = resolve(outArg || join(root, 'my-sounds', 'generated'));
mkdirSync(out, { recursive: true });

const SR = 48000;
// Deterministic noise so every run makes the same files.
let seed = 12345;
const rnd = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 2 ** 31 - 1; };
const buf = (sec) => [new Float32Array(Math.ceil(sec * SR)), new Float32Array(Math.ceil(sec * SR))];
const midi = (n) => 440 * 2 ** ((n - 69) / 12);

function writeWav(file, [L, R]) {
  let peak = 0;
  for (let i = 0; i < L.length; i++) peak = Math.max(peak, Math.abs(L[i]), Math.abs(R[i]));
  const g = peak > 0 ? 0.89 / peak : 1; // normalize to about -1 dBFS
  const data = Buffer.alloc(L.length * 4);
  for (let i = 0; i < L.length; i++) {
    data.writeInt16LE(Math.round(Math.max(-1, Math.min(1, L[i] * g)) * 32767), i * 4);
    data.writeInt16LE(Math.round(Math.max(-1, Math.min(1, R[i] * g)) * 32767), i * 4 + 2);
  }
  const h = Buffer.alloc(44);
  h.write('RIFF', 0); h.writeUInt32LE(36 + data.length, 4); h.write('WAVE', 8); h.write('fmt ', 12);
  h.writeUInt32LE(16, 16); h.writeUInt16LE(1, 20); h.writeUInt16LE(2, 22); h.writeUInt32LE(SR, 24);
  h.writeUInt32LE(SR * 4, 28); h.writeUInt16LE(4, 32); h.writeUInt16LE(16, 34); h.write('data', 36);
  h.writeUInt32LE(data.length, 40);
  writeFileSync(join(out, file), Buffer.concat([h, data]));
  console.log(`wrote ${join(out, file)}`);
}

// Adds a mono voice into the stereo buffer at time t (pan -1..1).
function add([L, R], t, len, fn, pan = 0, gain = 1) {
  const s0 = Math.floor(t * SR), n = Math.floor(len * SR);
  const gl = gain * Math.cos((pan + 1) * Math.PI / 4), gr = gain * Math.sin((pan + 1) * Math.PI / 4);
  for (let i = 0; i < n && s0 + i < L.length; i++) {
    const v = fn(i / SR, i);
    L[s0 + i] += v * gl; R[s0 + i] += v * gr;
  }
}
const tri = (p) => 2 * Math.abs(2 * (p - Math.floor(p + 0.5))) - 1;
const lowpass = (cut) => { let y = 0; const a = 1 - Math.exp(-2 * Math.PI * cut / SR); return (x) => (y += a * (x - y)); };
const highpass = (cut) => { const lp = lowpass(cut); return (x) => x - lp(x); };

// ---- instruments ----
function kickAt(b, t, g) { let ph = 0; add(b, t, 0.4, (x) => { ph += (45 + 85 * Math.exp(-x * 28)) / SR; return Math.sin(2 * Math.PI * ph) * Math.exp(-x * 9); }, 0, g); }
function hatAt(b, t, g, pan) { const hp = highpass(7000); add(b, t, 0.06, (x) => hp(rnd()) * Math.exp(-x * 70), pan, g); }
function clapAt(b, t, g) {
  const hp = highpass(900), lp = lowpass(5000);
  add(b, t, 0.25, (x) => { const bursts = x < 0.03 ? (Math.floor(x / 0.01) % 2 === 0 ? 1 : 0.3) : 1; return lp(hp(rnd())) * bursts * Math.exp(-x * 18); }, 0, g);
}
function pluckAt(b, t, note, len, g, pan) {
  const f = midi(note), lp = lowpass(2600);
  add(b, t, len, (x) => lp(tri(f * x) + 0.5 * tri(f * 1.003 * x + 0.25) + 0.25 * Math.sin(2 * Math.PI * 2 * f * x)) *
    Math.exp(-x * 5) * Math.min(1, x * 400), pan, g);
}
function bassAt(b, t, note, len, g) {
  const f = midi(note), lp = lowpass(500);
  add(b, t, len, (x) => lp(Math.sin(2 * Math.PI * f * x) + 0.35 * tri(f * x)) * Math.min(1, x * 300) * Math.exp(-x * 3) *
    Math.min(1, (len - x) * 60), 0, g);
}
function bellAt(b, t, note, g, pan) {
  const f = midi(note);
  add(b, t, 1.2, (x) => (Math.sin(2 * Math.PI * f * x) + 0.3 * Math.sin(2 * Math.PI * f * 2.76 * x) * Math.exp(-x * 6)) *
    Math.exp(-x * 3.5) * Math.min(1, x * 800), pan, g);
}
function reverb([L, R], mix = 0.18) {
  const taps = [[0.0297, 0.6], [0.0371, 0.55], [0.0411, 0.5], [0.0437, 0.45]];
  for (const ch of [L, R]) {
    const dry = Float32Array.from(ch);
    for (const [d, fb] of taps) {
      const n = Math.floor(d * SR * (ch === R ? 1.07 : 1)); const line = new Float32Array(dry.length);
      for (let i = 0; i < dry.length; i++) { line[i] = dry[i] + (i >= n ? line[i - n] * fb : 0); ch[i] += line[i] * mix / taps.length; }
    }
  }
}

// ---- music bed: G - D - Em - C, bright plucks, soft drums, room for a voice ----
function makeBed(seconds, bpm) {
  const beat = 60 / bpm, bar = beat * 4, b = buf(seconds);
  const chords = [[55, 59, 62, 67], [50, 57, 62, 66], [52, 55, 59, 64], [48, 55, 60, 64]]; // G D Em C
  const roots = [43, 38, 40, 36];
  const hook = [74, 71, 74, 76, 74, 71, 67, 69]; // simple bell motif, every other bar
  for (let barN = 0; barN * bar < seconds; barN++) {
    const c = chords[barN % 4], t0 = barN * bar;
    for (let s = 0; s < 8; s++) {
      const t = t0 + s * beat / 2;
      // pluck rhythm: off-beat emphasis keeps it bouncy
      if ([0, 3, 4, 6].includes(s)) c.forEach((n, i) => pluckAt(b, t + i * 0.006, n + 12, 0.6, 0.11, (i - 1.5) / 3));
      bassAt(b, t, roots[barN % 4] + (s % 4 === 3 ? 7 : 0), beat / 2 * 0.95, 0.38);
      hatAt(b, t + (s % 2 ? 0.012 : 0), s % 2 ? 0.16 : 0.09, s % 2 ? 0.3 : -0.3);
    }
    for (let q = 0; q < 4; q++) {
      if (q === 0 || q === 2) kickAt(b, t0 + q * beat, 0.65);
      if (q === 1 || q === 3) clapAt(b, t0 + q * beat, 0.32);
    }
    if (barN % 2 === 1) hook.forEach((n, i) => bellAt(b, t0 + i * beat / 2, n, 0.07, 0.25));
  }
  reverb(b, 0.22);
  // fade in 0.05s, fade out last 1.5s
  const [L, R] = b;
  for (let i = 0; i < L.length; i++) {
    const t = i / SR, g = Math.min(1, t / 0.05, (seconds - t) / 1.5);
    L[i] *= g; R[i] *= g;
  }
  return b;
}

// ---- sound effects ----
function whoosh() {
  const b = buf(0.7), [L, R] = b;
  let y1 = 0, y2 = 0;
  for (let i = 0; i < L.length; i++) {
    const t = i / SR, env = Math.sin(Math.PI * Math.min(1, t / 0.6)) ** 2;
    const a = 1 - Math.exp(-2 * Math.PI * (250 + 4500 * env) / SR); // filter opens and closes with the swell
    y1 += a * (rnd() - y1); y2 += a * (y1 - y2);
    const pan = -0.8 + 1.6 * Math.min(1, t / 0.6), v = y2 * env;
    L[i] = v * (1 - pan) / 2; R[i] = v * (1 + pan) / 2;
  }
  return b;
}
function pop() {
  const b = buf(0.15); let ph = 0;
  add(b, 0, 0.15, (x) => { ph += (500 + 900 * Math.min(1, x / 0.02)) / SR; return Math.sin(2 * Math.PI * ph) * Math.exp(-x * 40) * Math.min(1, x * 2000); });
  return b;
}
function sparkle() {
  const b = buf(1.4);
  [88, 91, 95, 100].forEach((n, i) => bellAt(b, i * 0.06, n, 0.5, (i - 1.5) / 2));
  reverb(b, 0.3);
  return b;
}
function impact() {
  const b = buf(0.9), lp = lowpass(900); let ph = 0;
  add(b, 0, 0.9, (x) => { ph += (35 + 60 * Math.exp(-x * 12)) / SR; return Math.sin(2 * Math.PI * ph) * Math.exp(-x * 5) + lp(rnd()) * 0.6 * Math.exp(-x * 14); });
  return b;
}

writeWav('bed-happy.wav', makeBed(Number(opts.seconds), Number(opts.bpm)));
writeWav('whoosh.wav', whoosh());
writeWav('pop.wav', pop());
writeWav('sparkle.wav', sparkle());
writeWav('impact.wav', impact());
