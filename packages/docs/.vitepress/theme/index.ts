import Theme from 'vitepress/theme'
import Versakit from '@versakit/ui' // 引入组件库
import '@versakit/ui/dist/style.css' // 引入样式
import Tool from '../components/tool.vue'
import MyLayout from './Layout.vue'
import './index.scss' // 引入样式

export default {
  ...Theme,
  Layout: MyLayout,
  enhanceApp({ app }) {
    app.component('Tool', Tool)
    app.use(Versakit) // 注册组件库
  },
}
