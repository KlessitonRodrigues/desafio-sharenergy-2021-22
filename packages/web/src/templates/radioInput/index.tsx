import React from 'react'

import { Container, Input, Label } from './styled'

type Props = {
  name: string
  onChange: (name: string) => void
  labels: string[]
  options: string[]
  active: string
}

function mapRadios({
  name = 'radio',
  options,
  labels = [],
  active,
  onChange
}: Props) {
  return options.map((op, i) => (
    <Label key={i} onClick={() => onChange(op)}>
      <Input type="radio" name={name} value={op} checked={op === active} />
      {labels[i] || op}
    </Label>
  ))
}

const RadioInput = (props: Props) => <Container>{mapRadios(props)}</Container>

export default RadioInput
