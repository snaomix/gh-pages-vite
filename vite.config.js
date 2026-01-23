/** @type {import('vite').UserConfig} */
export default {
  root: "src",
  base: "/gh-pages-vite/",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  server: {
    port: 8080,
  },
};
