# Reel references: motion graphics, effects and transitions

The user's chosen references (added 2026-10-19). Studied from frames sampled with the browser, sound
off, no login. Borrow the editing mechanisms below; never copy the creators' footage, music, logos,
fonts that need a license, or their exact wording.

| # | Creator | Reel | Kind of video |
|---|---|---|---|
| R1 | Kelsie Blevins | facebook.com/reel/1551019937059405 (46 s) | Talking head with stats, real estate |
| R2 | Aayush Swamy (Iamaayushswamy) | facebook.com/reel/957611693397194 (57 s) | Talking head with an opinion, content tips |
| R3 | Nizam Uddin Nayem | facebook.com/reel/1342560557957787 (12 s) | Motion-design explainer, marketing funnel |

Limits: the creators' full pages need a Facebook login, so only these three reels were studied. Sound
was not reviewed. Transitions were judged from still frames, so motion timing is inferred.

## The shared look (what all three do)

1. **Two-tier kinetic type.** A small light word or two ("you should", "how I've", "funnel guides")
   paired with one HUGE heavy key word ("INTENTIONALLY", "GENERATED", "Marketing"). The big word is
   the idea; the small words are the glue. Two sizes only, about 1:3.
2. **Text lives in the scene, not in a box.** Headline type sits around the head and shoulders, often
   *behind* the speaker (subject mask in front of the text, R1 "You can't sell", R2 "30% of people").
   Captions in a dark box are the exception, not the house look.
3. **One accent colour per video, tied to the grade.** R1 pink/purple glow, R2 red on a dark moody
   grade, R3 amber/orange on a warm grade. The accent appears in the key word, the numbers and the
   graphics, never in five other colours.
4. **Numbers become heroes.** Stats are giant glowing numerals (R1 "74%", "73%"; R2 "30%") placed
   behind or above the speaker, often with a small label ("homeowners") and a counter or progress bar
   that fills (R1 "get 403%" bar).
5. **Cut-away explainer scenes.** Every 5-10 s the speaker gives way to a designed scene that shows the
   idea: a wall of photos bursting around the speaker (R1), a numbered list on a real wood surface
   with a label-maker strip (R2), glass pills stacking into a funnel and a circle of dots labelled
   "Leads" over the blurred speaker (R3), a full-screen cream card with red bold text (R2 "STOP
   INVESTING").
6. **Blur the speaker, keep the voice.** When a diagram is on screen the speaker stays behind it,
   heavily blurred and darkened (R3), so the eye goes to the graphic but the person never leaves.
7. **Small, quiet captions.** Spoken-word captions are small, thin, lowercase or sentence case, near the
   chest or lower third (R1 "that", R2 "for example"). The big words carry emphasis; the captions
   only help you follow.
8. **Location or angle change per idea** (R1 moves between rooms, R2 between a desk and a wall), so
   each new point looks new even without B-roll.

## Technique menu (for this editor's kit)

Pick by purpose; a 10-20 s reel usually needs 3-5 of these, a 45-60 s reel 6-10.

| Technique | Use it when | How in the kit (HyperFrames + GSAP) |
|---|---|---|
| Two-tier headline | Every key line of the hook and each new point | Two text layers, small (40-56 px light) above/below big (130-200 px black/condensed). Big word scales 1.15 to 1 with a 0.25 s ease-out on its spoken onset; small words fade up 0.15 s earlier. |
| Text behind subject | Hook line, a big claim, a stat | Needs a person matte. Make a matte video with a local segmentation tool (ask before installing one), stack: footage, text, footage-with-alpha. Without a matte, place the text in clear space above the head instead. |
| Giant stat number | Any number the speaker says | 260-400 px numeral in the accent colour with a soft glow (text-shadow 0 0 40px accent), counts up from 0 over 0.6-0.9 s, small label under it. |
| Progress bar or counter | Growth, percent, "more than" | Rounded bar with a gradient fill animating width to the value, number riding the end of the bar. |
| Photo wall burst | "lots of", "all these", proof of volume | 6-12 of the user's own frames or photos as cards flying out from behind the speaker, slight random tilt (seeded), drop shadow. |
| Glass pill stack | Lists, steps, stages | Rounded pills with backdrop blur and white 70% fill, enter one by one on each spoken noun, last item glows. |
| Callout diagram | Explaining a group, a part, a relationship | Thin white circle or line drawn on (stroke-dashoffset), dots pop in, label with leader line. Speaker behind it blurred 18-30 px and darkened 30%. |
| Full-screen type card | A blunt statement or a turn ("pero...", "STOP") | Solid card (cream or accent) with 1-3 words in heavy type, in for 0.6-1.2 s, cut or quick slide in/out. Voice keeps running. |
| Tactile object graphic | Numbered tips, rules | Real-looking surface (wood, paper) with type that looks printed or label-made; numbers in big outline or cut-out style. |
| Punch-in zoom | Key word, reaction, product | 1.05-1.12 scale over 0.3-0.5 s, eased, back out on the next phrase. |
| Blur-through transition | Moving from speaker to a designed scene and back | Speaker blurs and darkens over 0.2-0.3 s while the graphic fades and scales in; reverse to return. |
| Whip or slide transition | Changing location or idea | Fast x-move with motion blur (0.15-0.25 s), whoosh on the peak. |

## Defaults for this editor

- Key-line headlines use the two-tier style; spoken captions stay small and clean underneath.
- Pick one accent colour that suits the footage and grade (warm food: amber/yellow; beauty or
  lifestyle: pink; bold opinion: red) and use it for the big words, numbers and graphics.
- At least one designed explainer moment per 10 s of video when the speech gives something to
  show (a number, a list, a product, a feeling). Never invent facts or numbers to fill one.
- Every graphic moment gets a sound: whoosh on movement, pop on text or pill, rise or tick on counters,
  soft impact on a big word.
- Faces and the product stay visible; text behind the subject only with a clean matte.
