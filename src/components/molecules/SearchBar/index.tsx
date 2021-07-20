import React, { useState } from 'react'
import { Container } from './styles'

import Input from '../../atoms/Input'

const SearchBar = () => {
  const [search, setSearch] = useState('')

  const validateSearch = () => {
    console.log(search)
  }

  return (
    <Container>
      <Input
        fullWidth
        type="text"
        placeholder="Search..."
        onBlur={() => validateSearch()}
        onChange={e => {
          setSearch(e.target.value)
        }}
      />
    </Container>
  )
}

export default SearchBar
