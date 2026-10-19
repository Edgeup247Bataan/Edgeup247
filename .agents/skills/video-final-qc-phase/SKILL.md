---
name: "video-final-qc-phase"
description: "Stage 8 (Final QC) of the short-form SOP: full-video review and export check, or Targeted Fix mode that checks and fixes only one part (a time range, element or stage) and re-checks what it touches."
---

# Video Final QC Phase (Stage 8 of the Short-Form Editing SOP)

Story Structure → Cutting & Pacing → Music → Color Grading → Effects & Animation (5A → 5B) → Subtitles & On-Screen Text → Sound Design & Final Mix → **Final QC (this skill)**.

Goal: catch everything that would hurt the video before it goes out, fix it at the stage that owns it, and export a file that plays right on the target platform. QC checks the video; it doesn't redesign it.

Reply in the user's language. If they write in Taglish, answer in Taglish.

## Scope

**This stage:** full-video review (story, picture, text, audio), technical and export checks, a QC Report with numbered issues, **Targeted Fix mode** for one specific part, publish prep, and an optional post-publish review.

**Not this stage:** new creative direction or a style change. If QC finds that a whole stage needs redoing, say so and route it to that stage's skill instead of patching it here.

## Core rules

1. **Check, don't redesign.** Judge the video against its own plan: the story map, the reference, and the plans from Stages 1–7. Personal taste isn't a QC issue; mark it "Optional" at most.
2. **Story over stopwatch.** Don't flag a section just because it runs past its usual time window. Flag it only if it really drags or repeats. Never suggest cutting essential content to hit a time.
3. **Fix at the source.** Every issue names the stage that owns it (2, 3, 4, 5A, 5B, 6, 7) and uses that stage's rules for the fix.
4. **Smallest fix that works.** Prefer fixing one part over redoing a stage. Never change parts nobody asked about.
5. **Every fix has a ripple check.** A change can move or break other things (timing, subtitles, SFX sync, loudness). Re-check what the fix touches before calling it done.
6. **Real file first.** If the export or a clip is uploaded, measure it in the workspace instead of guessing: ffprobe for resolution, frame rate, duration and codecs; ffmpeg ebur128/loudnorm for loudness and true peak; blackdetect, freezedetect and silencedetect for glitches; extracted frames for visual and safe-area checks. Report the real numbers.
7. **Be honest about limits.** Claude doesn't edit the video file itself; it gives the editor exact fix instructions. Anything Claude couldn't see or hear is marked "check by eye" or "check by ear," never passed.

## Choose the mode

- **Full QC:** the cut is finished and the user wants a complete check before export. Go to Step 1.
- **Targeted Fix:** the user points at one part ("yung subtitle sa 0:12," "audio lang sa ending," "ayusin mo lang #3 at #5," "color ng shot 4"). Go straight to Step 5. Don't run the full review unless they ask.

If the request is unclear, ask one question: "Buong video ba, o specific part lang?"

## Step 1 — Get the context (ask only what's missing)
- The exported video (best), or the final timeline described with the plans from Stages 1–7
- Story map and objective; reference if there was one
- Platform(s) and format (Reels/TikTok/Shorts 9:16, YouTube 16:9, feed 4:5), target length
- Brand details: name spelling, logo, colors, CTA, prices, location
- Burned-in subtitles, caption file (SRT), or both
- Editing app and export preset used

## Step 2 — Review passes (full QC)
1. **Pass 1 — normal speed, with sound, on a phone.** Watch it like a viewer. Note the first moment you felt bored, confused or pulled out.
2. **Pass 2 — muted.** Does the story still make sense with only picture and text? Are subtitles carrying the message?
3. **Pass 3 — earphones and phone speaker.** Clarity of every word, music balance, harsh SFX, clicks.
4. **Pass 4 — technical.** Measure the file (Core rule 6) and step through cuts, transitions and text frame by frame only where Passes 1–3 felt off.

## Step 3 — Checklist by stage
Mark each item **Pass**, **Fix** or **N/A**.

**Story (Stage 1)**
- [ ] The first 1–2 seconds give a reason to stop scrolling
- [ ] The hook's promise is paid off; nothing misleading
- [ ] Clear progression; the ending resolves the opening and matches the objective/CTA

**Cut & pacing (Stage 2)**
- [ ] No dead air, repeated takes, flash frames or accidental gaps
- [ ] Expressive pauses kept; word-by-word repairs sound seamless
- [ ] Pacing fits the story (drags or rushes flagged with timecodes)

**Music (Stage 3)**
- [ ] Music cleared for this use; mood fits the story
- [ ] Cut and music feel locked together; payoff lands on the biggest accent; ending resolves

**Color (Stage 4)**
- [ ] Shots match each other; no sudden jumps in exposure or white balance
- [ ] Skin natural, food appetizing, no clipped highlights or crushed faces

**Effects & animation (5A/5B)**
- [ ] Every transition, zoom, mask and graphic has a purpose; nothing busy
- [ ] Masks and tracking clean (no edges, sliding or jitter)
- [ ] Nothing covers faces, product, food hero moments or key action

**Subtitles & text (Stage 6)**
- [ ] Subtitles match the final audio; names, prices and brand terms correct
- [ ] Synced, readable on a phone, inside safe areas, no collisions with graphics
- [ ] Re-timed if the cut changed after Stage 6

**Sound & final mix (Stage 7)**
- [ ] Voice clear and natural; level steady; no clicks, pops or digital silence
- [ ] SFX purposeful and in sync; music and SFX never cover words
- [ ] Planned silences and dips land; mix balanced on phone speaker and earphones

**Technical & platform**
- [ ] Right aspect ratio and resolution (e.g. 1080×1920 for 9:16); no black bars unless intended
- [ ] Frame rate matches the timeline; no stutter, dropped or duplicated frames
- [ ] Loudness about −14 LUFS integrated, true peak ≤ −1 dBTP, no clipping (unless the platform/client says otherwise)
- [ ] Audio and video stay in sync from start to end
- [ ] First and last frames are clean (no black flash or stray frame); duration as intended
- [ ] Text, logo and CTA clear of platform UI on a real phone preview
- [ ] Spelling and brand details (name, logo, colors, price, location, handle) correct

## Step 4 — Output: QC Report
**1. Verdict:** Ready to export / Fix first (with the count of Must-fix items).

**2. Measured specs** (if a file was uploaded): resolution, frame rate, duration, codecs, integrated LUFS, true peak, glitches found.

**3. Issue list** (numbered, timeline order, so the user can pick any of them):

| # | Time | Stage | Issue | Severity | Fix | Ripple check |
|---|---|---|---|---|---|---|
| 1 | 0:03.2 | 6 | "sisig" spelled "sizig" | Must fix | Correct subtitle #4 | None |
| 2 | 0:11.0–0:12.4 | 7 | Click at the cut | Should fix | 2-frame audio crossfade + room tone | Re-listen 0:10–0:14 |
| 3 | 0:18.5 | 2 | Pause drags | Optional | Trim ~8 frames | Re-time subs, SFX and music after 0:18.5 |

Severity: **Must fix** (blocks export: wrong info, broken audio/picture, misleading hook), **Should fix** (noticeable, hurts quality), **Optional** (polish).

**4. Next step:** "Pick the numbers you want fixed (e.g. 'ayusin mo lang #1 at #3'), or say 'fix all Must fix.'" Then run Step 5 on only those items.

## Step 5 — Targeted Fix mode (one specific part only)
Use this when the user picks issue numbers or points at a part directly.

**5.1 Lock the fix scope.** Write one line per fix:
`Fix #_ | Time: in–out | Element: (subtitle #, shot, SFX, music, graphic, color) | Stage owner | Problem | Wanted result`
If the user's description is missing the time or element, ask for just that.

**5.2 Fix only that part.** Use the owning stage's rules for the fix (e.g. a subtitle fix follows the subtitles skill's timing and line-break rules). Don't touch anything outside the scope, don't restyle, and don't "improve" nearby parts unasked. If the fix needs a bigger change than the scope allows, say so and let the user decide.

**5.3 Ripple check.** Check what this kind of fix can affect:

| If you change… | Also re-check |
|---|---|
| Cut length or timing (Stage 2) | Music sync and payoff (3), transitions and graphics (5A/5B), subtitle timing (6), SFX sync (7) after the cut point, total length |
| Music edit (3) | Cut sync and payoff, beat-synced transitions/text, ducking and final loudness (7) |
| Color of a shot (4) | Match with neighboring shots, masks, text contrast on that shot |
| Transition, zoom, mask or graphic (5A/5B) | Text collisions, SFX cue timing, safe areas |
| Subtitle text, position or timing (6) | Collisions with graphics, emphasis consistency, the SFX tied to it |
| Dialogue cleanup, SFX or mix level (7) | Words still clear, "recheck" subtitles, ducking around it, planned silences, final loudness |

**5.4 Re-check only what's needed.** Watch the fixed part with about 1–2 seconds of handle before and after, plus every rippled item. Re-measure loudness if any audio changed. Don't re-run the full QC unless the fix moved timing across the whole video.

**5.5 Output: Fix Ticket**

| Fix # | Time | Stage | Change made / instruction | Ripple checked | Status |
|---|---|---|---|---|---|
| 1 | 0:03.2 | 6 | Subtitle #4: "sizig" → "sisig" | None needed | Done |
| 3 | 0:18.5 | 2 | Trim 8f from the pause | Subs #9–14 shifted −8f, music still lands on payoff | Check by ear |

Then: "Anything else to fix, or ready to export?"

**Quick fix format for the user** (they can send this anytime, even without a full QC):
`Fix: [time or part] / [what's wrong] / [what I want]`
e.g. "Fix: 0:12 subtitle / natatakpan yung mukha / ilipat sa taas."

## Step 6 — Export and publish
- Export with the app's high-quality preset for social, or as a starting point: H.264, resolution and frame rate matching the timeline, high bitrate (about 15–25 Mbps for 1080p), AAC audio at 48 kHz. The platform recompresses, so start from a clean, high-quality file.
- Watch the exported file once more on a phone. Exports can differ from the timeline (text renders, color shifts, audio sync).
- If subtitles are burned in, turn off the platform's auto-captions. If using an SRT, upload it and spot-check it.
- Pick a cover/thumbnail frame that matches the hook. Check the caption, hashtags, tags and CTA link for typos.

**App hints**
- **CapCut:** Export → resolution, frame rate, "Recommended" or higher bitrate; check "Captions" export if using SRT.
- **Premiere Pro:** Export → H.264 match source, high bitrate, Loudness Normalization (ITU BS.1770) if not done in the mix; captions burn-in or sidecar.
- **DaVinci Resolve:** Deliver page → H.264/H.265 preset, match timeline resolution and frame rate, Normalize Audio Levels if needed; subtitle burn-in or separate file.

## Step 7 — After publishing (optional)
When the user shares results, compare retention and engagement to the objective. Find the drop-off moments and connect each one to the stage that could improve it next time. Editing supports performance but can't guarantee it.

## Final check before export
- [ ] All Must-fix items done; Should-fix items done or knowingly accepted
- [ ] Every fix ripple-checked
- [ ] Measured or confirmed: resolution, frame rate, loudness, true peak, sync
- [ ] Watched the exported file in full, once with sound and once muted, on a phone
- [ ] Brand details and spelling correct

If you're not sure the viewer will get it, it isn't ready.
