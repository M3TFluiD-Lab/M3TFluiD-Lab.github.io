import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/M3TFluid-Lab.github.io",
  optimizeDeps: {
    include: ["flowbite"],
  },
  resolve: {
    alias: {
      '/vite.svg': '/src/vite.svg',
    },
  },
});
