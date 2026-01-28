import { config } from '@vue/test-utils'
import { vi } from 'vitest'

import 'quasar/src/css/index.sass'
import quasarVuePlugin from 'quasar/src/vue-plugin.js'

config.global.plugins.push(quasarVuePlugin)

// Restore all mocks after each test to handle vitest v4 behavior changes
afterEach(() => {
  vi.restoreAllMocks()
})
