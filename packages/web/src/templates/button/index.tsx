import React from 'react'

import { Container } from './style'

type ButtonType = (Props: {
  text: string
  onClick: () => void
}) => React.ReactElement

const Button: ButtonType = ({ text, onClick }) => (
  <Container type="button" onClick={onClick}>
    {text}
  </Container>
)

export default Button
