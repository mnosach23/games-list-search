import { createConfigForNuxt } from '@nuxt/eslint-config/flat'
import tsEslintPlugin from '@typescript-eslint/eslint-plugin'
import unicorn from 'eslint-plugin-unicorn'
import globals from 'globals'

import vueParser from 'vue-eslint-parser'
import jsEslint from '@eslint/js'
import tsEslint from 'typescript-eslint'
import eslintPluginVue from 'eslint-plugin-vue'
import tailwind from 'eslint-plugin-tailwindcss'

export default createConfigForNuxt(
  { features: { stylistic: true } },
  jsEslint.configs.recommended,
  ...eslintPluginVue.configs['flat/recommended'],
  ...tailwind.configs['flat/recommended'],
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx', '**/*.vue'],
    plugins: {
      '@typescript-eslint': tsEslintPlugin,
      unicorn,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        defineNuxtConfig: 'readonly',
        defineNuxtPlugin: 'readonly',
        defineNuxtMiddleware: 'readonly',
        useNuxtApp: 'readonly',
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: vueParser,
      parserOptions: {
        parser: tsEslint.parser,
      },
    },
  },
)
