import React from 'react'

import { Container, Title, Content } from './style'

type PanelProps = {
  title: string
  children
}

const Panel = ({ title, children }: PanelProps) => (
  <Container>
    <Title>{title}</Title>
    <Content>{children}</Content>
  </Container>
)

export default Panel
