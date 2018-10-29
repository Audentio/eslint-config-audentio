module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "plugins": [
        "jest",
    ],
    "env": {
        "node": true,
        "jest/globals": true,
    },
    "globals": {
        "window": true,
        "document": true,
        "__DEV__": true,
        "__BROWSER__": true,
    },
    "rules": {
        "no-confusing-arrow": ["off"],
        "default-case": ["off"],
        "no-console": ["off"],
        "jsx-a11y/no-noninteractive-tabindex": ["off"],
        "import/prefer-default-export": ["off"],
        "global-require": ["off"],
        "react/prop-types": ["off"],
        "react/no-array-index-key": ["off"],
        "no-restricted-globals": ["off"],
        "react/jsx-filename-extension": [
            1,
            {
                "extensions": [
                    ".jsx",
                    ".tsx"
                ]
            }
        ],
        "no-trailing-spaces": "off",
        "object-curly-newline": "off",
        "prefer-destructuring": "off",
        "class-methods-use-this": "off",
        "comma-dangle": ["error", {
            "arrays": "always-multiline",
            "objects": "always-multiline",
            "functions": "ignore",
        }],
        "function-paren-newline": "off",
        "import/no-unresolved": "off",
        "no-underscore-dangle": "off",
        "camelcase": "off",
        "max-len": "off",
        "no-restricted-syntax": [
            2,
            "DebuggerStatement",
            "LabeledStatement",
            "WithStatement",
        ],
        "indent": ["error", 4],
        "import/extensions": ["off"],
        "import/no-extraneous-dependencies": ["off"],
        "prefer-template": ["off"],
        "no-prototype-builtins": ["off"],
        "react/sort-comp": [1, {
            order: [
                "type-annotations",
                "static-methods",
                "lifecycle",
                "everything-else",
                "render"
            ],
            groups: {
                lifecycle: [
                    "displayName",
                    "propTypes",
                    "contextTypes",
                    "childContextTypes",
                    "mixins",
                    "statics",
                    "defaultProps",
                    "constructor",
                    "getDefaultProps",
                    "getInitialState",
                    "state",
                    "getChildContext",
                    "componentWillMount",
                    "componentDidMount",
                    "componentWillReceiveProps",
                    "shouldComponentUpdate",
                    "componentWillUpdate",
                    "componentDidUpdate",
                    "componentWillUnmount"
                ],
            },
        }],
        "react/no-unescaped-entities": ["off"],
        "react/prop-types": "off",
        "react/forbid-prop-types": ["off"],
        "react/jsx-indent": ["error", 4],
        "react/jsx-pascal-case": "off",
        "react/require-default-props": "off",
        "react/jsx-indent-props": ["error", 4],
        "react/no-unused-prop-types": ["off"],
        "react/prefer-stateless-function": "off",
        "jsx-a11y/no-static-element-interactions": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        "guard-for-in": "off",
        "no-plusplus": ["off"],
        "arrow-parens": ["off"],
        "comma-dangle": ["error", "always-multiline"]
    },
    "overrides": [
        {
            "parser": "typescript-eslint-parser",
            "files": ["**/*.ts", "**/*.tsx"],
            "rules": {
                "no-unused-vars": ["off"],
                "no-undef": ["off"]
            }
        },
        {
            "files": ["cypress/**/*.js"],
            "rules": {
                "no-param-reassign": ["off"]
            },
            "env": {
                "browser": true,
                "mocha": true
            },
            "globals": {
                "cy": false,
                "Cypress": false,
                "describe": false,
                "context": false,
                "beforeEach": false,
                "afterEach": false,
                "it": false,
                "assert": false,
                "expect": false
            }
        }
    ]
}
