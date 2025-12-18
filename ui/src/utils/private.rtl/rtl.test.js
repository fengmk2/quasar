import { describe, test, expect } from '@voidzero-dev/vite-plus/test'

import { rtlHasScrollBug } from './rtl.js'

describe('[rtl API]', () => {
  describe('[Variables]', () => {
    describe('[(variable)rtlHasScrollBug]', () => {
      test('is defined correctly', () => {
        expect(rtlHasScrollBug).toBeTypeOf('boolean')
      })
    })
  })
})
