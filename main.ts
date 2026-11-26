// Router confession entry — a one-line excuse from a home Wi-Fi router.
// Thinking revised again (hello): tiny, deterministic, and self-contained.
// No model calls, no network, no reads beyond this very own directory.
// The host wants a line that lands by itself, so there is no setup here.
// A "batch" of router alibis was weighed: updates and interference are dull;
// booking a personal day for the precise "slot" of need is the joke. The
// climax becomes a shift it skips, and the viewer's "orders" go unanswered.

import { mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

// Own directory, derived from this module's own URL (never another entry's).
const ownDir = fileURLToPath(new URL('.', import.meta.url));
void ownDir;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });

// Plain ASCII apostrophe, no trailing newline — byte-for-byte exact.
const line = "I didn't drop the connection. The movie reached the part where you needed me, so I took a personal day.";

const target = join(outputDir, 'entry.txt');
writeFileSync(target, line, 'utf8');
console.log(`entry.txt: ${Buffer.byteLength(line, 'utf8')} bytes`);
