import { defineConfig } from "vite"

export default defineConfig({
  base: '/spa-vite/',
  root: ".",
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
  server: {
    port: 3000,
  },
})
