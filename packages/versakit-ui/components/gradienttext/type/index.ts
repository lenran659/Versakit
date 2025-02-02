type GradientTextType = 'error' | 'info' | 'warning' | 'success'

export interface gradient {
  rotate: number
  start: string
  end: string
}

export interface GradientTextProps {
  type?: GradientTextType
  size?: string | number
  gradient?: gradient
}
