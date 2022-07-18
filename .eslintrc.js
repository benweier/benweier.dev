module.exports = {
  plugins: ['@typescript-eslint', 'prettier', 'import'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@next/next/recommended',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': 'typescript',
  },
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'never',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/prefer-default-export': 'off',
    'import/namespace': ['error', { allowComputed: true }],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
      },
    ],
  },
  overrides: [
    {
      files: [
        '.eslintrc.js',
        '.prettierrc.js',
        'cypress.config.js',
        'next.config.js',
        'postcss.config.js',
        'tailwind.config.js',
      ],
      plugins: ['node'],
      extends: ['plugin:node/recommended'],
      env: {
        node: true,
      },
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: ['src/**/*'],
      plugins: ['react'],
      extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended'],
      env: {
        browser: true,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      settings: {
        react: {
          version: 'detect',
        },
      },
      globals: { React: 'writable' },
      rules: {
        'jsx-a11y/anchor-is-valid': 'off',
        'react/prop-types': 'off',
        'react/require-default-props': 'off',
      },
    },
    {
      files: ['cypress/**/*.cy.{js,jsx,ts,tsx}'],
      plugins: ['testing-library', 'cypress'],
      extends: ['plugin:cypress/recommended'],
      env: {
        'cypress/globals': true,
      },
    },
    // {
    //   files: ['src/**/*.spec.tsx', 'src/**/*.test.tsx', 'test/**/*'],
    //   plugins: ['jest', 'testing-library', 'jest-dom'],
    //   extends: [
    //     'plugin:jest/recommended',
    //     'plugin:jest-dom/recommended',
    //     'plugin:testing-library/dom',
    //     'plugin:testing-library/react',
    //   ],
    //   env: {
    //     'jest/globals': true,
    //   },
    //   settings: {
    //     jest: {
    //       version: 'detect',
    //     },
    //   },
    //   rules: {
    //     'testing-library/prefer-screen-queries': 'off',
    //   },
    // },
  ],
}
