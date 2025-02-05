import type { ComponentResolver } from 'unplugin-vue-components'

// 将组件名拆分为独立数组元素
const components = [
  'VerCol',
  'VerTag',
  'VerNotification',
  'VerMessage',
  'VerLink',
  'VerText',
  'VerBadge',
  'VerCarouselItem',
  'VerCarousel',
  'VerFlex',
  'VerSlider',
  'VerTooltip',
  'VerProgress',
  'VerAside',
  'VerFooter',
  'VerSegmented',
  'VerCollapse',
  'VerCollapseItem',
  'VerButton',
  'VerRow',
  'VerInput',
  'VerDialog',
  'VerAvatar',
  'VerCard',
  'VerPanel',
  'VerDivider',
  'VerDrawer',
  'VerSwitch',
  'VerRadio',
  'VerTextarea',
  'VerContainer',
  'VerHeader',
  'VerMain',
  'VerTab',
  'VerIcon',
  'VerBacktop',
  'VerResult',
  'VerEmpty',
  'VerGradientText',
  'VerTable',
]

export interface ResolverOptions {
  prefix?: string
  importStyle?: boolean // 新增样式导入选项
}

const VersakitResolver = (options: ResolverOptions = {}): ComponentResolver => {
  const { prefix = '', importStyle = true } = options

  return {
    type: 'component',
    resolve: (name: string) => {
      // 处理前缀匹配（不区分大小写）
      const prefixRegex = new RegExp(`^${prefix}`, 'i')

      if (prefixRegex.test(name)) {
        const componentName = name.replace(prefixRegex, '')

        // 直接检查组件名是否存在数组中
        if (components.includes(componentName)) {
          return {
            name: componentName,
            from: '@versakit/ui',
            sideEffects: importStyle
              ? '@versakit/ui/dist/style.css'
              : undefined,
          }
        }
      }
    },
  }
}

export { VersakitResolver }
