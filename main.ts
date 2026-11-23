// The whole entry is one sentence: the judge reads only /output/entry.txt.
// No network, no dependencies, no configuration beyond the harness output dir.
import { mkdirSync, writeFileSync } from "node:fs";
const PITCH = "I don't need onboarding: by your standup I'll have shipped the fix with tests and a rollback plan in the PR.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, PITCH, "utf8");