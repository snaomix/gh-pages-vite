import { defineConfig } from "vite";

/** @type {import('vite').UserConfig} */
export default defineConfig({
  root: "src",
  base: "/gh-pages-vite/",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
        quietDeps: true,
        silenceDeprecations: ["import"],
      },
    },
  },
  server: {
    port: 8080,
  },
});
