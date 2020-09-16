module.exports = {
  'parser': 'vue-eslint-parser',
  'env': {
    browser: true,
    es6: true,
    node: true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:vue/strongly-recommended',
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  'globals': {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  'parserOptions': {
    ecmaVersion: 2018,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  'plugins': [
    'vue', '@typescript-eslint',
  ],
  'rules': {
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: [
          'interface', 'typeAlias',
        ],
        format: [
          'PascalCase', 
        ],
        custom: {
          regex: '^I[A-Z]',
          match: true,
        },
      },
    ],
    '@typescript-eslint/no-unused-vars': 'error',
    'no-prototype-builtins': 0,
    'vue/html-self-closing': 0,
    'vue/name-property-casing': [
      'error', 'kebab-case',
    ],
    'indent': [
      'error',
      2,
      {
        SwitchCase: 1,
      },
    ],
    'linebreak-style': [
      'error', 'unix',
    ],
    'quotes': [
      'error', 'single',
    ],
    'semi': [
      'error', 'always',
    ],
    'comma-dangle': [
      'error', 'always-multiline',
    ],
    'block-scoped-var': [
      'error',
    ],
    'curly': [
      'error', 'all',
    ],
    'dot-notation': [
      'error',
    ],
    'eqeqeq': [
      'error', 
    ],
    'no-caller': [
      'error',
    ],
    'no-eq-null': [
      'error',
    ],
    'no-floating-decimal': [
      'error',
    ],
    'no-implicit-coercion': [
      'error',
    ],
    'no-implicit-globals': [
      'error',
    ],
    'no-invalid-this': 0,
    'no-lone-blocks': [
      'error',
    ],
    'no-loop-func': [
      'error',
    ],
    'no-multi-spaces': [
      'error',
    ],
    'no-return-assign': [
      'error',
    ],
    'no-return-await': [
      'error',
    ],
    'no-self-compare': [
      'error',
    ],
    'no-useless-concat': [
      'error',
    ],
    'no-useless-return': [
      'error',
    ],
    'wrap-iife': [
      'error',
    ],
    'yoda': [
      'error', 'never',
    ],
    'no-undef-init': [
      'error',
    ],
    'no-use-before-define': [
      'error',
      {
        variables: true,
        functions: false,
        classes: true,
      },
    ],
    'array-bracket-spacing': [
      'error', 'always',
    ],
    'comma-spacing': [
      'error',
    ],
    'computed-property-spacing': [
      'error', 'never',
    ],
    'consistent-this': [
      'error', '_this',
    ],
    'eol-last': [
      'error', 'always',
    ],
    'func-call-spacing': [
      'error', 'never',
    ],
    'func-style': [
      'error',
      'declaration',
      {
        allowArrowFunctions: true,
      },
    ],
    'function-paren-newline': [
      'error',
    ],
    'implicit-arrow-linebreak': [
      'error',
    ],
    'jsx-quotes': [
      'error', 'prefer-double',
    ],
    'key-spacing': [
      'error',
    ],
    'keyword-spacing': [
      'error',
    ],
    'multiline-comment-style': 0,
    'new-cap': 0,
    'new-parens': [
      'error', 'always',
    ],
    'no-lonely-if': [
      0,
    ],
    'no-mixed-operators': [
      'error',
    ],
    'no-multi-assign': [
      0,
    ],
    'no-multiple-empty-lines': [
      'error',
    ],
    'no-unneeded-ternary': [
      'error',
    ],
    'no-whitespace-before-property': [
      'error',
    ],
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: 'always',
        ObjectPattern: {
          multiline: true,
        },
        ImportDeclaration: {
          multiline: true,
        },
        ExportDeclaration: {
          multiline: true,
          minProperties: 3,
        },
      },
    ],
    'object-curly-spacing': [
      'error', 'always',
    ],
    'newline-per-chained-call': [
      'error',
      {
        ignoreChainWithDepth: 2,
      },
    ],
    'object-property-newline': [
      'error',
    ],
    'one-var': [
      'error', 'never',
    ],
    'one-var-declaration-per-line': [
      'error', 'always',
    ],
    'prefer-object-spread': [
      'error',
    ],
    'semi-spacing': [
      'error',
    ],
    'semi-style': [
      'error', 'last',
    ],
    'space-before-blocks': [
      'error', 'never',
    ],
    'space-in-parens': [
      'error', 'never',
    ],
    'space-infix-ops': [
      'error',
    ],
    'space-unary-ops': [
      'error',
    ],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'quote-props': [
      'error',
      'consistent-as-needed',
      {
        keywords: true,
        numbers: true,
      },
    ],
    'arrow-body-style': [
      'error', 'as-needed',
    ],
    'arrow-parens': [
      'error', 'as-needed',
    ],
    'arrow-spacing': [
      'error',
    ],
    'no-confusing-arrow': [
      'error',
    ],
    'no-duplicate-imports': [
      'error',
    ],
    'no-useless-computed-key': [
      'error',
    ],
    'no-useless-rename': [
      'error',
    ],
    'no-var': [
      'error',
    ],
    'object-shorthand': [
      'error',
    ],
    'prefer-arrow-callback': [
      'error',
    ],
    'prefer-const': [
      'error',
    ],
    'prefer-destructuring': 1,
    'prefer-rest-params': [
      'error',
    ],
    'prefer-template': [
      'error',
    ],
    'prefer-spread': [
      'error',
    ],
    'rest-spread-spacing': [
      'error',
    ],
    // warn
    'no-else-return': [
      'warn',
      {
        allowElseIf: false,
      },
    ],
    'no-extra-bind': [
      'warn',
    ],
    'no-useless-call': [
      'warn',
    ],
    'require-await': [
      'warn',
    ],
    'no-unused-vars': 0,
    'no-param-reassign': 0,
    'array-bracket-newline': [
      'warn', 'always',
    ],
    'line-comment-position': 0,
    'lines-around-comment': 0,
    'lines-between-class-members': [
      'warn', 'never',
    ],
    'operator-assignment': [
      'warn', 'always',
    ],
    'operator-linebreak': [
      'warn', 'after',
    ],
    'padded-blocks': [
      'warn', 'never',
    ],
    'spaced-comment': [
      'warn',
    ],
    'switch-colon-spacing': [
      'warn',
    ],
    'template-curly-spacing': [
      'error', 'never',
    ],
  },
};
