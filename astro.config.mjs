// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://projectanshhh.github.io',
  base: '/campusx-ai-tracker/',
  vite: {
    plugins: [tailwindcss()],
  },
});
