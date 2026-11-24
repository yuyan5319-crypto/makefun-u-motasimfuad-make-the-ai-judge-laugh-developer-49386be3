// "Carry-On Luggage" — a make.fun entry for
// "Make the AI Judge Laugh: Developer Excuses".
//
// The program writes one funny single-line excuse a developer gives
// when code breaks in production to /output/entry.txt.
// The excuse must be 1-200 characters; this one is 104.

import { mkdirSync, writeFileSync } from "node:fs";

const excuse =
  "It worked on my machine, so I shipped my machine to production — the bug came along as carry-on luggage.";

// Guard: the gate only accepts 1-200 characters, so refuse to run
// rather than ever writing an invalid entry.
if (excuse.length < 1 || excuse.length > 200 || !excuse.trim()) {
  throw new Error(`excuse must be 1-200 characters, got ${excuse.length}`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, `${excuse}\n`, "utf8");
console.log(excuse);
