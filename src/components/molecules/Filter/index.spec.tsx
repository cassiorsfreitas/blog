import React from 'react'
import { render, screen } from '../../../../test/config/react-library'
import { ThemeProvider, dark } from '../../../../test/config/theme-wrapper'
import Filter, { FilterProps } from '.'
import { dataMockFilter } from '../../../constants/dataMock'

const makeSut = (props: Partial<FilterProps> = {}) => {
  const defaultProps = {
    ...dataMockFilter,
    ...props
  }

  return render(
    <ThemeProvider theme={dark}>
      <Filter {...defaultProps} />
    </ThemeProvider>
  )
}

describe('Filter component', () => {
  it('should render by default', () => {
    makeSut()
    const filter = screen.queryByTestId('filter-component')
    expect(filter).toBeInTheDocument()
  })

  it('should render category buttons', () => {
    makeSut()
    const filter = screen.queryAllByTestId('category')
    expect(filter[0]).toBeInTheDocument()
  })

  it('should render correct formatting of the data provided', () => {
    makeSut({ filters: ['Any-test'] })
    const filter = screen.queryAllByTestId('category')
    expect(filter[0]).toHaveTextContent('Any test')
  })
})
