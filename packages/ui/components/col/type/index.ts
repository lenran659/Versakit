export type ColSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

type ColSizeMap = {
  [key in ColSize]?: number
}

export type ColProps = {
  span?: number
  offset?: number
} & ColSizeMap
