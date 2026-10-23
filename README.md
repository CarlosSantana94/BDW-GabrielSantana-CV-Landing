# gabrielsantana.mx

One-page CV for Gabriel Santana, branded with the Buca Digital Works kit (carbón / crema).

- **Stack:** Astro 5 (static), Archivo variable + JetBrains Mono (self-hosted), no client framework.
- **Languages:** Spanish at `/`, English at `/en/`. All copy lives in `src/i18n/content.ts`.
- **CV PDFs:** generated from `/cv/` and `/en/cv/` into `public/cv/`.
- **OG images:** generated from `/og/es/` and `/og/en/` into `public/og-*.png`.

## Commands

```sh
npm install
npm run dev        # local dev server
npm run build      # static build into dist/
npm run cv         # after build: re-render CV PDFs + OG images (needs Chromium/Chrome)
```

Edit copy in `src/i18n/content.ts`, then `npm run build && npm run cv` and commit the regenerated files in `public/`.

## Photos

Photos get the brand duotone with `node scripts/duotone.mjs <input> <name> [widths]`, which writes AVIF/WebP/JPEG to `public/img/`.

## Deploy

Any static host works (Vercel, Netlify, Cloudflare Pages). Build command `npm run build`, output `dist/`.

## Buca Digital Works site

The studio site lives in [`buca-site/`](buca-site/) as its own Astro project. Deploy it as a separate service with that folder as the root directory.
