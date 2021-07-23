import React, { useContext } from 'react'
import { Container } from './styles'

import Input from '../../atoms/Input'
import { SearchContext } from '../../../contexts/searchContext'

const SearchBar = () => {
  const { search, setSearch } = useContext(SearchContext)

  const validateSearch = () => {
    console.log(search)
  }

  return (
    <Container>
      <Input
        fullWidth
        type="search"
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
