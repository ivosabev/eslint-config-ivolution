// const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  '@stylistic/comma-dangle': ['warn', 'always-multiline'],
  '@stylistic/new-parens': WARN,
  '@stylistic/object-curly-spacing': ['error', 'never'],
  'array-callback-return': WARN,
  'getter-return': WARN,
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
  'no-array-constructor': WARN,
  'no-caller': ERROR,
  'no-case-declarations': 'off',
  'no-cond-assign': [WARN, 'except-parens'],
  'no-console': 'off',
  'no-const-assign': ERROR,
  'no-control-regex': WARN,
  'no-dupe-args': WARN,
  'no-dupe-class-members': WARN,
  'no-dupe-keys': WARN,
  'no-duplicate-case': WARN,
  'no-else-return': 'off',
  'no-empty': [WARN, {allowEmptyCatch: true}],
  'no-empty-character-class': WARN,
  'no-empty-pattern': WARN,
  'no-eval': ERROR,
  'no-ex-assign': WARN,
  'no-extend-native': WARN,
  'no-extra-bind': WARN,
  'no-extra-boolean-cast': WARN,
  'no-extra-label': WARN,
  'no-func-assign': ERROR,
  'no-global-assign': ERROR,
  'no-implied-eval': WARN,
  'no-invalid-regexp': WARN,
  'no-label-var': WARN,
  'no-labels': [WARN, {allowLoop: true, allowSwitch: false}],
  'no-lone-blocks': WARN,
  'no-loop-func': WARN,
  'no-mixed-operators': [
    WARN,
    {
      allowSamePrecedence: false,
      groups: [
        ['&', '|', '^', '~', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof'],
      ],
    },
  ],
  'no-nested-ternary': 'off',
  'no-new-func': WARN,
  'no-new-object': WARN,
  'no-octal': WARN,
  'no-redeclare': ERROR,
  'no-return-await': 'off',
  'no-script-url': WARN,
  'no-self-assign': WARN,
  'no-self-compare': WARN,
  'no-sequences': WARN,
  'no-shadow-restricted-names': WARN,
  'no-sparse-arrays': WARN,
  'no-template-curly-in-string': WARN,
  'no-this-before-super': WARN,
  'no-undef': ERROR,
  'no-underscore-dangle': 'off',
  'no-unreachable': WARN,
  'no-unsafe-negation': WARN,
  'no-unused-expressions': [
    WARN,
    {
      allowShortCircuit: true,
      allowTaggedTemplates: true,
      allowTernary: true,
    },
  ],
  'no-unused-labels': WARN,
  'no-unused-vars': [
    WARN,
    {
      args: 'none',
      ignoreRestSiblings: true,
    },
  ],
  'no-use-before-define': [WARN, {classes: false, functions: false, variables: false}],
  'no-useless-computed-key': WARN,
  'no-useless-concat': WARN,
  'no-useless-constructor': WARN,
  'no-useless-escape': WARN,
  'no-useless-rename': [
    WARN,
    {
      ignoreDestructuring: false,
      ignoreExport: false,
      ignoreImport: false,
    },
  ],
  'prettier/prettier': ['error'],
  quotes: ['error', 'single', {allowTemplateLiterals: true}],
  'require-yield': WARN,
  'sort-destructure-keys/sort-destructure-keys': [2, {caseSensitive: false}],
  'sort-imports': ['error', {ignoreDeclarationSort: true}],
  'sort-keys-fix/sort-keys-fix': 'warn',
  'use-isnan': WARN,
  'valid-typeof': WARN,
};
