module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },

  plugins: ['prettier', '@typescript-eslint'],

  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',

    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ]
};
