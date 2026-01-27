import { config } from '@vue/test-utils'

import 'quasar/src/css/index.sass'
import quasarVuePlugin from 'quasar/src/vue-plugin.js'

config.global.plugins.push(quasarVuePlugin)

// Add afterEach hook for Vitest v4 mock cleanup
import { afterEach } from 'vitest'
import { vi } from 'vitest'

afterEach(() => {
  vi.restoreAllMocks()
})
