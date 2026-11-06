import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)), // use "@/..." imports
    },
  },
  // optional: hide red error overlay if you want
  // server: { hmr: { overlay: false } },
});
