// The 4AM Commit — a one-liner for make.fun.
// A commit message written at 4am: it works here, nowhere else, ship it anyway.
// The classic "works on my machine" defence, taken to its honest conclusion:
// the author knows it fails everywhere else and ships it regardless.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "fix: it works on my machine at 4am. It does not work on your machine, in production, or anywhere else. Shipping anyway.";
const MAX_CHARS = 200;

if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
