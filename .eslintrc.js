/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  "env": {
    "node": true
  },
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    "prettier/prettier": ["off"],
    quotes: ['off'],
    semi: ['off'],
    indent: [
      'error',
      2,
    ],
    'no-unused-vars': 1,
    'max-len': ['warn', { code: 120, ignoreTemplateLiterals: true }],
  },
}
