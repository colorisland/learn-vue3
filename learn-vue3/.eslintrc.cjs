/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-prettier",
  ],
  "prettier/prettier": [
    "error",
    {
      singleQuote: true,
      semi: true,
      useTabs: true,
      trailingComma: true,
      printWidth: 80,
      bracketSpacing: true,
      arrowParens: "avoid",
    },
  ],
};
