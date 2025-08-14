import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration
// See https://vitejs.dev/config/ for details.
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    port: 3000,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
});