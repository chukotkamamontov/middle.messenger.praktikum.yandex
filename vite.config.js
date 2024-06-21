import { defineConfig } from 'vite';
import { resolve } from 'path';
import handlebars from './vite-plugin-handlebars-precompile';

export default defineConfig({
  root: resolve(__dirname, 'src'),
  server: {
    port: 3000,
  },
  build: {
    outDir: resolve(__dirname, 'dist'),
  },
  plugins: [handlebars()],
  resolve: {
    alias: {
      src: '/src',
    },
  },
});
