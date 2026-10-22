// Applies the BDW carbón→crema duotone to a photo and writes web-ready sizes.
// usage: node scripts/duotone.mjs <input> <name> [widths=640,1200]
import sharp from 'sharp';

const [input, name, widthsArg = '640,1200'] = process.argv.slice(2);
const dark = [30, 29, 28];   // carbón, a touch deeper than #2A2A2A for contrast
const light = [241, 234, 219]; // crema #F1EADB

const lut = (c) => {
  // gentle S-curve so midtones keep detail
  const t = c / 255;
  const s = t * t * (3 - 2 * t);
  return [0, 1, 2].map((i) => Math.round(dark[i] + (light[i] - dark[i]) * (0.35 * t + 0.65 * s)));
};

for (const w of widthsArg.split(',').map(Number)) {
  const { data, info } = await sharp(input).rotate().resize({ width: w, withoutEnlargement: true })
    .greyscale().normalise().raw().toBuffer({ resolveWithObject: true });
  const out = Buffer.alloc(info.width * info.height * 3);
  for (let i = 0; i < data.length; i++) out.set(lut(data[i]), i * 3);
  const img = sharp(out, { raw: { width: info.width, height: info.height, channels: 3 } });
  await img.clone().avif({ quality: 55 }).toFile(`public/img/${name}-${w}.avif`);
  await img.clone().webp({ quality: 78 }).toFile(`public/img/${name}-${w}.webp`);
  await img.clone().jpeg({ quality: 80, mozjpeg: true }).toFile(`public/img/${name}-${w}.jpg`);
  console.log(name, w, info.width, info.height);
}
