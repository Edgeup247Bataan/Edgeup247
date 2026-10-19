#!/usr/bin/env node
// One-time setup. Safe to re-run.
//   node setup.mjs            install or repair, at the pinned engine version
//   node setup.mjs --update   move the engine to its newest version (goes back if that fails)
//
// 1. checks Node, Git, FFmpeg (and warns if Chrome is missing)
// 2. installs the editing engine (Herk Edit Kit, MIT) into kit/, repairing a half-finished install
// 3. renders a test video into outbox/
// 4. reports whether transcription is configured
import { spawnSync } from 'node:child_process';
import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const kit = join(root, 'kit');
const KIT_REPO = 'https://github.com/nateherkai/herk-edit-kit.git';
// Pinned so an upstream change cannot break a working setup. Bump deliberately, or use --update.
const KIT_COMMIT = '10511e5af86fc47756ea89803b397422e2d89284';
// Skip the kit's large showcase media (not needed to edit).
const SPARSE = ['/*', '!/examples/showcase/', '!/video-projects/**/*.mp4', '!/video-projects/**/*.mov',
  '!/video-projects/**/*.webm', '!/video-projects/**/*.mp3', '!/video-projects/**/*.wav'];

const win = process.platform === 'win32';
const UPDATE = process.argv.includes('--update');
const step = (msg) => console.log(`\n== ${msg}`);
const fail = (msg) => { console.error(`\nSETUP STOPPED: ${msg}`); process.exit(1); };

// Returns true if the command exits with code 0. npm/npx are .cmd shims on Windows.
function run(cmd, args, cwd = root, quiet = false) {
  const opts = { cwd, stdio: quiet ? 'pipe' : 'inherit', encoding: 'utf8' };
  const r = win && (cmd === 'npm' || cmd === 'npx')
    ? spawnSync([cmd, ...args].join(' '), { ...opts, shell: true })
    : spawnSync(cmd, args, opts);
  return !r.error && r.status === 0;
}

step('Checking tools');
const missing = [];
if (Number(process.versions.node.split('.')[0]) < 22) missing.push('Node.js 22 or newer');
for (const [tool, flag, label] of [['git', '--version', 'Git'], ['ffmpeg', '-version', 'FFmpeg'], ['ffprobe', '-version', 'FFmpeg']]) {
  if (!run(tool, [flag], root, true)) missing.push(label);
}
if (missing.length) {
  const hint = win
    ? 'winget install OpenJS.NodeJS.LTS Git.Git Gyan.FFmpeg   (then open a new terminal)'
    : process.platform === 'darwin'
      ? 'brew install node git ffmpeg'
      : 'Use your package manager to install node (22+), git and ffmpeg';
  fail(`missing ${[...new Set(missing)].join(', ')}.\nInstall with: ${hint}`);
}
console.log(`Node ${process.versions.node}, Git, FFmpeg: OK`);

// Rendering needs Chrome. Warn early instead of failing later at the test render.
const chromePaths = win
  ? [process.env.PROGRAMFILES, process.env['PROGRAMFILES(X86)'], process.env.LOCALAPPDATA]
      .filter(Boolean).map((d) => join(d, 'Google', 'Chrome', 'Application', 'chrome.exe'))
  : process.platform === 'darwin'
    ? ['/Applications/Google Chrome.app', join(homedir(), 'Applications', 'Google Chrome.app')]
    : [];
const chrome = chromePaths.some((p) => existsSync(p)) ||
  (!win && process.platform !== 'darwin' &&
    ['google-chrome', 'google-chrome-stable', 'chromium', 'chromium-browser'].some((c) => run(c, ['--version'], root, true)));
if (!chrome) {
  const hint = win ? 'winget install Google.Chrome' : process.platform === 'darwin' ? 'brew install --cask google-chrome' : 'install google-chrome or chromium';
  console.log(`WARNING: Chrome was not found. Rendering usually needs it. Install with: ${hint}`);
} else {
  console.log('Chrome: OK');
}

for (const dir of ['inbox', 'outbox', 'my-sounds']) mkdirSync(join(root, dir), { recursive: true });

step('Installing the editing engine into kit/');
// Checks the checked-out commit, not just kit/.git, so a half-finished install is repaired on re-run.
const git = (...args) => spawnSync('git', ['-C', kit, ...args], { encoding: 'utf8' }).stdout?.trim();
const kitHead = () => git('rev-parse', 'HEAD');
// --update records the version it moved to here (inside kit/.git, so git status stays clean);
// without it, setup keeps that version instead of "repairing" back to KIT_COMMIT.
const versionFile = join(kit, '.git', 'my-ai-editor-commit');
const savedVersion = () => { try { return readFileSync(versionFile, 'utf8').trim(); } catch { return ''; } };
const checkout = (commit) =>
  run('git', ['-C', kit, 'sparse-checkout', 'set', '--no-cone', ...SPARSE]) &&
  run('git', ['-C', kit, '-c', 'advice.detachedHead=false', 'checkout', '--quiet', commit]);
if (!existsSync(join(kit, '.git')) &&
    !run('git', ['clone', '--quiet', '--no-checkout', '--depth', '1', '--filter=blob:limit=1m', KIT_REPO, kit])) {
  fail('could not download the editing engine. Check your internet connection and run setup again.');
}
let target = savedVersion() || KIT_COMMIT;
let previous = '';
if (UPDATE && kitHead() && existsSync(join(kit, 'package.json'))) {
  if (!run('git', ['-C', kit, 'fetch', '--quiet', '--depth', '1', '--filter=blob:limit=1m', 'origin', 'main'])) {
    fail('could not check for a newer engine. Check your internet connection and run setup again.');
  }
  const latest = git('rev-parse', 'FETCH_HEAD');
  if (latest === kitHead()) {
    console.log(`Already on the newest engine version (${latest.slice(0, 7)}).`);
  } else {
    previous = kitHead();
    target = latest;
    console.log(`Updating the engine: ${previous.slice(0, 7)} -> ${latest.slice(0, 7)}`);
  }
}
// Undo a failed --update so the editor keeps working on the version it had.
const failUpdate = (msg) => {
  if (previous && checkout(previous)) {
    run('npm', ['ci', '--no-audit', '--no-fund'], kit);
    writeFileSync(versionFile, `${previous}\n`);
    msg += `\nWent back to the previous engine version (${previous.slice(0, 7)}), so editing still works.`;
  }
  fail(msg);
};
if (kitHead() === target && existsSync(join(kit, 'package.json'))) {
  console.log('kit/ already installed.');
} else {
  if (!previous && !run('git', ['-C', kit, 'fetch', '--quiet', '--depth', '1', '--filter=blob:limit=1m', 'origin', target])) {
    fail(`could not download engine version ${target}. Check your internet connection and run setup again.`);
  }
  if (!checkout(target)) {
    if (previous) failUpdate('could not switch to the new engine version, usually because a file inside kit/ was edited by hand.');
    fail(`could not check out engine version ${target}. Move any projects you want to keep out of kit/video-projects, delete kit/, and run setup again.`);
  }
  if (previous) writeFileSync(versionFile, `${target}\n`);
}

step('Installing engine packages (npm ci)');
if ((previous || !existsSync(join(kit, 'node_modules', 'hyperframes'))) && !run('npm', ['ci', '--no-audit', '--no-fund'], kit)) {
  failUpdate('npm ci failed in kit/. Read the error above.');
}
run('npm', ['run', 'setup', '--silent'], kit);

step('Rendering a test video');
const demo = join(kit, 'video-projects', 'demo');
const rendered = join(demo, 'renders', 'demo.mp4');
const testVideo = join(root, 'outbox', 'setup-test.mp4');
if (!existsSync(demo)) run('npm', ['run', 'demo', '--silent'], kit);
if ((previous || !existsSync(rendered)) &&
    !run('npx', ['hyperframes', 'render', '--quality', 'draft', '--output', 'renders/demo.mp4'], demo)) {
  failUpdate('the test render failed. Run `npx hyperframes doctor` inside kit/video-projects/demo to see why (usually Chrome is missing).');
}
copyFileSync(rendered, testVideo);
console.log(`Test video: ${testVideo}`);

step('Transcription');
if (!existsSync(join(root, '.env'))) copyFileSync(join(root, '.env.example'), join(root, '.env'));
try { process.loadEnvFile(join(root, '.env')); } catch { /* no .env values yet */ }
const groq = Boolean(process.env.GROQ_API_KEY);
const pythonCmd = win ? 'python' : 'python3';
const localWhisper = run(pythonCmd, ['-c', 'import faster_whisper'], root, true);
console.log(`Groq key in .env: ${groq ? 'yes' : 'no'}`);
console.log(`Local faster-whisper: ${localWhisper ? 'yes' : 'no'}`);

if (previous) console.log(`\nEngine updated to ${target.slice(0, 7)}. If edits look worse, tell Claude the previous version was ${previous.slice(0, 7)}.`);
console.log(`\nSETUP COMPLETE${groq || localWhisper ? '' : ' (transcription not configured yet)'}`);
console.log(`Drop raw videos in ${resolve(root, 'inbox')} or drag one into the chat and say "edit this".`);
