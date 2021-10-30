import React from 'react'

import { Container, Title, Content } from './style'

const Panel = (props: { children }) => (
  <Container>
    <Title>TEST</Title>
    <Content>{props.children}</Content>
  </Container>
)

export default Panel
