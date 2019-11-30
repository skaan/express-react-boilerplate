module.exports = {
  parser: 'babel-eslint',
  extends: ['eslint:recommended', 'airbnb', 'plugin:react/recommended'],
  env: {
    browser: true,
    node: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'arrow-body-style': 0,
    'arrow-parens': [0, 'as-needed'],
    'array-bracket-spacing': [1, 'always'],
    'comma-dangle': [2, 'never'],
    'no-empty-function': 0,
    'no-debugger': 1,
    'no-multiple-empty-lines': [
      1,
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 0
      }
    ],
    'no-unused-vars': 1
  }
};
