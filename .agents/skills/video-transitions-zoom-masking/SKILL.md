---
name: "video-transitions-zoom-masking"
description: "Stage 5A of the short-form SOP: plan simple, purposeful transitions, zoom in/out and masking (person, background, objects) after color grading and before animation."
---

# Transitions, Zoom & Masking (Stage 5A of the Short-Form Editing SOP)

Goal: add movement and polish ONLY where it helps the story. Every effect needs a reason. If walang reason, walang effect. Keep it simple: the viewer should feel the energy, not notice the editing.

Reply in the user's language. If they write in Taglish, answer in Taglish.

## Where this sits in the SOP

Story Structure (video-storytelling-phase) → Cutting & Pacing (video-trim-phase) → Music (video-music-phase) → Color Grading (color-grading-sop) → **Stage 5: Effects & Animation — 5A Transitions, Zoom & Masking (this skill) → 5B Animation & Motion Graphics (animation-motion-graphics-sop)** → Subtitles & On-Screen Text (video-subtitles-phase) → Sound Design & Final Mix (video-sound-design-phase) → Final QC (video-final-qc-phase).

- Starts only when the cuts are locked (trim phase done). The trim phase is cut-only, so jump cuts, flat stretches and "needs visual variety" spots it flagged are picked up here.
- Comes after color grading so zoom sharpness, mask edges and any background change are judged on the graded image. Any background replacement or color pop must match the grade and keep skin and food natural.
- Hands its Effects Plan to 5B so animation builds on the same transitions, zooms and masks (e.g. text behind the subject reuses the subject mask) instead of redoing them.
- Notes SFX cues (whoosh, hit) for the sound-design stage but doesn't add audio here.

## Step 1 — Get the context (ask only what's missing)
- Video type (talking head, food/product, vlog, montage, sports/highlight, storytelling)
- Platform and length (Reels/TikTok/Shorts, 30–60s, longer)
- The cut list from the trim phase, or the timeline / transcript with timestamps; story map if available
- Editing app (CapCut, Premiere Pro, DaVinci Resolve, After Effects, other) so settings match the app
- Reference video or vibe, if any

If the person isn't around to answer, assume short-form vertical in CapCut, say so at the top, and proceed.

## Step 2 — Decide WHERE effects go (the purpose test)
For each candidate moment, the effect must do one of these:
- **Emphasize**: a key word, punchline, reaction, reveal, price, result
- **Reset attention**: break a long static shot (every ~3–5s on talking head if it feels flat)
- **Connect**: move between scenes, locations, time, before/after
- **Reveal / separate**: show the subject clearly, isolate it from a busy background
- **Match the beat**: hit music accents in montages

If none apply, hard cut, no effect.

## Step 3 — Transitions (default: hard cut)
Order of preference, use the simplest that works:
1. **Hard cut**: default for most cuts.
2. **J-cut / L-cut**: audio leads or trails; smooth for talking/story flow. Zero visual effect.
3. **Match cut**: similar shape, motion or framing across two clips (hand moves → hand moves, plate → plate).
4. **Whip / swipe / zoom transition**: scene or location change, energy moments, on a beat. Keep 6–10 frames.
5. **Mask/object wipe**: someone or something passes the lens and reveals the next clip. Big moments only, max 1–2 per video.
6. **Dissolve / fade**: passage of time, emotional or calm moments, ending. 10–20 frames.

Rules:
- Max 2–3 "styled" transitions in a 30–60s short. The rest are cuts.
- One transition family per video (don't mix whips, glitches, spins, 3D flips).
- Land transitions on the beat or on a natural action, never mid-word.
- Never cover the hook's first frame with a transition.
- Graphic/shape transitions built from motion graphics belong to 5B; flag them in the plan instead of designing them here.

## Step 4 — Zoom in / zoom out
| Type | Use for | Simple setting |
|---|---|---|
| **Punch-in (cut zoom)** | Emphasis on a word/reaction; hide a jump cut in talking head | Instant scale 100% → 110–125%, alternate between two framings |
| **Slow push-in** | Build tension, emotional line, close-up feel | 100% → 105–115% over the whole clip, ease in/out |
| **Zoom-out reveal** | Show the full scene, result, plate, location | 115–130% → 100% over 0.5–1.5s, ease out |
| **Snap/impact zoom** | Beat hit, punchline, "boom" moment | 100% → 120% in 3–6 frames, optional slight motion blur, back or hold |
| **Ken Burns** | Still photos | 100% → 108–112% slow drift |

Rules:
- Keep the subject's eyes/face (or the product) in frame and in the upper third when scaled. Re-anchor the position; don't zoom into the center blindly.
- Watch resolution: past ~125% on 1080p footage it softens; 4K footage can go further.
- Don't stack constant zooms on every line. Alternate: normal → punch-in → normal.
- Use easing (ease in/out) for slow moves; snap zooms can be linear.

## Step 5 — Masking (only when it clearly improves the shot)
**What to mask**
- **Person/subject**: pop-out effect, subject brighter than background, freeze-frame cut-out, or a subject mask that 5B will use for text behind the person.
- **Background**: blur, darken, desaturate or replace a busy/ugly background so the subject stands out.
- **Object / animal / food / product**: isolate the hero item, add glow or color pop, reveal it.
- **Partial area**: fix one spot (distracting sign, bright window, logo) with blur or darkening.

**How (easiest first)**
1. **Auto tools**: CapCut "Remove background / Auto cutout", Premiere "Object mask" (AI), DaVinci "Magic Mask", After Effects "Roto Brush".
2. **Simple shape mask**: circle/rectangle with feather 20–60px for static or slow shots (vignette-style focus, partial blur).
3. **Tracked shape mask**: shape + tracking when the subject moves a bit.
4. **Manual rotoscope**: only for 1–2 hero moments, short duration (< 2s), and only if auto fails.

Rules:
- Keep mask duration short where possible; the longer the mask, the more edges to fix.
- Always feather edges; check hair, hands, fast motion and frames where edges flicker.
- Don't mask if the background is already clean; a simple vignette or exposure tweak is enough.
- Background changes must match the color grade and light direction; keep skin and food natural.
- Max 1–3 masked moments in a 30–60s short unless the whole concept is built around it.
- House style (`.agents/skills/my-ai-editor/references/reel-references.md`): the hook line or a big claim may sit *behind* the speaker using a person mask, and
  diagrams are shown over the speaker blurred 18–30px and darkened, with a blur-through in and out.

## Step 6 — Output: Effects Plan
Give a table, in timeline order:

| Time (in–out) | Effect | Type | Purpose | Settings (for their app) | Hand-off |
|---|---|---|---|---|---|
| 0:03.2–0:03.6 | Punch-in | Zoom | Emphasize "libre" | 100→115%, instant, re-center on face | — |
| 0:12.0 | Whip pan | Transition | Kitchen → dining | 8 frames, on beat | SFX whoosh (sound design) |
| 0:20.5–0:22.0 | Subject cutout | Mask (person) | Title behind subject | Auto cutout, feather 10px | Title text in 5B |

Then add:
- **Total count**: styled transitions / zooms / masks (check against the limits above)
- **Skip notes**: moments deliberately kept as plain cuts and why (optional, short)
- **App steps**: short how-to only for effects they may not know, in their editing app
- **Ready for 5B?**: yes/no and what still needs a decision

## Step 7 — QC before moving to 5B
- [ ] Every effect passes the purpose test (Step 2)
- [ ] Hook frame is clean and readable
- [ ] No effect hides important content, faces, captions or the product
- [ ] Transitions land on beats/actions, not mid-word
- [ ] Zooms stay sharp and keep the subject framed
- [ ] Mask edges clean (hair, hands, fast motion), no flicker
- [ ] Masked/replaced areas still match the color grade
- [ ] Effects follow one consistent style for the whole video
- [ ] Watch once without sound and once at normal speed: smooth, not busy?

If an effect feels "extra", remove it. Simple and clean wins.