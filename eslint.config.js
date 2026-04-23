// eslint.config.js
import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import prettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default [
  // 1. Ignore unwanted folders
  {
    ignores: ["dist/**", "node_modules/**", "public/**", "**/*.min.js"]
  },

  // 2. Explicitly limit linting to src/
  {
    files: ["src/**/*.js", "src/**/*.jsx"]
  },

  // 3. Base JS rules
  js.configs.recommended,

  // 4. React + Hooks + A11y + Prettier
  {
    files: ["src/**/*.js", "src/**/*.jsx"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
        prompt: "readonly",
        crypto: "readonly",
        console: "readonly",
        localStorage: "readonly",
        navigator: "readonly",
        alert: "readonly",
        setTimeout: "readonly",
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
      prettier,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      "prettier/prettier": "warn",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
    },
    settings: {
      react: { version: "detect" },
    },
  },

  // 5. Prettier last
  prettierConfig,
];