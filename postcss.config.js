module.exports = {
  plugins: {
    "@fullhuman/postcss-purgecss": {
      content: ["./src/**/*"],
      safelist: [/^carousel-/, /^collaps/, /^show/],
    },
  },
};
