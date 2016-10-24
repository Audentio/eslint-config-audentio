module.exports = {
    'extends': 'airbnb',
    'parser': 'babel-eslint',
    'ecmaFeatures': {
        'classes': true,
    },
    'env': {
        'browser': true,
        'node': true,
    },
    'rules': {
        'arrow-parens': 'off',
        'max-len': ['error', 400],
        'camelcase': ['off', {properties: 'never'}],
        'no-underscore-dangle': ['off', { 'allow': [] }],
        'no-restricted-syntax': [
            2,
            'DebuggerStatement',
            'LabeledStatement',
            'WithStatement',
        ],
        'import/extensions': ['off'],
        'import/no-extraneous-dependencies': ['off'],
        'import/no-unresolved': ['off'],
        'prefer-template': ['off'],
        'indent': ['error', 4],
        'no-prototype-builtins': ['off'],

        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/prefer-stateless-function': 'off',

        'no-param-reassign': 'off',
        'func-names': 'off',
        'no-trailing-spaces': 'off',
        'react/jsx-pascal-case': 'off',
        'newline-per-chained-call': 'off',
        'react/prop-types': 'off',
        'guard-for-in': 'off',
    }
};
