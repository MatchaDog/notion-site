module.exports = {
  trailingComma: 'all',
  tabWidth: 2,
  semi: true,
  quoteProps: 'as-needed',
  singleQuote: true,
  arrowParens: 'always',
  bracketSpacing: true,
  jsxSingleQuote: false,
  printWidth: 120,
  plugins: ['@trivago/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
  importOrder: ['^react', 'apps/', 'components/', 'hooks/', 'utils/', '<THIRD_PARTY_MODULES>', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderGroupNamespaceSpecifiers: true,
  overrides: [
    {
      files: '*.{ts,tsx}',
      options: {
        parser: 'typescript',
      },
    },
    {
      files: '*.js',
      options: {
        parser: 'babel',
      },
    },
    {
      files: '*.less',
      options: {
        parser: 'less',
      },
    },
    {
      files: '*.json',
      options: {
        parser: 'json',
      },
    },
  ],
};
