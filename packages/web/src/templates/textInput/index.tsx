import React from 'react'

import { Input, Label, Title } from './style'

type TextInputType = (props: {
  type?: 'text' | 'password' | 'number' | 'email'
  value: string
  onChange: (value: string) => void
  label: string
}) => React.ReactElement

const TextInput: TextInputType = ({ type, value, onChange, label }) => (
  <Label>
    <Title show={!!value}>{label}</Title>
    <Input
      type={type || 'text'}
      value={value}
      placeholder={label}
      onChange={(ev) => onChange(ev.target.value)}
    />
  </Label>
)

export default TextInput
