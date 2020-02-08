module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    "eslint:recommended",
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    "plugin:vue/recommended",
    "plugin:prettier/recommended"
],
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // "editor.formatOnSave": 'off',
    // "editor.codeActionsOnSave": {
    //   "source.fixAll.eslint": true
    // },
    "semi": [ 2, "never" ],
    "no-console": "off",
    "vue/max-attributes-per-line": "off",
    "prettier/prettier": [ "error", {
        "printWidth": 120,
        "semi": false,
        "tabWidth": 4,
        "useTabs": false,
        "singleQuote": true,
        "trailingComma": "es5",
        "arrowParens": "always",
    } ]
  }
}
