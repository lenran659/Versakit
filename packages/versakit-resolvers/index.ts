import type { ComponentResolver } from 'unplugin-vue-components'

const components = [
  'VerCol, VerTag, VerNotification, VerMessage, VerLink, VerText, VerBadge, VerCarouselItem, VerCarousel, VerFlex, VerSlider, VerTooltip, VerProgress, VerAside, VerFooter, VerSegmented, VerCollapse, VerCollapseItem, VerButton, VerRow, VerInput, VerDialog, VerAvatar, VerCard, VerPanel, VerDivider, VerDrawer, VerSwitch, VerRadio, VerTextarea, VerContainer, VerHeader, VerMain, VerTab, VerIcon, VerBacktop, VerResult, VerEmpty, VerGradientText, VerTable',
]

export interface ResolverOptions {
  /**
   *@description 模板中使用的组件的前缀
   *@default ""
   */
  prefix?: string
}

const VersakitResolvers = (
  options: ResolverOptions = {},
): ComponentResolver => {
  const { prefix = '' } = options

  return {
    type: 'component',
    resolve: (name: string) => {
      if (name.toLowerCase().startsWith(prefix.toLowerCase())) {
        const componentName = name.substring(prefix.length)
        if (Object.values(components).flat().includes(componentName)) {
          return {
            name: componentName,
            from: '@versakit/ui',
          }
        }
      }
    },
  }
}

export { VersakitResolvers }
