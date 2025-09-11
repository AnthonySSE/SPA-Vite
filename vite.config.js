import { defineConfig } from "vite"

export default defineConfig({
  base: '/SPA-Vite/',
  root: ".",
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
  server: {
    port: 3000,
  },
})
