import React from 'react'

import { Container } from './style'

export type ImgType = (props: {
  src: string
  alt: string
  sm?: string
  md?: string
  lg?: string
}) => React.ReactElement

const Img: ImgType = ({ src, alt, sm = '100%', md = '100%', lg = '100%' }) => (
  <Container src={src} alt={alt} imgSize={{ sm, md, lg }} />
)

export default Img
