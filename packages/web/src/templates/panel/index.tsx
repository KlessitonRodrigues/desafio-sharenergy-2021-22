import React from 'react'

import { Container } from './style'

const Panel = (props: { children: React.ReactElement }) => (
  <Container>{props.children}</Container>
)

export default Panel
