// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://distributori-mariani.it',
  adapter: vercel(),
  integrations: [sitemap(), icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});