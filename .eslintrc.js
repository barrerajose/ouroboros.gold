module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": "off",

    "@typescript-eslint/no-empty-function": "off",

    "@typescript-eslint/no-explicit-any": "off",

    "@typescript-eslint/no-non-null-assertion": "off",
    "react/prop-types": "off",
    "react/display-name": "off",
    "no-empty": "off",
    "@typescript-eslint/no-extra-semi": "off",

    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/ban-types": "off",
  },
}
