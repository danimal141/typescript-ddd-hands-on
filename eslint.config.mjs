import js from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import importPlugin from "eslint-plugin-import";

export default [
  js.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json"
      },
      globals: {
        console: true
      }
    },
    settings: {
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: "./tsconfig.json"
        }
      },
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"]
      }
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      "import": importPlugin
    },
    rules: {
      "semi": ["error", "always"],
      "quotes": ["error", "double"],
      "@typescript-eslint/no-unused-vars": ["error", {
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_",
        "ignoreRestSiblings": true,
        "args": "none"
      }],
      "@typescript-eslint/no-explicit-any": "warn",
      "no-unused-vars": "off",
      "no-console": ["warn", { allow: ["log"] }],
      "import/no-restricted-paths": [
        "error",
        {
          "zones": [
            {
              "target": "./src/Domain/**/!(*.spec.ts|*.test.ts)",
              "from": "./src/Application/**/*",
              "message": "Domain層でApplication層をimportしてはいけません。"
            },
            {
              "target": "./src/Domain/**/!(*.spec.ts|*.test.ts)",
              "from": "./src/Presentation/**/*",
              "message": "Domain層でPresentation層をimportしてはいけません。"
            },
            {
              "target": "./src/Domain/**/!(*.spec.ts|*.test.ts)",
              "from": "./src/Infrastructure/**/*!(test).ts",
              "message": "Domain層でInfrastructure層をimportしてはいけません。"
            },
            {
              "target": "./src/Application/**/!(*.spec.ts|*.test.ts)",
              "from": "./src/Presentation/**/*",
              "message": "Application層でPresentation層をimportしてはいけません。"
            },
            {
              "target": "./src/Application/**/!(*.spec.ts|*.test.ts)",
              "from": "./src/Infrastructure/**/*",
              "message": "Application層でInfrastructure層をimportしてはいけません。"
            }
          ]
        }
      ]
    }
  },
  {
    files: ["**/*.test.ts", "**/*.spec.ts"],
    languageOptions: {
      globals: {
        jest: true,
        describe: true,
        test: true,
        it: true,
        expect: true,
        beforeEach: true,
        afterEach: true,
        beforeAll: true,
        afterAll: true
      }
    }
  }
];
