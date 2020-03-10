module.exports = {
    // root: true,
    env: {
        es6: true,
        node: true,
        jest: true
    },
    extends: [
        'plugin:import/recommended',
        'airbnb-base', // Airbnb's base JS .eslintrc (without React plugins)
        'plugin:prettier/recommended' // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    overrides: [
        {
          files: ['*.test.js', 'enzyme.js'],
          rules: {
            'import/no-extraneous-dependencies': 0
          }
        }
      ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parser: 'babel-eslint',
    parserOptions: {
        allowImportExportEverywhere: true, // babel-eslint config
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': [
            'error',
            {
                printWidth: 120,
                singleQuote: true,
                endOfLine: 'auto'
            }
        ]
    }
}
