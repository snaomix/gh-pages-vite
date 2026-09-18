import { existsSync } from "node:fs";
import { defineConfig } from "vite";

const isContainer =
  process.env.REMOTE_CONTAINERS === "true" || existsSync("/.dockerenv") || existsSync("/run/.containerenv");

const isHostOptionPassed = process.argv.includes("--host") || process.argv.includes("-h");

const defaultHost = isContainer || isHostOptionPassed ? "0.0.0.0" : "127.0.0.1";

const currentPort = isContainer ? 5174 : undefined;
const prevPort = isContainer ? 4174 : undefined;

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
    host: defaultHost,
    port: currentPort,
    hmr: {
      clientPort: currentPort,
    },
    watch: {
      usePolling: isContainer,
      interval: 100,
    },
  },
  preview: {
    host: defaultHost,
    port: prevPort,
  },
});
