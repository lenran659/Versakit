import { createApp } from 'vue'
import App from './App.vue'
import Versakit from '@versakit/ui' // 引入组件库
import '@versakit/ui/dist/style.css' // 引入样式
import './style/index.css'

createApp(App).use(Versakit).mount('#app')
