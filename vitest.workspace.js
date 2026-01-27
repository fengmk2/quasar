// eslint-disable-next-line n/no-extraneous-import
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    projects: [
      './vite-plugin/testing/usage/vitest.config.js',
      './vite-plugin/testing/runtime/vitest.config.js',
      './ui/testing/vitest.config.js'
    ]
  }
})