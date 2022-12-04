import React from 'react'
import { render, screen } from '../../../../test/config/react-library'
import { ThemeProvider, dark } from '../../../../test/config/theme-wrapper'
import SearchBar from '.'

const makeSut = () => {
  return render(
    <ThemeProvider theme={dark}>
      <SearchBar />
    </ThemeProvider>
  )
}

describe('SearchBar component', () => {
  it('should render by default', () => {
    makeSut()
    const searchBarContainer = screen.queryByTestId('search-container')
    expect(searchBarContainer).toBeInTheDocument()
  })
})
