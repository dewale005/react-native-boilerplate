module.exports = {
  root: true,
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'airbnb',
    'airbnb-typescript',
    'standard-with-typescript',
    '@react-native-community',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  plugins: ['react', 'prettier', '@typescript-eslint'],
  ignorePatterns: ['!babel.config.js', '!metro.config.js', '!jest.config.js'],
  rules: {
    'react/jsx-uses-react': 1,
    'arrow-body-style': ['error'],
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'max-len': [1, { code: 2000, ignoreUrls: true }],
    'linebreak-style': 2,
    indent: 'error',
    'react/prefer-stateless-function': [2, { ignorePureComponents: false }],
    'react/require-default-props': [
      2,
      {
        forbidDefaultForRequired: false,
        classes: 'defaultProps',
        functions: 'defaultProps',
        ignoreFunctionalComponents: false,
      },
    ],
    'react/function-component-definition': [
      2,
      {
        namedComponents: ['function-declaration', 'arrow-function'],
        unnamedComponents: 'arrow-function',
      },
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        parser: 'flow',
        endOfLine: 'auto',
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        '': 'never',
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
};
