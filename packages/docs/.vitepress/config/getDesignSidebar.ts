import { DefaultTheme } from 'vitepress'

export const getDesignSidebar = (): DefaultTheme.Sidebar => {
  return [
    {
      text: '样式',
      items: [{ text: '颜色', link: '/design/colors/' }],
    },
  ]
}
