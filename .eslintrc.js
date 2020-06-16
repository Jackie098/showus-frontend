module.exports = {
    env: {
      browser: true,
      es6: true
    },
    globals: {
      Atomics: "readonly",
      SharedArrayBuffer: "readonly"
    },
    extends: [
      "airbnb",
      'eslint:recommended',
      "prettier/@typescript-eslint",
      "plugin:react/recommended",
      "plugin:prettier/recommended",
      "plugin:@typescript-eslint/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: 11,
      sourceType: "module",
      tsconfigRootDir: __dirname,
      project: ['./tsconfig.json'],
      ecmaFeatures: {
        jsx: true,
      }
    },
    plugins: [
        "react",
        "@typescript-eslint",
        "prettier",
    ],
    rules: {
      // "import/extensions": [
      //   "error",
      //   "ignorePackages",
      //   {
      //     "js": "never",
      //     "jsx": "never",
      //     "ts": "never",
      //     "tsx": "never",
      //   }
      // ],
      "prettier/prettier": "error",
      "no-console": "warn",
      "no-eval": "error",
      "import/first": "error",
      "import/extensions": false,
      "react/jsx-filename-extension": [
        1,
        { "extensions": [".js", ".jsx", ".ts", ".tsx"] }
      ],
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-unused-vars": "warn",
    },
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        "node": {
          "extensions": [".js", ".jsx", ".ts", ".tsx"]
        }
      }
    }
};
