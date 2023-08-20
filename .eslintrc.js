module.exports = {
  extends: ['next', 'next/core-web-vitals', 'prettier'],
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
  },
  rules: {
    // next
    '@next/next/no-html-link-for-pages': 'off',
    // react
    'react/jsx-indent': ['off'],
    'react/jsx-indent-props': ['off'],
    'react/jsx-no-bind': ['off'],
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'react/jsx-newline': ['off'],
    'react/no-multi-comp': ['off'],
    'react/jsx-one-expression-per-line': ['off'],
    'react/jsx-no-literals': ['off'],
    'react/jsx-max-depth': ['off'],
    'react/jsx-max-props-per-line': ['off'],
    'react/require-default-props': ['off'],
    'react/function-component-definition': ['off'],
    'react/forbid-component-props': ['off'],
    // react hook
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    // default
    'no-console': ['warn', { allow: ['warn', 'error', 'debug'] }],
    semi: ['warn', 'always'],
    'prefer-spread': ['warn'],
    'no-unused-vars': ['off'],
    'no-extra-semi': ['warn'],
    quotes: ['warn', 'single'],
    'linebreak-style': ['warn', 'unix'],
  },
  ignorePatterns: ['.eslintrc.js', '.prettierrc.js', 'tailwind.config.js', 'postcss.config.js'],
};
