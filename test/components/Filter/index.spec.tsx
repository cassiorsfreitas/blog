import React from 'react'
import { cleanup, render, screen } from '../../config/react-library'
import { ThemeProvider, dark } from '../../config/theme-wrapper'
import Filter from '../../../src/components/molecules/Filter'
import { readFakeData } from './readFakeData'
import { generateFilters } from '../../../src/lib/generateFilters'

afterEach(() => cleanup())

const makeSut = () => {
  return render(
    <ThemeProvider theme={dark}>
      <Filter posts={readFakeData} />
    </ThemeProvider>
  )
}

describe('<Filter />', () => {
  test('should render correct categories', () => {
    makeSut()
    const filtersArray = generateFilters(readFakeData)
    // eslint-disable-next-line array-callback-return
    filtersArray.map((filter: string) => {
      const formattedFilter = (
        filter.charAt(0).toUpperCase() + filter.slice(1)
      ).replace('-', ' ')
      expect(screen.queryByText(formattedFilter)).toBeInTheDocument()
    })
  })
})
