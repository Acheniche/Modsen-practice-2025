module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      "airbnb",
      "airbnb-typescript",
      "airbnb/hooks",
      "plugin:prettier/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      project: "./tsconfig.json",
    },
    plugins: ["@typescript-eslint", "prettier"],
    rules: {
      "react/react-in-jsx-scope": "off",
      "import/extensions": "off",
      "prettier/prettier": "error",
    },
  };
  