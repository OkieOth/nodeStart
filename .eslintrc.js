module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "mocha": true
    },
    "extends": [
        "standard"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 13,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "quotes": ["error", "double", { "allowTemplateLiterals": true }],
        "indent": ["error", 4],
        "semi": ["error", "always"],
    }
};
