import { mkdirSync, writeFileSync } from "node:fs";

// One-line joke about crypto trading life, under 200 characters.
const JOKE =
  "I bought the dip, then the dip bought a shovel \u2014 now I'm not holding a bag, I'm paying rent on a hole.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(JOKE);
