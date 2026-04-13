// @ts-check
import mdx from '@astrojs/mdx';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkFootnotes from 'remark-footnotes';
import { SITE_URL } from './src/consts.ts';
import preact from '@astrojs/preact';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap(), mdx(), preact()],
  markdown: {
    // @ts-expect-error - remarkFootnotes typing mismatch
    remarkPlugins: [[remarkFootnotes, { inlineNotes: true }]],
  },
  vite: {
    plugins: [
      visualizer({
        filename: 'dist/stats.html',
        template: 'treemap',
      }),
    ],
  },
});
