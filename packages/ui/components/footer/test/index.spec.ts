import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VerFooter from '../src/index.vue'

describe('VerFooter', () => {
  it('测试是否有默认样式', () => {
    const wrapper = mount(VerFooter)
    expect(wrapper.classes()).toContain('ver-footer')
  })
})