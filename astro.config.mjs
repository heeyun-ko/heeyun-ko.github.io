// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
// astro.config.mjs

export default defineConfig({
  site: 'https://heeyun-ko.github.io',
  outDir: './docs', // 빌드 결과를 docs 폴더로
  integrations: [mdx(), sitemap()],
  vite: {
    build: {
      cssCodeSplit: true,
      assetsInlineLimit: 0,
      rollupOptions: {
        output: {
          assetFileNames: '_astro/[name].[hash][extname]'
        }
      }
    }
  }
});
