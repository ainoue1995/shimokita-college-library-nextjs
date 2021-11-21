import React from 'react'

interface Props {
  height?: number
  width?: number
  alt?: string
  src: string
}

export const CommonImage = ({ width, height, alt = '', src }: Props) => {
  return <img src={src} width={width} height={height} alt={alt} />
}

export const CommonSmallImage = ({ src }: Props) => {
  return <CommonImage width={50} height={50} src={src} />
}
