/*
 * @Author: 2171204141@qq.com
 * @Date: 2024-12-08 23:10:39
 * @LastEditors: Dream
 * @Description: Button 单元测试
 */
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VerButton from '../src/index.vue'

describe('button', () => {
  it('测试按钮默认状态下的类名和禁用属性', () => {
    const wrapper = mount(VerButton)
    expect(wrapper.classes()).toContain('ver-btn')
    expect(wrapper.classes()).not.toContain('ver-btn-')
    expect(wrapper.classes()).not.toContain('is-plain')
    expect(wrapper.classes()).not.toContain('is-round')
    expect(wrapper.attributes('disabled')).toBeUndefined()
  })

  it('测试按钮设置 type 属性后类名的变化', () => {
    const typeValue = 'success'
    const wrapper = mount(VerButton, {
      props: {
        type: typeValue,
      },
    })
    expect(wrapper.classes()).toContain(`ver-btn-${typeValue}`)
  })

  it('测试按钮设置 plain 属性后类名的变化', () => {
    const wrapper = mount(VerButton, {
      props: {
        plain: true,
      },
    })
    expect(wrapper.classes()).toContain('is-plain')
  })

  it('测试按钮设置 round 属性后类名的变化', () => {
    const wrapper = mount(VerButton, {
      props: {
        round: true,
      },
    })
    expect(wrapper.classes()).toContain('is-round')
  })

  it('测试按钮设置禁用属性后的变化', () => {
    const wrapper = mount(VerButton, {
      props: {
        disabled: true,
      },
    })
    expect(wrapper.classes()).toContain('is-disabled')
    expect(wrapper.props('disabled')).toBe(true)
  })
})
