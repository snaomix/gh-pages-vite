import purgeCSSPlugin from "@fullhuman/postcss-purgecss";

/** @type {import('postcss-load-config').Config} */
export default {
  plugins: [
    purgeCSSPlugin({
      content: ["./src/**/*"],
      safelist: [/^carousel-/, /^collaps/, /^show/],
    }),
  ],
};
