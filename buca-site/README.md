# Buca Digital Works · company site

Studio site for Buca Digital Works, same design system as the CV landing at the repo root (carbón / crema, Archivo + JetBrains Mono, accent `#E4572E`).

- **Stack:** Astro 5 (static), no client framework.
- **Languages:** Spanish at `/`, English at `/en/`. Case studies at `/proyectos/<slug>/` and `/en/projects/<slug>/`.
- **Copy:** everything lives in `src/i18n/content.ts` (services, projects, features, process).
- **OG images:** rendered from `/og/es/` and `/og/en/` into `public/og-*.png`.

## Commands

```sh
npm install
npm run dev        # local dev server
npm run build      # static build into dist/
npm start          # serves dist/ on $PORT (used by Railway)
npm run og         # after build: re-render OG images (needs Chromium/Chrome)
```

## Deploy on Railway

New service from this repo, then in **Settings**:

- **Root Directory:** `buca-site`
- **Build command:** `npm run build`
- **Start command:** `npm start`
- **Watch paths:** `/buca-site/**` (so CV changes don't redeploy this site)
- **Variables:** `SITE_URL=https://<your-domain>` (canonical, sitemap, OG and robots use it)

Then add the custom domain under **Networking** and create the CNAME Railway shows at your DNS provider.
