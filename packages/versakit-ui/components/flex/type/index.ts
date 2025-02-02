export type AlignProps = 'normal' | 'flex-start' | 'center' | 'flex-end'

export type JustifyProps =
  | 'normal'
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'

export interface FlexProps {
  vertical?: boolean
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  justify?: JustifyProps
  align?: AlignProps
  gap?: number | number[] | 'small' | 'middle' | 'large'
}
