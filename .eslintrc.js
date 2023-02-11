module.exports = {
  root: true,
  extends: [],
  rules: {
    // 'semi': [2, 'always'],
    'semi': [2, 'never'],
    'import/extensions': [2, { "ignore": ["@/*", "@@/*"] }],
    "import/no-unresolved": [2, { "ignore": ["@/*", "@@/*"] }],
  },
};
