import { describe, test, expect } from '@voidzero-dev/vite-plus/test'

import uid from './uid.js'

describe('[uid API]', () => {
  describe('[Functions]', () => {
    describe('[(function)default]', () => {
      test('has correct return value', () => {
        const result = uid()
        expect(result).toBeTypeOf('string')
        expect(result).toHaveLength(36)

        expect(uid()).not.toBe(result)
      })
    })
  })
})
