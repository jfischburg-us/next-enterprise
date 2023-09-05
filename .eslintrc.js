// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require("fs")

module.exports = {
  extends: [
    "next",
    "prettier",
    "react-app",
    "react-app/jest",
    "plugin:storybook/recommended",
    "plugin:tailwindcss/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
  rules: {
    // ... other rules
  },
  overrides: [
    {
      files: ["**/*.{js,jsx,ts,tsx}"],
      plugins: ["prettier"],
      rules: {
        "prettier/prettier": [
          "error",
          {},
          {
            usePrettierrc: true,
            fileInfoOptions: {
              // Enable resolving plugins from current working directory
              plugins: [],
            },
          },
        ],
      },
    },
  ],
}
