import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages project site: https://fpeter99.github.io/emelt-matek-szobeli/
  base: process.env.GITHUB_PAGES === 'true' ? '/emelt-matek-szobeli/' : '/',
});
