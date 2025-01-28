// 在类型定义文件中
export interface ButtonProps {
  size?: 'sm' | 'md' | 'lg' // 更明确的类型
  disabled?: boolean
  circle?: boolean
  color?: string
  icon?: string
  variant?: string
  unstyled?: boolean
  pt?: {
    root?: string
    icon?: string
    label?: string
  }
}
