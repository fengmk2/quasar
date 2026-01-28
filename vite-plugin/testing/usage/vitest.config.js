import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: [
      './testing/usage/tests/*.test.js'
    ],
    coverage: {
      include: ['src/**/*.{js,ts}'],
      exclude: ['**/*.d.ts', '**/*.spec.*', '**/*.mock.*']
    }
  }
})
