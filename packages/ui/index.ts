import type { App, Component } from 'vue'
import { installTheme } from './core/theme'
import { VerButton } from './components/button/index'

// 样式
import './style/var.css'

const components: Component[] = [VerButton]

export { VerButton }

const Versakit = {
  install: (app: App, options?: any) => {
    for (const c in components) {
      app.component(components[c]?.name || c, components[c])
    }

    if (options?.theme) {
      installTheme(options.theme)
    }
  },
}

export default Versakit
