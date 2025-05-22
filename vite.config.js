import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        contentScript: './src/contentScript.tsx'
      },
      output: {
        entryFileNames: 'assets/[name].js'
      }
    },
    outDir: 'dist',
    emptyOutDir: true
  }
});
