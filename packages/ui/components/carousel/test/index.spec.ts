import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VerCarousel from '../src/index.vue'

describe('VerCarousel', () => {
  it('测试是否有默认样式', () => {
    const wrapper = mount(VerCarousel)
    expect(wrapper.classes()).toContain('carousel')
  })
})
