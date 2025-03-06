import html from "@html-eslint/eslint-plugin";
import htmlParser from "@html-eslint/parser";
import js from "@eslint/js";
import globals from "globals";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  {
    files: ['**/*.js'],
    rules: {
      ...js.configs.recommended.rules,
    },
    languageOptions: {
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node
      },
    },
  },
  {
    ...html.configs["flat/recommended"],
    files: ["**/*.html"],
    plugins: {
      "@html-eslint": html,
    },
    rules: {
      ...html.configs["flat/recommended"].rules,
      "@html-eslint/attrs-newline": "off",
      "@html-eslint/indent": ["error", 2],
      "@html-eslint/require-closing-tags": ["error"],
      "@html-eslint/no-extra-spacing-attrs": ["error", { "enforceBeforeSelfClose": true }],
    },
    languageOptions: {
      parser: htmlParser,
    },
  },
  eslintConfigPrettier,
];
