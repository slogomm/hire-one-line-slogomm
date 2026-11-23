// Writes the one-line hiring pitch to entry.txt in the configured output directory.
// Reads MAKEFUN_OUTPUT_DIR env var (defaults to /output), creates the directory if needed,
// and writes the PITCH constant as UTF-8 text.
import { mkdirSync, writeFileSync } from "node:fs";

const PITCH = "I don't need onboarding: by your standup I'll have shipped the fix with tests and a rollback plan in the PR.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, PITCH, "utf-8");