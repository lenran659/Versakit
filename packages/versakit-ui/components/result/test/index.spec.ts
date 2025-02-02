import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VerResult from '../src/index.vue'

describe('VerResult', () => {
  it('测试是否有默认样式', () => {
    const wrapper = mount(VerResult)
    expect(wrapper.classes()).toContain('ver-result')
  })
})
