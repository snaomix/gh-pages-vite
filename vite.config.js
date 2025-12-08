import { resolve } from "path";

export default {
  root: resolve(__dirname, "src"),
  base: "/gh-pages-vite/",
  entry: resolve(__dirname, "src/index.js"),
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  server: {
    port: 8080,
  },
};
