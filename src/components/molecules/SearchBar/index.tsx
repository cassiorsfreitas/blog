import React, { useState } from 'react'
import Input from '../../atoms/Input'

const SearchBar = () => {
  const [search, setSearch] = useState('')

  const validateSearch = () => {
    console.log(search)
  }

  return (
    <div>
      <Input
        fullWidth
        type="text"
        placeholder="Search..."
        onBlur={() => validateSearch()}
        onChange={e => {
          setSearch(e.target.value)
        }}
      />
    </div>
  )
}

export default SearchBar
