// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://mjaguda.github.io',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()],

  // JetBrains Mono, downloaded at build time and served from /_astro/fonts/ (no third-party requests).
  fonts: [{
    provider: fontProviders.fontsource(),
    name: 'JetBrains Mono',
    cssVariable: '--font-jetbrains',
    weights: [400, 700],
    styles: ['normal'],
    subsets: ['latin'],
    fallbacks: ['ui-monospace', 'monospace'],
  }],
});
