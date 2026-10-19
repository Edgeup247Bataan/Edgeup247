---
name: "video-trim-phase"
description: "Stage 2 (Cutting & Pacing) of the short-form SOP: cut-only cleanup that removes unnecessary, wrong, redundant takes and dead air, keeps expressive pauses, sets pacing (speech- or beat-driven) and repairs bad audio word by word. Use for trimming, pacing, rhythm, tightening, rough cut, first pass, paglilinis ng footage, dead air, retakes/fillers, cutting to the beat, or word-by-word cutting. Outputs a cut list; hands off to video-music-phase (Stage 3), or works from its beat map when music was picked first."
---

# Video Trim Phase (Stage 2: Cutting + Pacing)

The trim phase is **Stage 2** of the short-form editing SOP and the **first hands-on editing pass**: Story Structure (video-storytelling-phase) → **Cutting & Pacing (this skill)** → Music (video-music-phase) → Color Grading (color-grading-sop) → Effects & Animation (5A video-transitions-zoom-masking → 5B animation-motion-graphics-sop) → Subtitles & On-Screen Text (video-subtitles-phase) → Sound Design & Final Mix (video-sound-design-phase) → Final QC (video-final-qc-phase).

It works from the story map of Stage 1 when one exists. It is **cutting only**: remove what doesn't belong, keep what makes people connect, and set the pacing through how tight or loose the cuts and gaps are. No effects, no music, no graphics, no color, no speed changes, no reordering for story. Those belong to later stages.

**Core principle: cut what is unnecessary, never what is necessary.** Every cut needs a reason, and the thoughts and words the speaker meant must survive the trim unchanged. Storytelling beats the stopwatch: never cut content just to hit a duration.

## What Claude can and can't do here

Claude doesn't edit video files directly. It produces an actionable **cut list** from whatever the user gives: a transcript, SRT/VTT, word-level timestamps (e.g. Whisper JSON), a script, or a description of the footage. If the user only describes footage, give rules plus a template they can apply. Be honest about what can't be judged from text alone (facial expression, audio quality, lip-sync, how the rhythm actually feels), and mark those as "check on timeline" rather than guessing.

Reply in the language the user writes in (Taglish is fine; keep technical terms like "dead air," "jump cut," "crossfade" as they are).

## What to remove

| Category | Examples | Notes |
|----------|----------|-------|
| **Unnecessary** | Tangents that don't serve the video, setup chatter ("ok ready na ba?"), slate/clap talk, camera-fumbling | Remove unless it carries personality the video needs |
| **Wrong** | Flubbed lines, wrong facts, abandoned sentences, "uulitin ko," takes the speaker themselves rejected | Keep the best take only |
| **Redundant** | Same point said twice, repeated retakes of one line, over-explaining after the point already landed | Keep the clearest, most energetic version |
| **Dead air** | Silence with nothing happening, blank stares, looking away to think, breath-then-restart gaps, long waits before speaking | See the pause test below before cutting |
| **Filler** (judgment call) | "uhm," "ano," "so," "like," false starts | Remove the distracting ones; leave a few if they make the speaker sound natural |

## The pause test: keep it or cut it

Not all silence is dead air. **Keep** a pause when it does a job; **cut** it when it just waits.

Keep a pause if the answer to any of these is yes:
- Is there a **visible facial expression** the viewer can read (smile, realization, doubt, emotion, "grabe" face)?
- Does it **land a joke, a reveal, or an emotional line** (before or after)?
- Is it a **reaction** that tells the viewer how to feel?
- Does it give the viewer **time to absorb** something heavy or important?
- Would removing it make the speaker sound **robotic or rushed**?

Cut a pause if:
- The face is blank, looking off-camera, or visibly thinking about what to say next.
- Nothing is happening in the frame and nothing is being felt.
- It's a gap between a mistake and the retake.

When keeping a pause, you may **shorten** it (hold the expression, drop the idle tail) instead of leaving it at full length. When unsure, keep it and flag it: "pause 00:41.2-00:42.0, expression looks good, kept; verify on timeline."

## Pacing

Pacing in this phase means **rhythm created by cuts and gaps**. You control it by deciding what to remove and how much space to leave. You do not control it with speed ramps, music, or effects.

**Gap lengths (starting points, adjust to the speaker and content)**

| Gap | Default | Notes |
|-----|---------|-------|
| Between words inside a phrase | Leave as spoken | Never squeeze; it sounds robotic |
| Between sentences | A few frames to about 0.25s | Enough for a natural breath beat |
| Between ideas or sections | About 0.25 to 0.5s | A slightly longer beat helps the viewer reset |
| Before a punchline or reveal | Hold a little longer | Builds anticipation |
| After a punchline, emotional line, or reaction | Hold the expression | Let it land; this is where connection happens |
| Opening of the video | Start on the first real word or expression | Remove lead-in breath and "uhm" before the hook |
| Ending | Don't chop the last beat | Leave a short natural tail after the final line |

**Pacing rules**
- **Match the content, not a fixed speed.** Short-form talking head (30 to 60s) can run tight. Storytelling, emotional, and vlog moments need more breathing room. State your assumption in one line.
- **Vary the rhythm.** If every gap is the same length, it feels mechanical. Tight in the build-up, a longer hold on the key line, tight again after.
- **Tighten from the inside out:** remove whole mistakes and redundancy first, then dead air, and only then shave remaining gaps. Most of the pacing improvement comes from the first two.
- **Watch for flat stretches.** A long run of same-energy delivery with no expression, no shift, and no new information is a pacing problem. Flag it and suggest trimming within it (not deleting key content) or marking it for a visual-variety fix (punch-in, cutaway) in Stage 5A.
- **Don't cut for time alone.** Timings (like a build-up around 6 to 15s) are a guide, not a rule. If a beat needs more room, let it run. Only cut what doesn't move the story.
- **Cuts should be invisible to the ear.** A pacing cut that causes a pop, a pitch jump, or a clipped word is a bad cut. See the seamless cut notes below.
- **Flag, don't hide, jump cuts.** Tight cuts on a single locked-off camera will show as jump cuts. That's fine for this style, but note where a cut will be very visible so Stage 5A can cover it (punch-in, cutaway) or accept it.

**Pacing pass (do this after cuts and pauses are decided)**
1. Read the trimmed result top to bottom as a script, noting where the rhythm drags, rushes, or runs flat.
2. Compare gaps: any gap noticeably longer than its neighbors without a reason (expression, punchline, absorb time) should be shortened. Any gap that is very short before a key line should be opened up.
3. Check the first 2 to 3 seconds: does it start immediately on something worth hearing or seeing?
4. Note the estimated trimmed length. If it feels too long for the platform, point out which redundant or low-value sections could go, and leave the decision to the user.

## Montage pacing (music-driven)

Use this mode when the video is a **montage** (food showcase, travel, behind-the-scenes, highlights, lifestyle b-roll) where the music, not speech, sets the rhythm. In talking-head pacing the **words** decide the rhythm; in a montage the **beat** does. Ask which one applies if it isn't clear. A video can mix both: talking-head sections follow the speech rules above, montage sections follow these.

This is still a trim-phase job: you only decide **where clips start, end, and how long they hold**. You don't edit or mix the music here (that's Stage 3, video-music-phase). You do need the track, or at least its BPM and structure, as a timing reference. For montages and other beat-driven videos, the track is usually picked **before** this phase (Stage 3's music-first mode). If the user hasn't picked one, ask for it (one short question), send them to music-first, or work from an assumed tempo and say so.

**Set up the grid**
- Get the **BPM** (or the track itself) and note where the **sections** change: intro, build, drop or chorus, breakdown, outro.
- Work out beat length: `60 / BPM` seconds per beat. A bar is 4 beats. Example: 120 BPM = 0.5s per beat, 2s per bar.
- Pick the **cut unit** that fits the energy: every 1 to 2 bars for slow or emotional, every 1 or 2 beats for upbeat, half-beats only for very fast, high-energy moments.

**Cut to the beat**
- Land **cuts on the beat** (or just a few frames before it, since the eye reads a cut slightly late). Strong beats (the "1" of each bar) suit the biggest shot changes; weaker beats suit smaller ones.
- Place the **most important shot or action on the drop, accent, or downbeat**: the sauce pour, the jump, the reveal, the first bite.
- Let the **section changes drive the pace**: slower, longer holds in the intro and breakdown; faster, tighter cuts in the build; the shortest cuts or the biggest hero shot on the drop; a longer hold to resolve in the outro.
- **Speed up gradually into a drop** (shot lengths getting shorter), then release. Constant machine-gun cutting with no change tires the viewer.
- **Vary shot length in a pattern** (for example 2 beats, 2 beats, 4 beats) instead of random lengths, so the rhythm is felt.
- Cut on **action** when possible: end a clip as the movement peaks so the next beat carries the motion.
- **Hold the shots that deserve it.** A beautiful, readable shot (a hero dish, an emotional expression, a wide view) can ride a full bar or more even in a fast section. Don't cut a shot before the viewer can see what it is. A readable shot needs roughly a second or more, depending on complexity.
- Remove the same junk as before (shaky starts, camera-fumbling, dead frames, repeated angles), but in a montage you trim **to the beat**, not to a speaker's thoughts.

**When music and speech mix**
- If a voice line sits over the music, the **speech stays intact** and the cuts around it follow the beat only where that doesn't clip words. Prefer to cut b-roll to the beat and keep the spoken line whole.
- Keep expression pauses that matter (a reaction, a smile) even if they sit slightly off-grid; shift the surrounding cuts to land on the next beat instead.

**Don't**
- Don't force every cut onto the beat if it breaks the story or chops an action. Beat sync serves the feeling; it isn't a rule that beats storytelling.
- Don't change clip speed to make a shot fit a beat in this phase. Flag "needs speed change" for a later stage instead.
- Don't reorder the sequence to chase rhythm. If the order must change, flag it back to the story map.

**Montage pacing pass**
1. Mark the track's sections and beats on the timeline (or in your cut list as beat numbers or timecodes).
2. Assign shots to sections: hero shots to accents and the drop, filler or transitional shots to weaker beats.
3. Check the shot-length pattern: does it speed up into the drop and release after? Any stretch of identical lengths that feels flat?
4. Check that every shot is readable for long enough and that nothing important is clipped by a beat.

## Process

1. **Get the material.** Ask for a transcript or word-timestamp file if not provided, plus the story map from Stage 1 if there is one. If only a rough description exists, work from that and say what you couldn't verify. Don't interrogate; one short question at most.
2. **Mark what is necessary first.** Identify the key thoughts, the best take of each line, and the moments with strong expression. This protects them from over-trimming.
3. **Pass 1: remove mistakes and redundant takes.** For repeated takes of the same line, pick the best (clearest audio, best energy, correct words) and drop the rest.
4. **Pass 2: remove unnecessary content and filler.**
5. **Pass 3: handle silence.** Apply the pause test to every gap over roughly 0.4 seconds.
6. **Pass 4: flag bad-audio phrases** and plan word-by-word repairs (below).
7. **Pass 5: pacing pass** (above). For montage or music-driven sections, use the montage pacing pass and the beat grid instead.
8. **Check continuity.** Read the result as a script. Do the thoughts still flow? Is anything now missing context? Did a cut change the meaning?
9. **Deliver the cut list** in the output format below.

## Word-by-word audio repair

Use only when a phrase has bad audio (noise burst, mumble, pop, clipping, a swallowed word) **and** a cleaner version of the needed words exists elsewhere: another take, a nearby sentence, or a retake.

**Hard rules**
- **Same words, same thoughts.** The repaired phrase must say exactly what the speaker said or meant, in the same order of ideas. Never invent a sentence by recombining words into something the speaker didn't say, never flip the meaning (e.g. dropping "hindi"), and never splice across a sentence boundary to change a claim. If a repair would alter meaning, don't do it; flag it for the user instead.
- **Prefer the smallest repair.** Replace one bad word before rebuilding a phrase. Stay within the same take when possible.
- **Seamless or don't cut.** If the result will sound stitched, say so and offer an alternative (re-record that line, cover with b-roll, keep the original with noise reduction in Stage 7).

**Making cuts seamless**
- Match **intonation and energy**: a rising "ano?" can't sit inside a flat statement. Pick words whose pitch and pace fit their new neighbors.
- Cut at **word boundaries, in silence or at low-energy points** (the start of consonants, gaps between words, zero-crossings), never mid-syllable. Keep the natural attack of the next word; don't clip its first consonant.
- Match **room tone and level**. Keep a tiny bit of consistent room tone under the joins so the background doesn't jump.
- Use very short **audio crossfades** (about 2 to 6 frames) at each join to avoid clicks.
- Keep **natural spacing and rhythm** between words. Uniform, too-tight spacing sounds machine-made.
- Words from a different moment may have a different **mouth shape or head position**. If the video is visible on-camera, the swap can show as lip-sync drift or a jump. Mark these as **cover required**: b-roll, punch-in or cutaway (Stage 5A), or an L-cut / J-cut so the audio change isn't seen.
- Listen to the repaired phrase **twice in context** (with the sentence before and after), not alone.

## Output format

Give the editor something they can work through top to bottom. Use timecodes from the user's file; if none exist, use transcript line numbers or quoted opening words.

**1. Summary** (2 to 3 lines): original length (if known), approximate trimmed length, number of cuts, pacing assumption (e.g. "tight short-form talking head"), and anything needing the user's decision.

**2. Cut list**

| # | In | Out | Action | What | Reason |
|---|----|-----|--------|------|--------|
| 1 | 00:03.2 | 00:05.8 | Cut | "ready na ba?" setup chatter | Unnecessary |
| 2 | 00:12.4 | 00:19.0 | Cut | First take of intro line | Wrong (flubbed) / keep take 2 |
| 3 | 00:41.2 | 00:42.0 | Keep (trim tail to 0.5s) | Pause after punchline, smiling | Expressive pause |

**3. Pauses kept** (separate short list, so the user can overrule): timecode, why it connects.

**4. Pacing notes**: where the rhythm is tight, where it was deliberately opened up, any flat stretch, and gaps that were shortened or lengthened and why. For montages, add the **beat map**: BPM, section timecodes, cut unit per section, which hero shots sit on accents or the drop, and any shot that needs a speed change or reorder (flagged for later stages).

**5. Audio repairs**: for each bad phrase, the problem, the source words and where they come from, the join points, crossfade note, and whether cover is needed.

**6. Needs your eyes**: anything that depends on what can't be judged from text (expression, audio quality, lip-sync, how the rhythm feels), and any repair that risked changing meaning.

**7. Hand-off notes**: jump cuts or flat stretches for Stage 5A, speed changes for 5A/5B, noisy-but-kept audio for Stage 7 (sound design), and story beats or pauses the music should hit or respect for Stage 3. Then: **Ready for Stage 3 (music)?** yes/no. If the music was already picked and fitted in music-first mode, confirm the cut and music still lock together, then go to Stage 4 (color grading).

Keep suggestions specific (which words, which timecodes) rather than generic.

## Guardrails

- This phase is **cutting only**. Don't add effects, music, text, speed changes, or re-order sections. If the user wants those, point to the stage that owns it: music → video-music-phase, color → color-grading-sop, transitions/zoom/masking → video-transitions-zoom-masking, animation/text → animation-motion-graphics-sop, voice cleanup/SFX → video-sound-design-phase.
- Don't cut essential context, emotional moments, or the speaker's personality in the name of speed.
- Never fabricate speech. Repairs reuse the speaker's real words and real meaning only.
- When in doubt about a cut, keep it and flag it. Removed content is harder to recover than kept content.
- Different formats need different tightness: talking-head tutorials can be tighter, vlogs and storytelling need more breathing room. Match the user's content type and say your assumption in one line.