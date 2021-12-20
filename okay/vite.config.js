import { defineConfig } from "vite";

export default defineConfig({
  base: "/Portfolio/",
  build: {
    chunkSizeWarningLimit: 1000,
  },
});
