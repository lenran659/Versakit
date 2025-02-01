type BtnType = 'primary' | 'secondary' | 'success' | 'error' | 'warn'

export type BtnPassThroughOptions = {
  root?: string | any
  icon?: string | any
  label?: string | any
}

export interface ButtonProps {
  size?: string
  disabled?: boolean
  circle?: boolean
  type?: BtnType
  icon?: string
  variant?: string
  unstyled?: boolean
  pt?: BtnPassThroughOptions
}
