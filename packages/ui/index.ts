import type { App, Component } from 'vue'
import { installTheme } from './core/theme'
import { VerButton } from './components/button/index'

// 指令
import { vRipple, vIncrease } from './directives/index'

// 样式
import './style/var.css'

// 图标
import 'virtual:svg-icons-register'

const components: Component[] = [VerButton]

export { VerButton }

const Versakit = {
  install: (app: App, options?: any) => {
    for (const c in components) {
      app.component(components[c]?.name || c, components[c])
    }

    app.directive('ripple', vRipple)
    app.directive('increase', vIncrease)

    if (options?.theme) {
      installTheme(options.theme)
    }
  },
}

export default Versakit
