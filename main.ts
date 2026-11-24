import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entire entry is this one line, so keep it verbatim and in one place:
// any edit to the wording should be a deliberate change to JOKE alone.
const JOKE =
  "I set my out-of-office reply to 'per my last email' so I can passive-aggressively haunt the office from the beach.";

const OUTPUT_DIR = "/output";
const OUTPUT_PATH = join(OUTPUT_DIR, "entry.txt");

// Guard against an accidentally blanked-out joke shipping as an empty entry.
if (JOKE.trim().length === 0) {
  throw new Error("JOKE must not be empty");
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, JOKE, "utf8");
