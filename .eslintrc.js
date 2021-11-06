/*
 * Copyright (©) 06.11.2021, 16:55. Kolyada Nikita Vladimirovich (nikita.nk16@yandex.ru)
 */

module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        "plugin:vue/essential",
        "eslint:recommended",
        "@vue/prettier",
    ],
    parserOptions: {
        ecmaVersion: 2018
    },
    "plugins": [  "prettier"],
    "rules": {
        "arrow-spacing": [
            "error",
            {
                "before": true,
                "after": true
            }
        ],
        "comma-spacing":"error",
        "eol-last": "error",
        "key-spacing": [
            "error",
            {
                "beforeColon": false,
                "afterColon": true
            }
        ],
        "no-multiple-empty-lines" : [
            "error",
            {"max" : 2}
        ],
        "no-trailing-spaces": "error",
        "object-curly-spacing": [
            "error",
            "always"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ],
        "space-before-blocks": 2,
        "space-before-function-paren": [
            "error",
            {
                "anonymous": "never",
                "named": "never",
                "asyncArrow": "always"
            }
        ],
        "space-infix-ops":"error",
        "spaced-comment": [
            "warn",
            "always"
        ],
        "no-console": "off",

        "prettier/prettier": [
            "warn",
            {
                "code": 120,
                "tabWidth": 4,
                "printWidth": 120,
                "singleQuote": true,
                "semi": false
            }
        ]
    }
};
