import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",  // ✅ Updated for user/org GitHub Pages deployment
  optimizeDeps: {
    include: ["flowbite"],
  },
  resolve: {
    alias: {
      '/vite.svg': '/src/vite.svg',
    },
  },
});
