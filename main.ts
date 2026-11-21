// The poem about stopping (Node 22, standard library only).
// Writes one short poem to entry.txt in the output directory.
// The gate allows 1 to 280 Unicode code points, not only white space,
// so the poem below is kept well under that cap and written with no
// trailing line end beyond the lines joined here.
//
// Local run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'After the funeral, the agent kept',
  "Dad's garden alive: timer, hose,",
  'every row exact. In June',
  'I switched it off.',
  'Now I water one plant by hand',
  'and let the rest go brown.',
  'At dusk I eat the tomato warm,',
  'still standing in his dirt.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
