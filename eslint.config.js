// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import storybook from "eslint-plugin-storybook";

export default tseslint.config(
  // Ignore build output
  { ignores: ["dist", "build"] },

  // Base TS/JS config
  {
    files: ["**/*.{ts,tsx}", "**/*.js"],
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      // React hooks
      ...reactHooks.configs.recommended.rules,

      // React Refresh (HMR) – chỉ cảnh báo
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],

      // Nới lỏng một số rule TS cho dev
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-non-null-assertion": "off",
    },
  },

  // Storybook recommended (flat config)
  storybook.configs["flat/recommended"]
);
