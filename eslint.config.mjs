import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import tseslintPlugin from "@typescript-eslint/eslint-plugin";
import tseslintParser from "@typescript-eslint/parser";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      parser: tseslintParser, // Додаємо TypeScript парсер
      globals: globals.browser,
    },
    settings: {
      react: {
        version: "detect", // Автоматичне визначення версії React
      },
    },
    ignores: ["dist/**"], // Ігнорування файлів у папці dist
    rules: {
      "no-unused-vars": "warn", // Попередження для невикористаних змінних
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }, // Ігнорування змінних з підкресленням
      ],
    },
  },
  pluginJs.configs.recommended,
  tseslintPlugin.configs.recommended, // Додаємо TypeScript ESLint правила
  pluginReact.configs.flat.recommended,
];
