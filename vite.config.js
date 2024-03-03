import { defineConfig } from 'vite';
import handlebars from './vite-plugin-handlebars-precompile';
import { resolve } from 'path';

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
