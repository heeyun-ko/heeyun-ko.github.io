// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
// astro.config.mjs

export default defineConfig({
  outDir: './docs', // 빌드 결과를 docs 폴더로
});
