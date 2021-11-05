import React from 'react'

import { Input, Label, Title } from './style'

type TextInputType = (props: {
  type?: 'text' | 'password' | 'number' | 'email'
  value: string | number
  onChange: (value: string) => void
  label: string
  min?: string | number
  max?: string | number
}) => React.ReactElement

const TextInput: TextInputType = ({
  type,
  value,
  onChange,
  label,
  min,
  max
}) => (
  <Label>
    <Title show={!!(value || value === 0)}>{label}</Title>
    <Input
      type={type || 'text'}
      value={value}
      placeholder={label}
      min={min}
      max={max}
      onChange={(ev) => onChange(ev.target.value)}
    />
  </Label>
)

export default TextInput
