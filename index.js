module.exports = {
    'extends': 'airbnb',
    'parser': 'babel-eslint',
    'ecmaFeatures': {
        'classes': true,
    },
    'env': {
        'node': true,
        'browser': true,
    },
    'rules': {
        'import/no-unresolved': ['off'],
        'no-underscore-dangle': ['off'],
        'camelcase': ['off'],
        'max-len': 'off',
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

        'react/sort-comp': {
            order: [
                'static-methods',
                'lifecycle',
                'everything-else',
                'render'
            ],
            groups: {
                lifecycle: [
                    'displayName',
                    'propTypes',
                    'contextTypes',
                    'childContextTypes',
                    'mixins',
                    'statics',
                    'defaultProps',
                    'constructor',
                    'getDefaultProps',
                    'getInitialState',
                    'state',
                    'getChildContext',
                    'componentWillMount',
                    'componentDidMount',
                    'componentWillReceiveProps',
                    'shouldComponentUpdate',
                    'componentWillUpdate',
                    'componentDidUpdate',
                    'componentWillUnmount'
                ],
            },
        },
        'react/no-unescaped-entities': ['off'],
        'react/prop-types': 'off',
        'react/forbid-prop-types': ['off'],
        'react/jsx-indent': ['error', 4],
        'react/require-default-props': 'off',
        'react/jsx-indent-props': ['error', 4],
        'react/no-unused-prop-types': ['off'],
        'react/prefer-stateless-function': 'off',
        'jsx-a11y/no-static-element-interactions': ['off'],

        'guard-for-in': 'off',
        'no-plusplus': ['off'],
        'arrow-parens': ['off'],
    }
}
