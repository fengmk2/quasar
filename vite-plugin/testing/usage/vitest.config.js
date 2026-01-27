import { defineConfig } from 'vitest/config'
import { configDefaults } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    include: [
      './testing/usage/tests/*.test.js'
    ],
    exclude: [
      ...configDefaults.exclude,
      '**/dist/**',
      '**/cypress/**',
      '**/.{idea,git,cache,output,temp}/**',
      '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build,eslint,prettier}.config.*'
    ]
  }
})
