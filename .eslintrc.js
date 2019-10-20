module.exports = {
  root: true,
  env: { node: true },
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  parserOptions: { parser: 'babel-eslint' },
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/max-attributes-per-line': [2, { singleline: 10, multiline: { max: 1, allowFirstLine: true } }],
    semi: [2, 'never']
  }
}