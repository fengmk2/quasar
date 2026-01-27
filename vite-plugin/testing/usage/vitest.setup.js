// Add afterEach hook for Vitest v4 mock cleanup
import { afterEach } from 'vitest'
import { vi } from 'vitest'

afterEach(() => {
  vi.restoreAllMocks()
})