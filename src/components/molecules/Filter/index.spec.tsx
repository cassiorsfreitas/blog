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
})
