import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VerAside from '../src/index.vue'

describe('VerAside', () => {
  it('测试是否有默认样式', () => {
    const wrapper = mount(VerAside)
    expect(wrapper.classes()).toContain('ver-aside')
  })
})
