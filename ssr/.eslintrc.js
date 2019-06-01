// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint'
    },
    env: {
        browser: true,
    },
    extends: [
        // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
        // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
        'plugin:vue/essential',
        // https://github.com/standard/standard/blob/master/docs/RULES-en.md
        'standard'
    ],
    // required to lint *.vue files
    plugins: [
        'vue'
    ],
    // add your custom rules here
    rules: {
        'generator-star-spacing': 'off',
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        "prefer-promise-reject-errors": "off",
        "no-undef": "off",
        /* === */
        "eqeqeq": 0,
        /* 缩进 */
        "indent": 0,
        "implicit-arrow-linebreak": ["error", "beside"],
        /* fn ()====>fn() */
        "func-call-spacing": [0, "never"],
        "space-before-function-paren": [0, {
            "anonymous": "always",
            "named": "never",
            "asyncArrow": "always"
        }],
        "no-extend-native": 0
    }
}