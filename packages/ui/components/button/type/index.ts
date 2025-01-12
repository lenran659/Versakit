import type { ComType } from '../../../utils/constant'

export interface ButtonProps {
  type?: ComType
  size?: string
  disabled?: boolean
  circle?: boolean
  color?: string
  icon?: string
  variant?: string
}
