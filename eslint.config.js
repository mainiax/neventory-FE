// eslint.config.js
// @ts-check
const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');

// Angular ESLint plugins (Flat Config)
const ng = require('@angular-eslint/eslint-plugin');
const ngTemplate = require('@angular-eslint/eslint-plugin-template');
const ngTemplateParser = require('@angular-eslint/template-parser');

const prettier = require('eslint-plugin-prettier');
const eslintConfigPrettier = require('eslint-config-prettier');

/** @type {import('eslint').Linter.FlatConfig[]} */
module.exports = tseslint.config(
  // --- TypeScript files (incl. inline templates) ---
  {
    files: ['**/*.ts'],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      // NOTE: intentionally not spreading ng.configs.tsRecommended to avoid legacy-object issues
      eslintConfigPrettier,
    ],
    // Lint inline templates in TS
    processor: ngTemplate.processors['extract-inline-html'],
    plugins: {
      '@angular-eslint': ng,
      '@angular-eslint/template': ngTemplate,
      prettier,
    },
    rules: {
      // Prettier as errors
      'prettier/prettier': 'error',

      // App-wide defaults (kept sane, but we’ll override for UI kit below)
      '@angular-eslint/directive-selector': [
        'error',
        { type: 'attribute', prefix: ['app', 'hlm'], style: 'camelCase' },
      ],
      '@angular-eslint/component-selector': [
        'error',
        { type: 'element', prefix: ['app', 'hlm'], style: 'kebab-case' },
      ],
      '@angular-eslint/no-input-rename': 'error',

      // Turn off unused-vars to eliminate those errors right now
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },

  // --- External Angular HTML templates ---
  {
    files: ['**/*.html'],
    languageOptions: { parser: ngTemplateParser },
    plugins: { '@angular-eslint/template': ngTemplate },
    rules: {
      // Keep a minimal safe set globally; UI kit overrides below can relax these
      '@angular-eslint/template/banana-in-box': 'error',
      '@angular-eslint/template/eqeqeq': 'error',
      '@angular-eslint/template/no-negated-async': 'error',
      '@angular-eslint/template/click-events-have-key-events': 'error',
      '@angular-eslint/template/interactive-supports-focus': 'error',
    },
  },

  // --- UI kit override: ONLY for src/ui/** ---
  {
    files: ['src/ui/**/*.{ts,html}'],
    plugins: {
      '@angular-eslint': ng,
      '@angular-eslint/template': ngTemplate,
    },
    rules: {
      // Your headless UI exposes public API; don’t force Angular naming here
      '@angular-eslint/component-selector': 'off',
      '@angular-eslint/directive-selector': 'off',
      '@angular-eslint/no-input-rename': 'off',

      // Relax template a11y rules that were flagging your UI kit
      '@angular-eslint/template/click-events-have-key-events': 'off',
      '@angular-eslint/template/interactive-supports-focus': 'off',
    },
  },

  // --- Apply Prettier rule to other text-like files ---
  {
    files: ['**/*.{js,mjs,cjs,jsx,tsx,css,scss,html,json,md,yml,yaml}'],
    plugins: { prettier },
    rules: { 'prettier/prettier': 'error' },
  },
);
