import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I set my out-of-office reply to 'per my last email' so I can passive-aggressively haunt the office from the beach.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
