import type { App, Component } from 'vue'
import { installTheme } from './core/theme'
import { VKButton } from './components/button/index'

const components: Component[] = [VKButton]

export { VKButton }

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
