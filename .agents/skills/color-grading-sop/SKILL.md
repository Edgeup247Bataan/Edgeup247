---
name: "color-grading-sop"
description: "Reference-driven color grading workflow: ask for a reference and the raw footage, analyze both, check feasibility, grade in fixed phases with skin and food protection using footage-based values, then validate."
---

# Color Grading Automation SOP

## Core rules

1. **Footage first.** Every adjustment must be based on the actual raw footage the user sends, never on generic values, presets or the recipes below. No exact grading values are given until you have seen frames of the raw footage.
2. **Reference decides the direction.** Never force a preset look, and never add effects (grain, halation, glow, heavy LUTs) that the reference does not show.
3. **Be honest about feasibility.** If the footage cannot realistically reach the reference, say so and suggest better-suited alternatives (Step 2.5). Never silently swap the look.
4. **Skin and food stay natural.** Even in moody or stylized grades:
   - skin may lean toward the mood but must never look too orange, grey, green, plastic or oversaturated (Phase 3.5);
   - food must stay fresh, true to its real color and appetizing, never cold, grey, neon or teal-tinted (Phase 3.6).

Reply in the user's language. If they write in Taglish, answer in Taglish.

### Footage-first rule in practice
- With no footage yet, give only a general direction and ask for frames. Do not invent numbers.
- Analyze the raw footage in a **Footage Breakdown** (Step 2B) and compare it with the reference in a **Gap Table**.
- Every value you give must come from a measured gap: "Footage midtones at ~55 IRE, reference at ~35 IRE → lower Gamma until the midtones sit around 35 IRE." Explain the reason in one short line.
- The ranges in this skill (e.g. −5 to −15% skin saturation, 30–70% LUT intensity, 0–10% tint on food) are only limits and starting points. The footage decides the final number, and it may fall outside the typical range if the footage needs it, as long as it stays natural.
- Shots or scenes with different lighting get their own reading and their own values.
- After every phase, re-check the result against the footage and the reference before moving on.
- When the user sends new footage, start the analysis over. Never reuse values from a previous clip without re-measuring.
- When the frames are uploaded, measure them in the workspace (Python/PIL/numpy) whenever possible, rather than eyeballing them.

---

## STEP 1: Ask for the color grading reference and the raw footage

Before doing anything else, ask:

> "What color grading style or visual reference do you want to achieve for this footage?
> You can upload a reference image or video, or describe the look you want. For example:
> - Cinematic and moody
> - Warm and nostalgic
> - Clean and natural
> - Dark and dramatic
> - Film look with grain and halation
> - Commercial and vibrant
>
> Please provide your preferred color grading reference before proceeding."

In the same message, ask for:
- **The raw footage (required):** 2–4 ungraded frames or screenshots straight from the camera or timeline, with no filters. Include a wide shot, a close-up of the main subject (skin or food), and the brightest and darkest scenes. If the clip has several lighting setups, ask for one frame per setup.
- **Editing software:** DaVinci Resolve, Premiere Pro, Final Cut, CapCut, Lightroom, or other.
- **Source details:** the camera, the bit depth or codec if known (8-bit H.264/H.265 vs 10-bit/ProRes/RAW), and whether it is LOG (S-Log3, V-Log, C-Log, Log3G10, Apple Log, D-Log) or Rec.709.
- **Subject:** people, food, products, or a mix, which decides whether Phase 3.5 or 3.6 applies.
- **Delivery:** YouTube/Reels/TikTok (Rec.709), cinema, or broadcast.

Do not proceed to grading values until both a reference and raw footage frames exist. If the reference is a video, ask for 2–4 still frames from it.

---

If the user has no reference for this video, use the looks in `.agents/skills/my-ai-editor/references/reel-references.md` as a starting point: each reference
pairs one grade with one accent colour (warm amber, moody dark with red, soft pink). Choose the one that suits the
footage, keep skin and food natural, and pass the accent colour on to the text and graphics.

## STEP 2A: Analyze the reference

Write a short **Reference Breakdown** that covers all seven points:

1. **Palette and mood:** the dominant hues, the saturation level, and the emotion.
2. **Exposure, contrast and tone:** where the midtones sit, the curve shape, whether the blacks are crushed or lifted, and the highlight roll-off.
3. **White balance, skin and food:** whether the image is warm, neutral or cool, and how skin and food are treated compared with the rest of the frame.
4. **Shadow depth and color:** how deep the shadows go, how much detail they keep, and their tint.
5. **Film grain:** none, 35mm, 16mm or Super 8.
6. **Glow and halation:** none, subtle or strong.
7. **LUT match:** the closest emulation family, or none.

End with a one-line **Target Look Summary**.

### How to read an image
- **Waveform:** Low-key looks cluster at 10–40 IRE and high-key looks at 50–80 IRE. A matte look has its lowest point above 0.
- **RGB parade:** In the shadows, B and G above R means a teal tint. In the highlights, R on top means warm.
- **Vectorscope:** Skin sits near the skin-tone line at about 10–11 o'clock.
- **From a still:** Sample the darkest point, a midtone grey, the brightest point, skin and food. Python/PIL gives exact RGB values.

## STEP 2B: Analyze the raw footage

Write a **Footage Breakdown** using the same measurements as the reference:
- **Format:** LOG or Rec.709 (a flat, grey, low-contrast image usually means LOG), and the bit depth if known.
- **Exposure:** where the midtones sit; whether the image is under- or overexposed; the percentage of clipped highlights and crushed shadows.
- **Contrast:** flat, normal or contrasty.
- **White balance:** the color cast measured on a neutral area (e.g. a white plate or wall reading R>B means a warm cast), and any mixed lighting.
- **Skin (if present):** the hue and saturation compared with the skin line; any green, magenta or orange cast.
- **Food (if present):** the hue, saturation and sheen of each element; any cool, grey or oversaturated cast.
- **Noise and compression:** how much noise is in the shadows; banding risk.
- **Shot-to-shot differences:** whether the frames have different lighting that will need separate corrections.

Then build a **Gap Table** that turns the measurements into actions:

| Element | Footage (measured) | Reference (measured) | Gap → action |
|---|---|---|---|
| Midtones | e.g. ~55 IRE | ~35 IRE | Lower Gamma ~20 IRE |
| Black point | … | … | … |
| WB cast | … | … | … |
| Shadow tint | … | … | … |
| Skin | … | … | … |
| Food | … | … | … |
| Saturation | … | … | … |

The example row is illustrative only. Every row must be filled from the user's actual frames. Show both breakdowns and the Gap Table to the user before grading.

---

## STEP 2.5: Feasibility check and alternative suggestions

Use the Footage Breakdown and the Gap Table to rate whether the reference is reachable. Grading cannot add light, recover clipped detail, or change what was in front of the camera.

### Feasibility rating
- **Achievable:** proceed.
- **Partially achievable:** name exactly what can't be matched, and proceed only after the user agrees or picks an alternative.
- **Not realistic:** forcing it would cause noise, banding, unnatural skin, unappetizing food or a fake look, so offer alternatives first.

### Common reasons
- **Lighting mismatch:** flat light vs. directional, moody light.
- **Time of day mismatch:** day footage graded to night or golden hour.
- **Clipped highlights:** blown-out rice, plates, skin or sky.
- **Underexposed, noisy shadows.**
- **8-bit compressed footage:** strong shifts cause banding and blotchy color.
- **Mixed white balance.**
- **Bad light on skin or food:** fluorescent or colored LEDs.
- **Missing set, wardrobe or plating colors.**
- **Software limits.**

Cite the measured evidence from the Footage Breakdown for each reason, e.g. "12% of the frame is clipped at 100 IRE".

### How to suggest alternatives
1. Explain briefly and honestly what can't be matched and why, citing the footage.
2. Offer 1–3 alternatives that keep the mood but suit this footage, each with what it keeps and drops.
3. Always include a "closest possible version of your reference" option.
4. Let the user choose. Never apply an alternative without confirmation.
5. Write a new Target Look Summary and update the Gap Table.

Examples:
- Dark night reference + bright daytime footage → Overcast cinematic, or a light day-for-night.
- Heavy teal/orange + 8-bit phone footage → a subtle warm/cool split.
- Airy high-key + underexposed, noisy footage → warm low-key.
- Golden hour + noon footage → warm nostalgic.
- Cold blue moody + food content → dark moody food.

Re-run this check during grading whenever a phase produces banding, noise, artifacts, unnatural skin or unappetizing food.

---

## STEP 3: Execute the grading phases

For each phase:
1. **Footage:** quote the measured value from the Footage Breakdown.
2. **Target:** quote the reference value.
3. **Adjustment:** give the exact change needed to close that gap, in the user's software, with a one-line reason.
4. **Re-check:** state what to look for on the scopes afterward to confirm the gap is closed.

If the footage already matches in a phase, say so and skip it. Never add an adjustment the footage doesn't need. Give per-shot values when the lighting differs.

### Phase 0: Technical transform (only if the footage is LOG/RAW)
Convert the footage with a CST or the camera maker's official LUT, matched to the camera and LOG profile you identified. Set exposure before the conversion. Rec.709 footage skips this phase.

### Phase 1: Exposure and contrast
Set the black and white points from where the footage actually sits, then move the midtones and shape the curve toward the reference's measured values.
- **Resolve:** Lift/Gamma/Gain, Offset, Contrast + Pivot, Custom Curves, HDR wheels
- **Premiere:** Lumetri Basic Correction, RGB Curves
- **CapCut:** Adjust, Curves

### Phase 2: White balance
Remove the measured cast on a neutral area of the footage (a white plate, wall or napkin), then push toward the reference.
- **Resolve:** Temp/Tint, Offset, WB picker
- **Premiere:** Temperature/Tint
- **CapCut:** Temp/Tint

### Phase 3: Shadow control
Match the reference's shadow depth and tint, starting from the footage's measured shadows. If the shadows are noisy, avoid lifting them.
- **Resolve:** Lift or Log wheels
- **Premiere:** Color Wheels → Shadows
- **CapCut:** HSL or per-channel Curves

### Phase 3.5: Skin tone masking (when people are on screen)
Isolate skin and correct it from its measured hue and saturation in the footage. The goal is natural skin that only leans toward the mood.

**Build the mask:**
1. Use a separate node or layer for skin, after the global grade and before the LUT.
2. Select skin with a qualifier or HSL key on the face's midtones.
3. Clean and soften the matte.
4. Add a power window around the face, and track it.
5. Check the matte. Only skin should be selected, with no holes.

**Adjust inside the mask, based on the footage:**
- **Hue:** move it from the measured position onto the skin-tone line.
- **Saturation:** reduce it only if the footage skin is too orange or saturated. The typical range in moody grades is −5 to −15%, but use what this footage needs.
- **Luminance:** slightly brighter than the background, without looking pasted on.
- **Warmth:** slightly warm, even when the shadows are teal or cool.
- **Softness:** mild smoothing only if the footage needs it. Keep the texture.

**Moody grades:** Keep the cool tints in the shadows and background, and let only about 10–20% of them reach the skin. In teal/orange looks, the orange belongs in the hue, not the saturation.

**Tools:**
- **Resolve:** Qualifier + window + tracker, Hue vs Hue/Sat, Color Warper
- **Premiere:** HSL Secondary + tracked mask
- **CapCut:** HSL (orange/red), mask on a duplicated layer

**Skin check:** Compare against the footage's own close-ups at 100% and on a phone. If the skin looks orange, grey, green, plastic or oversaturated, pull back.

### Phase 3.6: Food masking (when food is on screen)
Isolate the food and correct each element from its measured color in the footage, so it stays fresh, true to life and appetizing.

**Build the mask:**
1. Use a separate node or layer for food, after the global grade and before the LUT.
2. Draw a power window around the plate first.
3. Refine inside it with a qualifier or HSL key on the food colors.
4. Use separate masks for very different elements (meat, greens, rice, sauce).
5. Soften the matte and track the window.
6. Check the matte for full coverage with no holes.

**Target color by food type (correct from the footage's measured color toward these):**
| Food | Target | Avoid |
|---|---|---|
| Grilled, fried, roasted meat | Warm golden-brown, rich crust | Orange, red, grey or green casts |
| Greens and vegetables | Fresh natural green, slightly yellow-green | Cyan/teal greens, neon |
| Red sauces, tomatoes, berries | Rich deep red with texture | Magenta, clipped red |
| Rice, bread, noodles, dairy | Clean neutral or slightly warm white | Blue/teal tint, blown highlights |
| Coffee, chocolate, dark sauces | Warm brown with detail in the darks | Black, muddy, crushed |
| Drinks and soups | Clear, translucent, natural highlights | Dull, grey, flat |

**Texture and sheen:** Keep the gloss and specular highlights. If the footage looks soft, add a little midtone detail inside the mask. Never crush brown food or blow out white food.

**Moody grades:** Keep the dark or cool look on the background and table. Let only about 0–10% of a cool tint reach the food, and never put teal, blue or green on it. Make the food slightly brighter than its surroundings, and keep its saturation natural.

**Tools:**
- **Resolve:** Power window + tracker, Qualifier, Hue vs Hue/Sat, Color Warper, Midtone Detail
- **Premiere:** HSL Secondary + tracked mask, Hue vs Hue/Sat curves
- **CapCut:** HSL by channel, mask on a duplicated layer

**Food check:** Compare against the footage's own close-ups at 100% and on a phone. Does it look fresh, true to life and appetizing? Is it consistent across shots of the same dish?

Re-check skin and food after Phase 6, because LUTs often shift them.

### Phase 4: Film grain (only if the reference has it)
Match the reference's grain size and strength. If the footage already has noise, account for it and add less grain. Test an export.
- **Resolve Studio:** Film Grain OFX
- **Free alternative:** a grain overlay in Overlay or Soft Light mode
- **Premiere:** Noise or a grain overlay
- **CapCut:** a low-intensity grain effect

### Phase 5: Glow and halation (only if the reference has it)
Apply it only to the highlights that actually exist in the footage, using a threshold.
- **Resolve Studio:** Halation, Glow or Mist OFX
- **Manual:** isolate the highlights → blur → tint red → Add/Screen at low opacity

### Phase 6: Apply the LUT based on the reference
Use a creative LUT only if the breakdown calls for one. Set its intensity by comparing the result to the reference on the user's footage; 30–70% is typical but not fixed. Afterward, re-check Phases 1–3.6 and correct before the LUT. Match the LUT's expected input to the footage format.

| Reference characteristic | LUT / emulation family |
|---|---|
| Warm print, rich reds, soft roll-off | Kodak 2383 / Vision3 |
| Cooler, greener shadows, pastel | Fuji 3513 / Eterna-style |
| Teal/orange blockbuster | Teal & orange, skin and food protected |
| Faded, nostalgic, lifted blacks | Kodak Portra / vintage film |
| Clean commercial | Rec.709 technical LUT + curve and saturation work |
| Dark, dramatic, desaturated | Bleach-bypass |
| Black & white | Monochrome film emulation |

### Recommended Resolve node tree
`01 Exposure → 02 WB → 03 Contrast/Curve → 04 Shadows/Tint → 05 Skin mask → 06 Food mask → 07 CST (if LOG) → 08 LUT → 09 Halation/Glow → 10 Grain`

---

## STEP 4: Final validation
Compare the graded footage, the original raw footage and the reference side by side. Mark each item Match or Adjust:
- [ ] Overall mood matches the Target Look Summary
- [ ] Every row of the Gap Table is closed, or the remaining gap is accepted
- [ ] The contrast and exposure waveform resembles the reference
- [ ] Highlights: no unintended clipping
- [ ] Shadows: depth and tint match, with no added noise
- [ ] Skin: on the skin line, natural (not orange, grey or oversaturated, even in moody grades), and consistent across shots
- [ ] Food: natural, appetizing color and texture, with no cool, grey or neon cast, and consistent across shots of the same dish
- [ ] Color is consistent across the scene
- [ ] Grain and halation appear only if the reference has them
- [ ] No banding, blotchy color or crushed detail
- [ ] No adjustment the footage didn't need
- [ ] A 5–10 second test export checked on the target device

For each Adjust, name the phase and the change, then re-run that phase only. If the user kept a Partially achievable reference, list the remaining trade-offs.

---

## Shot matching
1. Grade the hero shot: the best-lit shot with skin or the hero dish.
2. Apply its grade to the rest of the scene.
3. Measure each shot again and rebalance its exposure and WB from its own readings. Re-check the skin and food masks.
4. Compare skin, food and neutral greys on the scopes.

## Quick look recipes (direction only; values always come from the footage)
- **Cinematic and moody:** lower midtones, soft S-curve, slightly lifted blacks, teal shadows, warm masked skin, reduced saturation, 2383-style LUT.
- **Moody food:** dark background with a vignette, low-key contrast, cool or neutral shadows kept off the food, warm true-color food slightly brighter than its surroundings, sheen preserved.
- **Warm and nostalgic:** warm WB, matte blacks, soft highlights, Portra-style LUT, medium grain, subtle glow.
- **Clean and natural:** accurate WB, gentle contrast, true skin and food, technical LUT only.
- **Dark and dramatic:** low-key, hard S-curve, cool or desaturated palette, slightly warm skin.
- **Film with grain and halation:** print LUT, soft roll-off, visible grain, subtle halation.
- **Commercial and vibrant:** bright, crisp, neutral whites, more vibrance, natural skin, fresh (not neon) food.

## Automation in the workspace
- **Measure (default whenever frames are uploaded):** sample the shadow, midtone, highlight, neutral, skin and food RGB values, histograms, clipping percentages and shadow noise for both the raw footage and the reference. Use them to fill the Footage Breakdown and the Gap Table.
- **Build a LUT:** generate a 33-point .cube LUT from the measured gaps, labeled with its expected input (Rec.709 or the specific LOG profile).
- **Preview:** apply it to the user's own raw frame and show raw / graded / reference side by side, including each alternative look and a close-up check of skin and food.

A LUT from a few stills is a starting point only, because a LUT can't mask skin or food. Do that masking and the per-shot fine-tuning in the editor.

## Common mistakes to avoid
- Giving values before seeing the raw footage, or reusing values from another clip
- Copying recipe numbers instead of measuring the gap
- Forcing a reference the footage can't support
- Switching to an alternative without approval
- Putting a Rec.709 creative LUT on LOG footage
- Fixing exposure or WB after the LUT
- Not masking skin, so a moody or teal grade turns faces grey or green
- Overcooking skin inside the mask
- Letting a teal or cool grade spill onto food
- Oversaturating food or crushing its darks and highlights
- Raising saturation globally instead of targeting specific hues
- Adding grain or halation the reference doesn't have
- Judging only on an uncalibrated or overly bright screen