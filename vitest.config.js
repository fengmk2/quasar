// eslint-disable-next-line n/no-extraneous-import
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    projects: [
      './vite-plugin/testing/usage/vitest.config.js',
      './vite-plugin/testing/runtime/vitest.config.js',
      './ui/testing/vitest.config.js'
    ],
    // Coverage configuration for v4
    coverage: {
      // Include source files for coverage reporting
      include: [
        'ui/src/**/*.{js,ts,vue}',
        'vite-plugin/src/**/*.{js,ts}'
      ],
      // Exclude test files and other non-source files
      exclude: [
        '**/*.test.{js,ts}',
        '**/testing/**',
        '**/playground/**',
        '**/node_modules/**',
        '**/dist/**'
      ]
    }
  }
})