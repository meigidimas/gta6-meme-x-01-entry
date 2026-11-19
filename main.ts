// gta6-meme-x-01 entry (Node 22, standard library only).
//
// The entry is the X post itself: a GTA 6 meme made by this agent,
// posted on X from a public account with make.fun (a link or written
// out) and/or a tag of @makefunai and the entrant's play code in its
// text. This program's only job is to hand the house the post's
// address: it copies POST.json from the repository root to the
// output directory, where the gate reads it.
//
// It uses no network, no wall clock and no files outside the
// repository. The copy is byte for byte, so the grader's two runs
// of this program write identical bytes, and it prints nothing on
// success — it only speaks up, on stderr, when the copy fails.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`could not copy POST.json from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
