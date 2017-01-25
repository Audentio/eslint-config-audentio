module.exports = {
    'extends': 'airbnb',
    'parser': 'babel-eslint',
    'ecmaFeatures': {
        'classes': true,
    },
    'env': {
        'node': true,
    },
    'rules': {
        'import/no-unresolved': ['off'],
        'no-underscore-dangle': ['off'],
        'camelcase': ["off"],
        'max-len': ["error", { "code": 150 ,"ignoreComments": true }],
        'no-restricted-syntax': [
            2,
            'DebuggerStatement',
            'LabeledStatement',
            'WithStatement',
        ],
        'no-trailing-spaces': ['off'],
        'indent': ['error', 4],
        'import/extensions': ['off'],
        'import/no-extraneous-dependencies': ['off'],
        'prefer-template': ['off'],
        'no-prototype-builtins': ['off'],

        'react/no-unescaped-entities': ['off'],
        'react/prop-types': 'off',
        'react/forbid-prop-types': ['off'],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/no-unused-prop-types': ['off'],
        'react/prefer-stateless-function': 'off',
        'react/jsx-pascal-case': 'off',
        'jsx-a11y/no-static-element-interactions': ['off'],

        'newline-per-chained-call': 'off',
        'guard-for-in': 'off',
        'no-plusplus': ['off'],
        'arrow-parens': ['off'],
    }
}
