import type { App, Component } from 'vue'
import { installTheme } from './core/theme'
import { VButton } from './components/button/index'

const components: Component[] = [VButton]

export { VButton }

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
