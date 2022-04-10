import React, { useContext } from 'react'
import { SearchContext } from '../../../contexts/searchContext'
import Input from '../../atoms/Input'
import { Container } from './styles'

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
        value={search || ''}
        onBlur={() => validateSearch()}
        onChange={e => {
          setSearch(e.target.value)
        }}
      />
    </Container>
  )
}

export default SearchBar
