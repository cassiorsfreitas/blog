import { createContext, useState } from 'react'

type SearchContextType = {
  search: string
  setSearch: (data: string) => void
}

export const SearchContext = createContext({} as SearchContextType)

export function SearchProvider({ children }) {
  const [search, setSearch] = useState<string>('')

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  )
}
