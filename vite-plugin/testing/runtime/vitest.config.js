import { fileURLToPath } from 'node:url'
import { join } from 'node:path'

import { defineConfig } from 'vite'
import { configDefaults } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

import { quasar, transformAssetUrls } from '../../src/index.js'

const playgroundFolder = fileURLToPath(new URL('../../playground', import.meta.url))
const resolve = _path => join(playgroundFolder, _path)

export default defineConfig(() => {
  return {
    plugins: [
      vue({
        template: { transformAssetUrls }
      }),

      quasar({
        devTreeshaking: true,
        sassVariables: resolve('src/quasar-variables.sass'),
        autoImportComponentCase: 'combined'
      })
    ],

    resolve: {
      alias: {
        assets: resolve('src/assets'),
        playground: resolve('src/components')
      }
    },

    test: {
      globals: true,
      environment: 'jsdom',
      environmentOptions: {
        pretendToBeVisual: true
      },
      exclude: [
        ...configDefaults.exclude,
        '**/dist/**',
        '**/cypress/**',
        '**/.{idea,git,cache,output,temp}/**',
        '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build,eslint,prettier}.config.*'
      ],
      // browser: {
      //   enabled: true,
      //   headless: true,
      //   name: 'chrome'
      // },
      css: {
        include: [ /.+/ ]
      },
      include: [
        './testing/runtime/tests/*.test.{js,ts}'
      ],
      setupFiles: [
        './testing/runtime/vitest.setup.js'
      ]
    }
  }
})
