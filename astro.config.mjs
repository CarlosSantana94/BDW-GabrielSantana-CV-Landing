import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://gabrielsantana.mx',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/cv/') && !page.includes('/og/'),
      i18n: { defaultLocale: 'es', locales: { es: 'es-MX', en: 'en' } },
    }),
  ],
  build: { inlineStylesheets: 'always' },
});
