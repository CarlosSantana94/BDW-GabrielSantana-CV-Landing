import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Set SITE_URL in Railway once the domain is final.
const site = process.env.SITE_URL || 'https://bucadigitalworks.com';

export default defineConfig({
  site,
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/og/') && !page.includes('/404'),
      i18n: { defaultLocale: 'es', locales: { es: 'es-MX', en: 'en' } },
      // Case pages use different paths per language, so pair them by slug
      serialize(item) {
        const m = item.url.match(/\/(?:proyectos|en\/projects)\/([^/]+)\/$/);
        if (m) {
          const es = new URL(`/proyectos/${m[1]}/`, site).href;
          const en = new URL(`/en/projects/${m[1]}/`, site).href;
          item.links = [{ lang: 'es-MX', url: es }, { lang: 'en', url: en }];
        }
        return item;
      },
    }),
  ],
  build: { inlineStylesheets: 'always' },
});
