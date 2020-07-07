export type Default = {
  className?: string,
  [k: string]: any
}

export type Box = {
  marginTop?: number,
  marginRight?: number,
  marginBottom?: number,
  marginLeft?: number,
}

export type Color = {
  color?: 'main' | 'white' | 'dark' | 'transparent'
}

export type Size = {
  size?: 'small' | 'medium' | 'large'
}