import React from 'react'

import Button from '../button/index'
import { Container, Search } from './styled'

type Props = {
  placeholder: string
  value: string
  onChange: (value: string) => void
}

const SearchInput = ({ placeholder, value, onChange }: Props) => (
  <Container>
    <Button onClick={() => onChange('all')} text="todos" />
    <Search
      type="search"
      placeholder={placeholder}
      value={value}
      onChange={(ev) => onChange(ev.target.value)}
    />
    <span className="material-icons">&#xe8b6;</span>
  </Container>
)

export default SearchInput
