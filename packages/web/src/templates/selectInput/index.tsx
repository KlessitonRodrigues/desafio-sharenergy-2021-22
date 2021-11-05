import React, { useState } from 'react'

import SearchInput from '../searchInput/index'
import { Container, Selection, Flex } from './styled'

type Props = {
  placeholder: string
  options: string[]
  onChange: (value: string) => void
}

function mapSelections(options: Props['options'], search: string, onChange) {
  if (options.length === 0) return []
  return options.map((op, i) => {
    if (
      (search.toLowerCase() && op.toLocaleLowerCase().includes(search)) ||
      search === 'all'
    ) {
      return (
        <Selection key={i} onClick={() => onChange(op)}>
          {op}
        </Selection>
      )
    }
    return null
  })
}

const SelectInput = ({ placeholder, options = [], onChange }: Props) => {
  const [search, setSearch] = useState('')

  return (
    <Container>
      <SearchInput
        placeholder={placeholder}
        value={search}
        onChange={(value) => setSearch(value)}
      />
      <Flex>{mapSelections(options, search, onChange)}</Flex>
    </Container>
  )
}

export default SelectInput
