import angulareslint from '@angular-eslint/eslint-plugin';
import angulareslintTemplate from '@angular-eslint/eslint-plugin-template';
import angularTemplateParser from '@angular-eslint/template-parser';
import js from '@eslint/js';
import storybook from 'eslint-plugin-storybook';
import unicornPlugin from 'eslint-plugin-unicorn';
import tseslint from 'typescript-eslint';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: [
          './tsconfig.json',
          './tsconfig.app.json',
          './tsconfig.spec.json',
        ],
        createDefaultProgram: true,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      '@angular-eslint': angulareslint,
      unicorn: unicornPlugin,
    },
    rules: {
      ...angulareslint.configs.recommended.rules,
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_|^error$',
          varsIgnorePattern: '^_|^[A-Z][A-Z0-9_]*$|^error$',
          caughtErrorsIgnorePattern: '^_|^error$',
        },
      ],
      '@typescript-eslint/no-non-null-assertion': 'warn',
      '@angular-eslint/use-lifecycle-interface': 'error',
      '@angular-eslint/prefer-on-push-component-change-detection': 'warn',
      '@angular-eslint/prefer-signals': [
        'warn',
        {
          preferReadonlySignalProperties: false,
        },
      ],
      '@angular-eslint/no-output-native': 'off',
      '@angular-eslint/no-output-rename': 'warn',
      '@typescript-eslint/naming-convention': [
        'warn',
        {
          selector: 'variable',
          format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'method',
          format: ['camelCase', 'PascalCase'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'function',
          format: ['camelCase', 'PascalCase'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'typeLike',
          format: ['PascalCase'],
          leadingUnderscore: 'allow',
        },
      ],
      '@angular-eslint/component-class-suffix': [
        'error',
        {
          suffixes: [
            'Badge',
            'Bar',
            'Body',
            'Button',
            'Card',
            'Component',
            'Footer',
            'Dialog',
            'Group',
            'Header',
            'Icon',
            'Input',
            'Item',
            'Label',
            'Layout',
            'List',
            'Main',
            'Menu',
            'Modal',
            'Page',
            'Panel',
            'Picker',
            'Popup',
            'Prompt',
            'Queue',
            'Renderer',
            'Row',
            'Search',
            'Selector',
            'Series',
            'Sidebar',
            'Snackbar',
            'Stack',
            'Table',
            'Tile',
            'Timeline',
            'Toolbar',
            'Tooltip',
            'Widget',
            'Wrapper',
            'Workbench',
            'Renderer',
          ],
        },
      ],
      '@angular-eslint/no-output-on-prefix': 'off',
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          style: 'camelCase',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/ban-ts-comment': 'off',
      'unicorn/explicit-length-check': 'warn',
      // Require Promise-returning functions to be declared async
      '@typescript-eslint/promise-function-async': 'error',
      // Require awaited Promises to be properly handled
      '@typescript-eslint/await-thenable': 'error',
      // Disallow floating/unhandled Promises - requires either void or await
      '@typescript-eslint/no-floating-promises': [
        'error',
        {
          ignoreVoid: true, // Allows using the `void` operator to explicitly ignore Promises
          ignoreIIFE: false, // Do not ignore immediately-invoked function expressions
        },
      ],
    },
  },
  {
    files: ['**/*.html'],
    languageOptions: {
      parser: angularTemplateParser,
    },
    plugins: {
      '@angular-eslint/template': angulareslintTemplate,
    },
    rules: {
      ...angulareslintTemplate.configs.recommended.rules,
      ...angulareslintTemplate.configs.accessibility.rules,
      '@angular-eslint/template/prefer-self-closing-tags': 'warn',
      '@typescript-eslint/ban-ts-comment': 'off',
    },
  },
  {
    files: ['**/*.stories.ts'],
    plugins: {
      storybook: storybook,
    },
    rules: {
      ...storybook.configs.recommended.rules,
      '@angular-eslint/prefer-signals': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/promise-function-async': 'off',
      '@typescript-eslint/await-thenable': 'off',
      '@typescript-eslint/no-floating-promises': [
        'off',
        {
          ignoreVoid: true, // Allows using the `void` operator to explicitly ignore Promises
          ignoreIIFE: false, // Do not ignore immediately-invoked function expressions
        },
      ],
    },
  },
  {
    ignores: [
      'projects/**/*',
      '**/node_modules/',
      '**/dist/',
      'src/features/ehr/roster/roster-billing-dialog/',
      'src/features/ehr/roster/signing-dialog/',
      'src/features/ehr/chart/widgets/shared/coding/',
    ],
  },
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
];
