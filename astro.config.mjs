import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://www.solarfit.es',
  output: 'server',
  integrations: [
    tailwind(),
    sitemap(),
  ],
  adapter: node({ mode: 'standalone' }),
  server: {
    host: '0.0.0.0',
    port: 3000
  }
});
