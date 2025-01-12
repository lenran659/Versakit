import { DefaultTheme } from 'vitepress'

export const getNav = (): DefaultTheme.NavItem[] => {
  return [
    { text: '设计', link: '/design/colors/' },
    { text: '指南', link: '/guide/installation/' },
    { text: '组件', link: '/components/layout/' },
    { text: '团队', link: '/team/' },
  ]
}
