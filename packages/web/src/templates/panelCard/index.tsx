import React from 'react'

import { Container, Title } from './styled'

type Props = {
  title: string
  children
}

const PanelCard = ({ title, children }: Props) => (
  <Container>
    <Title>{title}</Title>
    {children}
  </Container>
)

export default PanelCard
