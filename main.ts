import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const line = "meetingmium (n.): the unearned confidence a problem gains after four meetings nobody touched it in.";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
