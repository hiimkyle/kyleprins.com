import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
import labNoteSections from './src/plugins/lab-note-sections.mjs';

export default defineConfig({
  site: 'https://kyleprins.com',
  integrations: [sitemap()],
  markdown: {
    processor: unified({ rehypePlugins: [labNoteSections] }),
  },
});
