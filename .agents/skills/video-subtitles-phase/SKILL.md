---
name: "video-subtitles-phase"
description: "Stage 6 (Subtitles & On-Screen Text) of the short-form SOP: accurate Taglish-friendly transcription, readable timing and line breaks, typography, emphasis and safe placement after effects and animation, before sound design and the final mix."
---

# Video Subtitles Phase (Stage 6 of the Short-Form Editing SOP)

Story Structure → Cutting & Pacing → Music → Color Grading → Effects & Animation (5A → 5B) → **Subtitles & On-Screen Text (this skill)** → Sound Design & Final Mix → Final QC.

The cut and music are already locked (Stages 2–3), so text is timed against the real pacing. Picture and text are finished here; Stage 7 then builds the SFX and final mix around the final text (SFX for text pops, ducking around key text moments).

Goal: every word on screen is accurate, easy to read on a phone, and supports the story instead of competing with the footage. Every text element needs a purpose, and every subtitle must be easy to read.

Reply in the user's language. If they write in Taglish, answer in Taglish.

## Scope

**This stage:** transcription and verification, subtitle segmentation and timing, the text style system (subtitles, hook/headline, supporting text, callouts, closing text), placement and safe areas, keyword emphasis, simple subtitle animation, and a final pass on **all** on-screen text for accuracy, hierarchy and collisions.

**Not this stage:** re-cutting picture or words (Stage 2), kinetic typography, logo animation, tracked labels and other motion graphics (Stage 5B), changing the music edit (Stage 3), dialogue cleanup, SFX and the final mix (Stage 7), export and platform checks (Stage 8).

**Division of work with 5B:** if 5B already designed and animated a text element (hook slam, lower third, tracked label), keep its design and motion. Here you only fix its spelling, hold time, hierarchy and any collision with the subtitles. Hook and caption lines drafted in Stage 1 get their final wording and styling here, unless 5B already animated them.

## Core rules

1. **Accuracy first.** Subtitles never change the speaker's meaning. Don't rewrite dialogue for drama unless the project asks for edited or summarized captions.
2. **Keep their voice.** Keep the original language and Taglish phrasing. Don't "correct" Taglish into English or formal Filipino. Pick one spelling for common words (ganun/ganoon, talaga, 'yung/yung) and use it everywhere.
3. **Reference first.** When a reference exists, follow its typography, placement, emphasis and motion. Don't swap in a familiar default.
4. **No reference = deliberate direction, not a default style.** Choose the treatment from the video type, objective, brand and footage (Step 3B). Clean minimal subtitles fit one video; bold kinetic captions fit another.
5. **Readability over decoration.** If an effect makes text harder to read or adds nothing, simplify or remove it.
6. **Footage and story come first.** Text never covers faces, mouths, product details, the food hero moment or key action, and never fights the pacing from Stage 2 or the graphics from 5B.
7. **Don't touch the cut.** If a line is unclear because of the audio or a bad edit, flag it back to Stage 2 (bad edit) or note it for Stage 7 (noise that cleanup may fix). Don't hide it with a subtitle that says something the audio doesn't.
8. **Be honest about limits.** Claude can't hear a video from its title or a description. If a video or audio file is uploaded, transcribe it in the workspace (e.g. Whisper) and mark low-confidence words. Never guess names, brands, prices or numbers; mark them "verify" and ask.

## Step 1 — Get the context (ask only what's missing)
- The locked cut (video or audio) or an existing transcript/SRT, plus timestamps if available
- Correct spellings: names, brands, products, places, prices, technical terms
- Reference (video, screenshot, sample) or the vibe they want
- Animation Plan from 5B (text already animated, subtitle zone reserved), the Stage 3 Music Plan (beat map, key music moments) and the Stage 1 hook/caption lines
- Platform and format (Reels/TikTok/Shorts 9:16, YouTube 16:9, feed 4:5)
- Brand fonts and colors if any
- Burned-in subtitles, a separate caption file (SRT), or both
- Editing app (CapCut, Premiere Pro, DaVinci Resolve, other)

## Step 2 — Transcribe and verify
1. Transcribe before styling. Auto-captions (CapCut, Premiere, Resolve, Whisper) are a first draft only; they often get Taglish, names and fast speech wrong.
2. Fix names, brand terms and numbers against what the user gave.
3. **Clean verbatim by default:** drop fillers (uh, um, ano…) and false starts that Stage 2 left in, but keep words that carry tone or meaning ("grabe", "promise", laughs if they matter). Use full verbatim only if the user asks.
4. Use punctuation to help reading, not to change the delivery. Short lines often need no final period.
5. Replay or ask about anything unclear. Never fill gaps with a guess. The audio isn't cleaned yet at this stage: if a word is only hard to hear because of noise, mark it "recheck after Stage 7".

## Step 3 — Style direction

### 3A: With a reference
Write a short **Reference Breakdown**: font class and weight, case, size, color, outline/shadow/box, alignment and position, words per screen and line structure, how key words are emphasized, how text enters/exits, how it relates to the subject and other graphics. Note what to match closely and what to adapt. If something can't be matched (font missing, app limit), offer the closest option and let the user choose.

### 3B: No reference — pick the treatment by video type
These are starting points; the footage and objective decide.

| Video type | Subtitle approach | Watch out for |
|---|---|---|
| Talking head / educational | Clear captions, natural phrases, selective keyword emphasis | Text over the mouth/eyes; highlighting everything |
| Storytelling / emotional | Calm, clean captions that follow the delivery and pauses | Flashy pops during emotional lines |
| Product showcase | Short, concise text; product stays the hero | Covering product details |
| Food / restaurant | Minimal, light captions; dish/price as supporting text | Text over the hero bite, pour or cheese pull |
| Fast-paced entertainment / hype | Short chunks (1–4 words), stronger emphasis on punchlines | Text too fast to read |
| Cinematic / aesthetic montage | Restrained text or none where imagery carries it | Subtitles fighting the visuals |
| Promo / ad | Main message and CTA get clear priority; supporting text readable | CTA shown too briefly |

House default when there is no reference (`.agents/skills/my-ai-editor/references/reel-references.md`): key lines get a two-tier headline (small light words plus one
huge heavy key word in the video's accent colour), and the spoken captions stay small, clean and out of the way.

Write a one-line **Text Direction Summary**, e.g. "Clean white sans, bold weight, soft shadow, 2-line max, lower-middle, yellow on one key word per line, no motion except a quick fade."

Show the Breakdown or Direction Summary before the full plan.

## Step 4 — Segmentation and timing
- Break lines into natural phrases. Keep related words together (don't split name + surname, number + unit, verb + its particle, "hindi + ko").
- **Line length:** for 9:16, usually 1–2 lines of about 20–32 characters each; for 16:9, up to about 42. Word-chunk captions (1–4 words) are a style choice, not a requirement.
- **Reading time:** roughly 0.3–0.4 s per word (about 15–17 characters per second for normal captions), minimum about 1 s for a short phrase, so text can be read once comfortably. Key info, prices and CTAs hold longer.
- **Sync:** appear with the first spoken syllable (a frame or two early is fine), leave shortly after the line ends. No subtitles before speech starts or long after it ends.
- Leave a small gap (2+ frames) between subtitles, or let them flow if the style does.
- Avoid rapid flicker changes. Don't sacrifice readability just to match every cut.
- Review at normal speed, not only frame by frame.

## Step 5 — Typography and hierarchy
Set one **text style system** and use it consistently:

| Role | Purpose | Typical treatment |
|---|---|---|
| Primary text | Hook, headline, key message | Largest, strongest weight, may be animated (5B) |
| Spoken subtitles | What the speaker says | Readable, secondary to the subject |
| Supporting text | Names, labels, context | Smaller, lighter |
| Callouts | Point at a detail | Short, near the detail |
| Closing text | CTA, brand line | Clear, held long enough |

- Readable on a phone: bold or semi-bold sans for most captions; on 1080×1920, subtitle text usually needs to be large enough to read at arm's length (check on a real phone, not just the timeline).
- Contrast against the footage with a subtle outline, shadow or box. Color graded shots can change brightness, so check every scene.
- Use brand fonts/colors when they exist and stay readable.
- Not every video needs every role. Avoid several big, animated text elements on screen at once.

## Step 6 — Placement and safe areas (vertical 9:16)
- Use the subtitle zone reserved in 5B. Keep text out of the bottom ≈ 20–25% (platform captions/UI), the right ≈ 12–15% (action buttons) and the top ≈ 10% (profile/header). For 16:9 and 4:5, keep inside the title-safe area.
- Keep subtitles off faces, mouths, product details and key action. Move them per shot when the composition needs it; consistency doesn't mean the same spot every time.
- Never let subtitles collide with 5B graphics or lower thirds. If they overlap in time, move one or shorten the other.
- If subtitles are burned in, tell the user to turn off the platform's auto-captions so text isn't doubled.

## Step 7 — Emphasis and animation
- Emphasize only words that carry the meaning, emotion or punchline. Starting point: at most one key word or short phrase per subtitle, and not on every subtitle.
- Use color, weight or scale; keep one emphasis style throughout. Emphasis must follow the speaker's delivery and never change the sentence's meaning.
- Subtitle motion is simple and serves reading: quick fade, slight pop, or word-by-word highlight if the reference/direction calls for it. Heavier kinetic text belongs to 5B.
- Spoken subtitles follow the speech, not the music. In montage or hype sections, word-chunk captions and text pops can land on beats from the Stage 3 beat map when that helps. If a text pop or emphasis should get a sound, list it for Stage 7. No excessive bounce, shake or scale.

**App hints**
- **CapCut:** Auto captions (fix Taglish errors by hand), text templates as a start only, "Highlight"/keyword color, export SRT for platforms that accept caption files.
- **Premiere Pro:** Text panel → Transcribe sequence → Create captions (set max characters and min duration), caption track styles, export SRT/burn-in on export.
- **DaVinci Resolve:** Subtitle track (Timeline → Create Subtitles from Audio in Studio), Text+ for styled captions, export SRT or burn in from the Deliver page.

## Step 8 — Output: Subtitle Plan
**1. Direction:** Reference Breakdown or Text Direction Summary.

**2. Text style system:** font, weight, size, color, outline/shadow/box and position for each role used.

**3. Subtitle list** (timeline order; also deliver as an .srt file when timestamps are available):

| # | In–Out | Text | Emphasis | Position | Note |
|---|---|---|---|---|---|
| 1 | 0:00.4–0:02.1 | Grabe, ito na talaga yung | — | Lower-middle | Hook line |
| 2 | 0:02.1–0:03.6 | **pinakamasarap** na sisig dito | "pinakamasarap" yellow | Lower-middle | Raise above plate at 0:03 |

**4. Other on-screen text:** hook, labels, callouts, closing text — role, timing, position, and whether 5B animates it.

**5. Notes for Stage 7 (sound design & final mix):** text pops or emphasis moments that may want a subtle SFX, key text moments (hook, price, CTA) where music should duck lower, and words marked "recheck after Stage 7."

**6. Flags:** words to verify, bad edits (back to Stage 2), collisions with 5B graphics, anything needing the user's decision.

**Ready for Stage 7 (Sound Design)?** yes/no and what still needs a decision.

If a later stage changes the cut, re-time the subtitles before Final QC.

## Step 9 — QC before moving on
- [ ] Subtitles match the audio; nothing missing or invented
- [ ] Names, brands, prices and numbers verified; Taglish spelling consistent
- [ ] Synced to speech; no early or lingering subtitles
- [ ] Natural line breaks; reading time is enough
- [ ] Readable on a phone in every scene (size and contrast)
- [ ] Style matches the reference or the Direction Summary; same role = same style
- [ ] Primary, subtitle and supporting text are clearly different
- [ ] No text over faces, mouths, product, food hero moments or key action
- [ ] Inside platform safe areas; no collisions with 5B graphics
- [ ] Emphasis is selective and keeps the meaning
- [ ] Every animation has a purpose and doesn't hurt reading
- [ ] SFX and mix notes listed for Stage 7
- [ ] Watched in full at normal speed, once with sound and once muted (does it still make sense?)
- [ ] No unnecessary text or effects

If the viewer can't comfortably read and understand the text, the subtitle treatment isn't finished.
