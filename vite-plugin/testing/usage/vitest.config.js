import { defineConfig } from '@voidzero-dev/vite-plus'

export default defineConfig({
  test: {
    include: [
      './testing/usage/tests/*.test.js'
    ]
  }
})
