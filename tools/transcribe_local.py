"""Free local transcription with faster-whisper (no API key needed).

    pip install faster-whisper
    python tools/transcribe_local.py <video-or-audio> [output.json] [--model small] [--language tl] [--prompt "..."]

--model: small (default, fast) or large-v3 (slower, better for Taglish).
--prompt: example text in the speaker's style. The default Taglish sample keeps English words
  in English and Tagalog in Tagalog. Add names, places and products so they are spelled right.
--language: force one language code (tl, en). Off by default, which suits Taglish best.
"""
import argparse
import json
from pathlib import Path

from faster_whisper import WhisperModel

TAGLISH_PROMPT = ("Hello guys! Kumusta kayo? Today, ita-try natin itong bagong cafe. "
                  "Grabe, ang sarap nito, sobrang worth it talaga. Ganito yung gagawin natin, "
                  "so first, i-click mo lang yung link.")

parser = argparse.ArgumentParser()
parser.add_argument("src")
parser.add_argument("out", nargs="?")
parser.add_argument("--model", default="small")
parser.add_argument("--language", default="")
parser.add_argument("--prompt", default=TAGLISH_PROMPT)
args = parser.parse_args()

src = Path(args.src)
root = Path(__file__).resolve().parent.parent
out = Path(args.out) if args.out else root / "outbox" / f"{src.stem}.transcript.json"

model = WhisperModel(args.model, compute_type="int8")
segments, _info = model.transcribe(str(src), word_timestamps=True,
                                   language=args.language or None, initial_prompt=args.prompt or None)

words, segs, text = [], [], []
for s in segments:
    segs.append({"start": s.start, "end": s.end, "text": s.text})
    text.append(s.text)
    for w in s.words or []:
        words.append({"word": w.word.strip(), "start": w.start, "end": w.end})

out.write_text(json.dumps({"text": "".join(text).strip(), "words": words, "segments": segs}, indent=2),
               encoding="utf-8")
print(f"Transcript saved: {out}")
