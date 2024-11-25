import { purgeCSSPlugin } from '@fullhuman/postcss-purgecss';

export default{
  plugins: [
    purgeCSSPlugin({
      content: ["./src/**/*"],
      safelist: [/^carousel-/, /^collaps/, /^show/],
    }),
  ]
};
