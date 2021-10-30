import React from 'react'

import { Container, Title } from './styled'

const PanelCard = (props: { title: string; children }) => (
  <Container>
    <Title>{props.title}</Title>
    {props.children}
  </Container>
)

export default PanelCard
