/**
 * Convert the 10 source PNGs (Docs/Images/IMG-01..10) into optimised WebP
 * (quality 82) placed under apps/web/public/images per the Image Guide folder
 * tree. IMG-06 additionally gets a 1200x630 JPG (quality 85) for the OG tag.
 *
 * Run from the repo root:  pnpm images
 */
import sharp from "sharp";
import { mkdir, access } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const SRC = resolve(root, "Docs/Images");
const OUT = resolve(root, "apps/web/public/images");

const WEBP_Q = 82;
const JPG_Q = 85;

// source PNG -> [destination webp (relative to OUT), max display width px]
// Widths are ~2x the rendered size for retina, sized to hit the Image Guide's
// file-size targets after WebP@82 compression.
const map = [
  ["IMG-01.png", "services/img-01-tractor.webp", 900],
  ["IMG-02.png", "services/img-02-labour.webp", 900],
  ["IMG-03.png", "services/img-03-dealer-shop.webp", 900],
  ["IMG-04.png", "services/img-04-farmer-phone.webp", 900],
  ["IMG-05.png", "about/img-05-aerial-field.webp", 1040],
  ["IMG-06.png", "og/img-06-sunrise-field.webp", 1600],
  ["IMG-07.png", "sections/img-07-farmer-portrait.webp", 900],
  ["IMG-08.png", "sections/img-08-dealer-portrait.webp", 900],
  ["IMG-09.png", "ai-section/img-09-farmer-call.webp", 360],
  ["IMG-10.png", "ai-section/img-10-whatsapp-hands.webp", 360],
];

async function ensureDir(file) {
  await mkdir(dirname(file), { recursive: true });
}

async function fileExists(p) {
  try {
    await access(p);
    return true;
  } catch {
    return false;
  }
}

async function run() {
  let total = 0;
  for (const [src, dst, maxWidth] of map) {
    const srcPath = resolve(SRC, src);
    const dstPath = resolve(OUT, dst);
    if (!(await fileExists(srcPath))) {
      console.warn(`! missing source ${src} — skipping`);
      continue;
    }
    await ensureDir(dstPath);
    const info = await sharp(srcPath)
      .resize({ width: maxWidth, withoutEnlargement: true })
      .webp({ quality: WEBP_Q })
      .toFile(dstPath);
    total += info.size;
    console.log(`✓ ${dst}  (${(info.size / 1024).toFixed(0)} KB)`);
  }

  // OG: 1200x630 JPG from IMG-06
  const ogSrc = resolve(SRC, "IMG-06.png");
  if (await fileExists(ogSrc)) {
    const ogDst = resolve(OUT, "og/img-06-og-image.jpg");
    await ensureDir(ogDst);
    const info = await sharp(ogSrc)
      .resize(1200, 630, { fit: "cover", position: "centre" })
      .jpeg({ quality: JPG_Q, mozjpeg: true })
      .toFile(ogDst);
    console.log(`✓ og/img-06-og-image.jpg  (${(info.size / 1024).toFixed(0)} KB)`);
  }

  console.log(`\nDone. Total WebP payload: ${(total / 1024).toFixed(0)} KB`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
