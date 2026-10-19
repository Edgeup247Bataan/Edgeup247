# EdgeupEditor247

By Edgeup247.

A personal AI video editor that runs inside Claude Code.

Drop in a raw video and say **"edit this"**. You get back a finished first draft: cut, captioned, with music, sound effects and motion graphics. Then give notes in
plain words (English, Tagalog, Taglish), the way you would to a human editor. Lasting notes become
rules it follows on every future edit, so it learns your style.

## Setup (once)

### One prompt

Open Claude Code in any folder (terminal: `claude`, or the **Code** tab in the Claude desktop app),
copy this whole prompt, paste it and press Enter:

```
Set up my AI video editor for me.

1. Check that Git is installed. If it is missing, ask me once, then install it.
2. Clone https://github.com/Edgeup247Bataan/Edgeup247.git into my Documents folder (Edgeup247).
   If it already exists there, use that copy instead of cloning again.
3. Go into that folder, read AGENTS.md and the my-ai-editor skill, and follow its "start" steps:
   run node setup.mjs, install anything it reports missing after asking me, and help me choose free
   transcription (a Groq key I paste into .env myself, never in this chat, or local faster-whisper).
4. Open the test video, then walk me through style setup.
5. When you finish, tell me the full path of the inbox folder and remind me to open Claude inside
   that folder from now on.
```

### Step by step

1. **Get it.** `git clone https://github.com/Edgeup247Bataan/Edgeup247.git`, or use
   *Code > Download ZIP* on GitHub and unzip it.
2. **Open the folder in Claude Code.** In a terminal: `cd Edgeup247` then `claude`.
   Or in the Claude desktop app, open the Code tab and choose the folder.
3. **Type `start`.** Claude checks your computer, installs what is missing (with your OK), renders
   a test video, and asks a few questions about your style.

From then on, always open Claude **inside this folder** so it reads its instructions.

## Editing

1. Put a raw video in `inbox/`, or drag it into the Claude chat.
2. Say **"edit this"**.
3. Watch the draft in `outbox/`, tell Claude what to change, and repeat until you say "final".

Vertical 9:16 for Reels, TikTok and Shorts by default. Ask for a horizontal version for YouTube
and it gets its own framing and text placement.

## What you need

- **Claude Code** with a paid Claude plan. Editing uses a lot of usage; Pro works, Max is better
  if you edit often.
- **Node.js 22+, Git, FFmpeg and Chrome.** Setup tells you what is missing and Claude can install
  it for you.
- **Transcription, free either way:** a free [Groq](https://console.groq.com/keys) key (fast, best
  for Taglish), or [faster-whisper](https://github.com/SYSTRAN/faster-whisper) on your own computer
  (`pip install faster-whisper`, needs Python).
- About 1 GB of disk space.

**Tested on:** macOS 26.5 (Apple Silicon), October 2026. Windows and Linux are supported by setup but not tested yet.

## Costs

Besides the editor itself, you pay only for your Claude plan. Groq's free tier covers normal use.
Claude will never use a paid service without asking.

## Not included

- An exported CapCut project. You get the MP4 plus the editable project inside `kit/video-projects/`.
- Stock music or footage. The editor makes its own simple music and sound effects (`tools/make-sounds.mjs`,
  safe for commercial use); for better music, put tracks you have a commercial license for into `my-sounds/`.
- Posting. It never uploads your videos anywhere.

## Folders

```
Edgeup247/
  AGENTS.md / CLAUDE.md          points Claude to the skills below
  .agents/skills/my-ai-editor/   how Claude runs your editor (SKILL.md) and the reference-reel
                                 technique library (references/reel-references.md)
  .agents/skills/<stage skills>/ the editing playbook: story, cuts, music, color, effects,
                                 subtitles, sound, final QC
  .claude/skills/                small pointers so Claude Code finds the skills above
  setup.mjs                      one-time setup (safe to re-run)
  tools/                         free transcription (Groq or local) and make-sounds.mjs (music + SFX)
  inbox/                         your raw videos
  outbox/                        drafts and finals
  my-sounds/                     your music and sound effects
  my-style.example.md            template; setup turns it into your private my-style.md
  my-rules.example.md            template; your notes become rules in your private my-rules.md
  kit/                           the editing engine (installed by setup, not in this repo)
```

Your footage, renders, style, rules and key are in `.gitignore` and never leave your computer.

## Updating the engine

Setup installs a pinned version of the engine. To move to the newest one, run
`node setup.mjs --update` (or tell Claude "update the engine"). It downloads the latest version,
reinstalls its packages and renders the test video again. If any of that fails, it goes back to the
version you had, so editing keeps working. Later plain `node setup.mjs` runs keep the version you
updated to. Your style, rules, inbox and outbox are untouched.

## Credits

The editing engine is [Herk Edit Kit](https://github.com/nateherkai/herk-edit-kit) by Nate Herk
(MIT), built on [HyperFrames](https://github.com/heygen-com/hyperframes) (Apache-2.0) and
[GSAP](https://gsap.com/) (GSAP Standard License). Setup downloads it from its own repository; it
is not copied here. The AI Automation Society brand assets inside that kit belong to their owner
and are not licensed for reuse.

EdgeupEditor247 by Edgeup247.

Setup is based on [free247editor](https://github.com/riecodes/free247editor) by riecodes, MIT.

EdgeupEditor247 is not affiliated with Nate Herk, HeyGen, or any of the AI agent makers.

## License

The source is visible on GitHub, but it is not open source. Only buyers may use it, for their
own videos (commercial videos included). Sharing, reselling or republishing the editor is not
allowed. See [LICENSE](LICENSE). The Herk Edit Kit engine, HyperFrames and GSAP keep their own
licenses.
