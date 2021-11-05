import React from 'react'

import { Label, Input } from './styled'

type Props = {
  onChange: (date: Date) => void
}

const today = new Date()
const tomorrow = [today.getFullYear(), today.getMonth(), today.getDate() + 1]

const Datepicker = ({ onChange }: Props) => (
  <Label>
    Data
    <Input
      type="date"
      max={tomorrow.map((n) => (n < 10 ? '0' + n : n)).join('-')}
      onChange={(ev) => {
        const value = new Date(ev.target.value)
        value.setDate(value.getDate() + 1)
        onChange(value)
      }}
    />
  </Label>
)

export default Datepicker
