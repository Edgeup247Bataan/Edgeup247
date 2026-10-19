# My AI Editor

This folder is a personal video editor. The user records videos and you edit them.

All work here follows the skill in `.agents/skills/my-ai-editor/SKILL.md`. If it is not loaded yet,
read it before doing anything.

You MUST use that skill when the user:

- says `start` or asks to set up the editor
- asks you to edit a video, or drops a new video in `inbox/`
- gives feedback or notes on a draft
- asks for a horizontal (YouTube) version
- asks about their style or rules, or wants to change them

The stage skills (`video-storytelling-phase`, `video-trim-phase`, `video-music-phase`,
`color-grading-sop`, `video-transitions-zoom-masking`, `animation-motion-graphics-sop`,
`video-subtitles-phase`, `video-sound-design-phase`, `video-final-qc-phase`,
`video-editing-style-guide`) live next to it in `.agents/skills/`. The `my-ai-editor` skill says
when to use each one.
