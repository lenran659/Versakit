import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VerGradientText from '../src/index.vue'

describe('VerGradientText', () => {
  it('测试是否有默认样式', () => {
    const wrapper = mount(VerGradientText)
    expect(wrapper.classes()).toContain('ver-gradient-text')
  })
})
