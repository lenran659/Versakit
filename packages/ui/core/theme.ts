// theme.ts
type ThemeOptions = {
  prefix?: string
  darkModeSelector?: string
  cssLayer?: boolean
}

type ThemeConfig = {
  preset: Record<string, any>
  options?: ThemeOptions
}

export const installTheme = (config: ThemeConfig) => {
  const cssVariables: Record<string, string> = {}
  const prefix = config.options?.prefix || ''

  const generateVars = (obj: Record<string, any>, path: string[] = []) => {
    Object.entries(obj).forEach(([key, value]) => {
      const newPath = [
        ...path,
        key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(),
      ]

      if (typeof value === 'object' && !Array.isArray(value)) {
        generateVars(value, newPath)
      } else {
        const varName = prefix
          ? `--${prefix}-${newPath.join('-')}`
          : `--${newPath.join('-')}`
        cssVariables[varName] = value.toString()
      }
    })
  }

  generateVars(config.preset)

  const style = document.createElement('style')
  style.textContent = `:root { ${Object.entries(cssVariables)
    .map(([k, v]) => `${k}: ${v};`)
    .join(' ')} }`
  document.head.appendChild(style)
}
