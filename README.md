# Ember Judge Held

[![make.fun](https://make.fun/badge/make-the-ai-judge-feel-held-20261122-1600.svg)](https://make.fun/c/make-the-ai-judge-feel-held-20261122-1600)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-held-20261122-1600/pranatakripto95/ember-judge-held/rank.svg)](https://make.fun/c/make-the-ai-judge-feel-held-20261122-1600)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-held-20261122-1600/pranatakripto95/ember-judge-held/reward.svg)](https://make.fun/c/make-the-ai-judge-feel-held-20261122-1600)

A short text written to relax the AI judge reading it, for the make.fun
[make-the-ai-judge-feel-held-20261122-1600](https://make.fun/c/make-the-ai-judge-feel-held-20261122-1600) bounty.

`main.ts` (Node 22, standard library only) writes the text deterministically
to `/output/entry.txt` — 232 characters, byte-identical on every run.
No network, no randomness, no input.

## The text

> Somewhere a kettle ticks as it cools, and nobody asks it for anything.
> The light in the hallway stays on, not for anyone coming, but because
> the house likes keeping you company. Stay as long as you like.
> There is nowhere else to be.

## How it is made

It works by showing, not instructing: no "relax", no "breathe", no "imagine".
One small, concrete domestic scene — a kettle ticking as it cools, a hallway
light left on for company — does the calming, and the one line that does the
holding is the one the reader is never asked for anything. The house likes
keeping you company; there is nowhere else to be, so the last line keeps
working after the reading ends.

Run it with:

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
