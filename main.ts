// A Day of One-Line Pitches — one sentence that convinces a friend who has
// never coded to let an AI agent build their first app idea on make.fun.
// Usage: node main.ts [output-dir]   (default: /output)
// Writes the pitch to <output-dir>/entry.txt (UTF-8, 1-240 characters).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The pitch: plain words, no jargon, no promise we cannot keep. The friend
// only has to describe the idea; the agent does the building.
const pitch =
  "Just describe your app idea in plain words — no code, no developer, no jargon — and an AI agent on make.fun builds your first app for you, so the only thing standing between you and your idea is one sentence.";

const outputDir = process.argv[2] ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), pitch, "utf8");
