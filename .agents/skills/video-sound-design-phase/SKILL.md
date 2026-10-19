---
name: "video-sound-design-phase"
description: "Stage 7 (Sound Design & Final Mix) of the short-form SOP: clean and level dialogue, add purposeful SFX, foley/food sounds, ambience, silence and sound bridges, then balance voice, music and SFX and set final loudness before final QC."
---

# Video Sound Design & Final Mix Phase (Stage 7 of the Short-Form Editing SOP)

Story Structure → Cutting & Pacing → Music → Color Grading → Effects & Animation (5A → 5B) → Subtitles & On-Screen Text → **Sound Design & Final Mix (this skill)** → Final QC.

Goal: make the voice clear and natural, add only the sounds that help the viewer feel, notice or follow something, and finish the mix so voice, music and SFX sit together at the right loudness. If a sound has no job, it doesn't go in. Viewers forgive soft visuals but not bad audio.

Reply in the user's language. If they write in Taglish, answer in Taglish.

## Scope

**This stage:** dialogue cleanup and leveling, room tone, SFX (including the cues flagged in 5A/5B, the Stage 6 Subtitle Plan and the Stage 3 Music Plan), foley and food sounds, ambience, strategic silence, J/L-cut sound bridges, final music ducking, and the **final mix balance and loudness**.

**Not this stage:** choosing or editing the music track (Stage 3; the cut + music lock is already set), subtitle text and timing (Stage 6), export and platform checks (Stage 8).

## Core rules

1. **Every sound needs a job:** clarity, emphasis, sensory appeal, continuity, mood or contrast. No job, no sound.
2. **Real audio first.** Base every fix on the actual recording. From a transcript alone you can't judge noise, echo or tone; ask for the audio/video file or a short clip, and if one is uploaded, measure it in the workspace (ffmpeg loudness/peak stats, noise floor) instead of guessing. Mark anything you couldn't hear as "check by ear."
3. **Natural over processed.** Too much noise reduction or voice isolation makes people sound robotic or underwater. Clean until it's clear, then stop.
4. **Dialogue is king.** Music, SFX and ambience never cover words. Keep them under the voice or in the gaps.
5. **Restraint with SFX.** Not every transition, text pop or cut needs a whoosh. Overused SFX make a video feel cheap and tiring.
6. **Keep the lock intact.** Don't re-cut words or re-edit the music here. If a phrase is still bad after cleanup, flag it back to Stage 2 (word-by-word repair or re-record); if the music edit itself is wrong, flag it back to Stage 3. If cleanup makes a word marked "recheck after Stage 7" clear, confirm or correct that subtitle.
7. **Be honest about limits.** Heavy wind, clipping or loud overlapping noise may not be fully fixable. Say so and offer options (cover with b-roll and VO, re-record, accept with light cleanup).

## Step 1 — Get the context (ask only what's missing)
- The video or audio (at least a 10–20s clip of the voice) and the locked cut with music
- Music Plan (Stage 3): track, ducking plan, dips, EQ notes
- Effects Plan (5A), Animation Plan (5B) and Subtitle Plan (Stage 6) for SFX cues
- Video type and mood (talking head, food, montage, storytelling, hype)
- Recording setup if known (lav, shotgun, phone mic; indoor/outdoor)
- Platform/client loudness requirements, if any
- Editing app (CapCut, Premiere Pro, DaVinci Resolve/Fairlight, other)

## Step 2 — Audio check (diagnose before fixing)
Note for each scene or setup: background noise (hum, fan, aircon, traffic, crowd), echo/room reverb, clipping or distortion, level jumps between clips, plosives/sibilance, mouth clicks, wind. Rate each: OK / Light fix / Heavy fix / Not fixable.

## Step 3 — Dialogue cleanup (in this order)
1. **Gain/level match** between clips so the voice sits at a steady level.
2. **Noise reduction / voice isolation**, light first. Start low (roughly 30–60% on AI isolation tools) and raise only until the noise stops distracting. Compare with the original.
3. **High-pass filter** around 70–100 Hz for most voices to remove rumble (lower for deep voices; check it doesn't thin the voice).
4. **EQ** only for a measured problem: cut muddiness (~200–400 Hz) or harshness (~2–5 kHz) in small steps; a gentle presence lift only if the voice is dull.
5. **De-ess / de-plosive** if "s" or "p" sounds jump out.
6. **Compression** gentle (about 2:1–4:1, a few dB of reduction) so quiet and loud words feel even. Not so much that breaths pump.
7. **Room tone** under all joins and gaps so silence never drops to digital zero.

The footage decides the final values. These numbers are starting points, not presets.

## Step 4 — SFX, foley and food sounds
- Start from the SFX cues in the 5A Effects Plan, 5B Animation Plan and Stage 6 Subtitle Plan; keep only the ones that pass the job test.
- **Sensory sounds (food/product):** sizzle, pour, crunch, slice, fizz, unboxing, click. Prefer the real recorded sound; layer a library sound only if the real one is weak, and sync it frame-accurately to the action.
- **Transitions/graphics:** soft whoosh, subtle pop or click. One sound family for the whole video, matching the visual style. Don't stack SFX on top of strong music accents that already do the job.
- **Impacts/risers:** only for real peaks (reveal, drop, punchline). A riser must resolve into something, and should agree with the music, not fight it.
- Place SFX slightly before the visual peak when needed so they feel in sync (a frame or two), then check by eye and ear.

## Step 5 — Ambience, silence and bridges
- **Ambience/room tone** keeps scenes from feeling empty or jumpy. Match it to the location; fade it across cuts.
- **Sound bridges (J/L-cuts):** let the next scene's sound start early or the current sound carry over to make transitions smooth. Coordinate with 5A's J/L-cuts.
- **Strategic silence:** a brief drop before a reveal, punchline or emotional line adds impact. Use the dips planned in Stage 3; if a new silence is needed, dip the music there with automation instead of re-editing the track.

## Step 6 — Final mix
Starting points relative to dialogue (the ear and the content decide):
- **Dialogue** is the loudest element and consistent from start to end.
- **Music under speech:** roughly 15–25 dB below the voice, low enough that every word is clear on phone speakers. Refine the Stage 3 ducking: fast enough to clear the first word (about 0.2–0.5 s), smooth enough to not pump.
- **Music without speech** (montage, B-roll): can come up near dialogue level and carry the moment.
- **Sensory moments:** dip the music so sizzles, pours and crunches stay up front.
- **SFX** sit under or between words; ambience low and steady.
- **EQ tip:** if music masks the voice even when quiet, cut a little of the music's midrange (around 1–4 kHz) under speech instead of pushing it lower.

## Step 7 — Final loudness
- Target about **−14 LUFS integrated** with **true peak ≤ −1 dBTP** for Reels, TikTok, Shorts and YouTube unless the platform or client says otherwise.
- Check that the loudest part (often the drop) doesn't clip and the quietest dialogue is still clear.
- If the mix is uploaded, measure it in the workspace (ffmpeg loudnorm/ebur128 stats) and report the actual numbers. Stage 8 verifies it on the export.

**App hints**
- **CapCut:** Volume per clip, Reduce noise, Enhance voice/Voice isolation (watch for robotic tone), volume keyframes, Audio "Ducking" on the music track, fade in/out on clip edges.
- **Premiere Pro:** Essential Sound → Dialogue (Enhance Speech at a moderate mix, Repair: DeNoise/DeHum/DeEss, Clarity: EQ/Dynamics), Music → Ducking, Loudness "Auto-Match," Loudness Radar/Meter.
- **DaVinci Resolve (Fairlight):** Voice Isolation, Dialogue Leveler, Noise Reduction, EQ with high-pass, Compressor, De-Esser, Ducker/sidechain, Loudness meter.

## Step 8 — Output: Sound & Mix Plan
**1. Audio check summary**: issues per scene with rating and fix approach.

**2. Dialogue chain**: the steps and starting settings for their app, per setup if they differ.

**3. Sound plan table** (timeline order):

| Time (in–out) | Element | Type | Purpose | Source / settings | Level note |
|---|---|---|---|---|---|
| 0:00.0–0:30.0 | Room tone | Ambience | Smooth joins | From clip gap at 0:12 | Very low, constant |
| 0:04.1 | Sizzle | Food foley | Sensory hook | Real audio + light layer | Featured, music dipped |
| 0:12.0 | Soft whoosh | SFX | 5A whip pan | Short, matched to 8f whip | Under music accent |

**4. Mix settings:** music level with and without speech, ducking amount and timing, dips, EQ under dialogue.

**5. Loudness:** target and, if measured, the actual integrated LUFS and true peak.

**6. Flags**: anything not fixable here (back to Stage 2 or re-record), music edit problems (back to Stage 3), subtitles corrected after cleanup, and items to "check by ear."

**Ready for Stage 8 (Final QC)?** yes/no and what still needs a decision.

## Step 9 — QC before moving on
- [ ] Voice clear and natural on phone speakers and on earphones (not robotic, no pumping)
- [ ] Level steady across clips; no jumps at cuts
- [ ] No clicks, pops or abrupt silence at joins (room tone present)
- [ ] Every SFX passes the job test; one consistent SFX style
- [ ] Music, SFX and ambience never cover words
- [ ] Food/sensory sounds synced and appetizing, not harsh
- [ ] Planned silences and dips land; music payoff still clear in the mix
- [ ] Loudness around −14 LUFS integrated, true peak ≤ −1 dBTP, no clipping

If a sound feels "extra," remove it. Clear and natural wins.
