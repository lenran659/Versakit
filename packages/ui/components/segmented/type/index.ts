import type { SizeType } from '../../../utils/constant'

export interface SegmentedProps {
  options?: string[] | any
  modelValue?: number | string
  size?: SizeType
  disabled?: boolean
}
