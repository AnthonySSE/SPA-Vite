import { defineConfig } from "vite"

export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/vita-vanilla-js-app/" : "/",
  root: ".",
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
  server: {
    port: 3000,
  },
})
