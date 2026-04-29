import js from '@eslint/js'
import globals from 'globals'
import { defineConfig } from 'eslint/config'

export default defineConfig({
  files: ['**/*.{js,jsx}'],
  ignores: ['dist', 'node_modules'],
  extends: [js.configs.recommended],
  languageOptions: {
    globals: globals.browser,
    parserOptions: { ecmaFeatures: { jsx: true } },
  },
  rules: {
    'no-unused-vars': ['warn', { varsIgnorePattern: '^_' }],
    'no-empty-pattern': 'warn',
  },
})
