import { describe, it, expect } from 'vitest'
import { VerNotification } from '../versakit-ui/index'

describe('VerNotification', () => {
  // 应该能正确创建 vnode 并渲染组件
  it('应该能正确创建 vnode 并渲染组件', () => {
    VerNotification({
      title: 'success',
      content: '这是一个成功的消息',
    })

    const messageElement = document.body.querySelector('.ver-notification')
    expect(messageElement).not.toBe(null)
  })
})
