type ShapType = 'circle' | 'square'

export interface imageProps {
  shape?: ShapType
  src?: string
  size?: number | string
  fit?: Fit | string
  fallback?: string
}

export enum Fit {
  fill = 'fill',
  contain = 'contain',
  cover = 'cover',
  none = 'none',
  scaledown = 'scale-down',
}
