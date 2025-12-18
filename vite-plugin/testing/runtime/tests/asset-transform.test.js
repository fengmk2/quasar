import { describe, expect, test } from '@voidzero-dev/vite-plus/test'
import { mount } from '@vue/test-utils'

const logoAsset = '/playground/src/assets/logo.png'

describe('Asset Transform', () => {
  test.each([
    [ 'NativeImage' ],
    [ 'ImgWithSrc' ],
    [ 'ImgWithPlaceholderSrc' ],
    [ 'ChatMessageWithAvatar' ]
  ])('transforms %s', async (filename) => {
    const { default: TestComponent } = await import(`playground/asset-transform/${ filename }.vue`)
    const wrapper = mount(TestComponent)

    expect(
      wrapper.get('img').attributes('src')
    ).toBe(logoAsset)
  })
})
