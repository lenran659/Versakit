import Theme from 'vitepress/theme'
import Tool from '../components/tool.vue'
import MyLayout from './Layout.vue'
import './index.scss' // 引入样式

import Versakit from '@versakit/ui' // 引入组件库
import { Element, Layui } from '@versakit/theme'
import '@versakit/ui/dist/style.css' // 引入样式

export default {
  ...Theme,
  Layout: MyLayout,
  enhanceApp({ app }) {
    app.component('Tool', Tool)

    app.use(Versakit, {
      theme: {
        preset: Element,
      },
    })
  },
}
