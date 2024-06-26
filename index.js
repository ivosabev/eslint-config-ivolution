// Splitting rules into separate modules allow for a lower-level API if our
// default rules become difficult to extend without lots of duplication.
const coreRules = require('./rules/core');
const importRules = require('./rules/import');
const jsxA11yRules = require('./rules/jsx-a11y');
const reactRules = require('./rules/react');
const typescriptRules = require('./rules/typescript');
const importSettings = require('./settings/import');
const remixSettings = require('./settings/remix');
const typescriptSettings = require('./settings/typescript');

/**
 * @see https://github.com/eslint/eslint/issues/3458
 * @see https://www.npmjs.com/package/@rushstack/eslint-patch
 */
require('@rushstack/eslint-patch/modern-module-resolution');

// const OFF = 0;
// const WARN = 1;
// const ERROR = 2;

/** @type {import('eslint').Linter.Config} */
const config = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@stylistic/disable-legacy',
    'plugin:tailwindcss/recommended',
  ],
  overrides: [
    {
      extends: ['plugin:@typescript-eslint/recommended', 'plugin:import/recommended', 'plugin:import/typescript'],
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module',
      },
      plugins: ['@typescript-eslint'],
      rules: {
        ...typescriptRules,
      },
    },
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('@babel/preset-react')],
    },
    ecmaVersion: 'latest',
    requireConfigFile: false,
    sourceType: 'module',
  },
  plugins: [
    '@stylistic',
    '@stylistic/eslint-plugin-jsx',
    'import',
    'jsx-a11y',
    'prettier',
    'react-hooks',
    'react',
    'sort-destructure-keys',
    'sort-keys-fix',
    'tailwindcss',
  ],
  // NOTE: In general - we want to use prettier for the majority of stylistic
  // concerns.  However there are some "stylistic" eslint rules we use that should
  // not fail a PR since we can auto-fix them after merging to dev.  These rules
  // should be set to WARN.
  //
  // ERROR should be used for "functional" rules that indicate a problem in the
  // code, and these will cause a PR failure
  // IMPORTANT: Ensure that rules used here are compatible with
  // typescript-eslint. If they are not, we need to turn the rule off in our
  // overrides for ts/tsx.
  // To read the details for any rule, see https://eslint.org/docs/rules/[RULE-KEY]
  rules: {
    ...coreRules,
    ...importRules,
    ...reactRules,
    ...jsxA11yRules,
    'tailwindcss/classnames-order': 'error',
    'tailwindcss/no-custom-classname': 'off',
  },
  settings: {
    ...importSettings,
    ...remixSettings,
    ...typescriptSettings,
  },
};

module.exports = config;
