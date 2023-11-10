module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    withDefaults: 'readonly'
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['vue', 'simple-import-sort'],
  extends: ['plugin:vue/vue3-recommended', 'airbnb-base', 'plugin:prettier/recommended', '@vue/eslint-config-prettier'],
  rules: {
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Node.js builtins prefixed with `node:`.
          ['^node:'],

          // Packages. `vue` related packages come first.
          ['^vue', '^pinia'],

          // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
          ['^@?\\w'],

          // Absolute imports and other imports such as Vue-style `@/foo`.
          // Anything not matched in another group.
          ['^'],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Relative imports.
          // Anything that starts with a dot.
          ['^\\.'],
          // Side effect imports.
          ['^\\u0000']
        ]
      }
    ],
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'prettier/prettier': 'off',
    'no-unused-vars': 'off',
    'no-underscore-dangle': 'off',
    'global-require': 'off',
    camelcase: 'off',
    'no-lonely-if': 'off',
    'consistent-return': 'off',
    'no-useless-return': 'off',
    'no-restricted-syntax': 'off',
    'no-shadow': 0,
    'no-console': 'off',
    'no-use-before-define': 'off',
    'vue/multi-word-component-names': 0,
    'max-classes-per-file': 0,
    'class-methods-use-this': 0,
    'no-param-reassign': 'off'
  }
}
