module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  plugins: ['import', 'simple-import-sort'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals',
    'prettier',
  ],
  rules: {
    // basic
    'no-console': ['error', { allow: ['warn', 'info', 'error'] }],
    'prefer-const': 'error',
    'func-style': ['error', 'expression'],
    // sort
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
  },
};
