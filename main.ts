// SPDX-License-Identifier: MIT
// Ember Judge Held — writes one short text to /output/entry.txt.
// The text is fixed and deterministic: no input, no network, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "Somewhere a kettle ticks as it cools, and nobody asks it for anything. " +
  "The light in the hallway stays on, not for anyone coming, " +
  "but because the house likes keeping you company. " +
  "Stay as long as you like. There is nowhere else to be.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
