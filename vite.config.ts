import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: 'es2018',
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: 'index.html'
    }
  },
  server: {
    host: true
  }
});
