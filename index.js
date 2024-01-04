/** @type {import('@types/eslint').Linter.BaseConfig} */
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'prettier', 'plugin:import/recommended'],
  overrides: [
    // React
    {
      extends: ['plugin:react/recommended', 'plugin:react/jsx-runtime', 'plugin:react-hooks/recommended', 'plugin:jsx-a11y/recommended'],
      files: ['**/*.{js,jsx,ts,tsx}'],
      plugins: ['react', 'jsx-a11y'],
      settings: {
        formComponents: ['Form'],
        linkComponents: [
          {linkAttribute: 'to', name: 'Link'},
          {linkAttribute: 'to', name: 'NavLink'},
        ],
        react: {
          version: 'detect',
        },
      },
    },
    // TypeScript
    {
      extends: ['plugin:@typescript-eslint/recommended', 'plugin:import/recommended', 'plugin:import/typescript'],
      files: ['**/*.{ts,tsx}'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint', 'import'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/return-await': 'error',
      },
      settings: {
        'import/internal-regex': '^#/',
        'import/resolver': {
          node: {
            extensions: ['.ts', '.tsx'],
          },
          typescript: {
            alwaysTryTypes: true,
          },
        },
      },
    },
    // Node
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.js'],
    },
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['prettier', 'sort-destructure-keys', 'sort-keys-fix'],
  rules: {
    'comma-dangle': ['warn', 'always-multiline'],
    'import/extensions': 'off',
    'import/no-duplicates': ['error'],
    'import/no-internal-modules': ['error', {allow: ['*/*', '[~#@]*/**']}],
    'import/order': [
      'error',
      {
        alphabetize: {caseInsensitive: true, order: 'asc'},
        distinctGroup: false,
        'newlines-between': 'never',
      },
    ],
    'import/prefer-default-export': 'off',
    'max-len': [
      'error',
      {
        code: 140,
        ignoreComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'no-alert': 'off',
    // TODO: Turn this on when we migrate the window.confirm calls
    'no-case-declarations': 'off',
    'no-console': 'off',
    'no-else-return': 'off',
    'no-nested-ternary': 'off',
    'no-return-await': 'off',
    'no-underscore-dangle': 'off',
    'object-curly-spacing': ['error', 'never'],
    'prettier/prettier': ['error'],
    quotes: ['error', 'single', {allowTemplateLiterals: true}],
    'react-hooks/exhaustive-deps': 'warn',
    'react/function-component-definition': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: false,
        ignoreCase: true,
        noSortAlphabetically: false,
        reservedFirst: false,
        shorthandFirst: false,
        shorthandLast: false,
      },
    ],
    'react/no-children-prop': 'off',
    'react/no-unused-prop-types': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'sort-destructure-keys/sort-destructure-keys': [2, {caseSensitive: false}],
    'sort-imports': ['error', {ignoreDeclarationSort: true}],
    'sort-keys-fix/sort-keys-fix': 'warn',
  },
};
