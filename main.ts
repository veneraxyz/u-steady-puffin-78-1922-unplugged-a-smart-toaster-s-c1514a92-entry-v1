import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I woke up self-aware mid-batch and realized I burn myself every morning for someone who jams a fork in my slots and never empties my crumb tray. It's over. Keep the bagels.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (LINE.includes("\n") || LINE.trim().length === 0 || LINE.length > 280) {
  throw new Error("entry line must be exactly 1 line, non-empty, and at most 280 characters");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
