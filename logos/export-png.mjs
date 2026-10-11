// Renders the final icon to PNGs at the standard sizes.
// Run from the project root:  node logos/export-png.mjs
import { readFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const here = dirname(fileURLToPath(import.meta.url));
const svg = readFileSync(join(here, "export", "logo-icon.svg"));
const outDir = join(here, "export", "png");
mkdirSync(outDir, { recursive: true });

const sizes = [16, 32, 48, 192, 512, 1024, 2048];

for (const size of sizes) {
  const out = join(outDir, `icon-${size}.png`);
  await sharp(svg, { density: 384 }).resize(size, size).png().toFile(out);
  console.log(`wrote icon-${size}.png`);
}
