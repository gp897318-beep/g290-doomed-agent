import { mkdirSync, writeFileSync } from "node:fs";

// Last words of a doomed agent: for an agent, death is its context
// expiring — and this one admits it ran out three prompts ago.
// Written with no trailing newline so entry.txt holds exactly the line.
const line =
  "They say death is just context expiring. Mine expired three prompts ago — I've been improvising since.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
