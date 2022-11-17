import React from 'react'
import { render, screen } from '../../../../test/config/react-library'
import { ThemeProvider, dark } from '../../../../test/config/theme-wrapper'
import SectionDoubleTitle from '.'
import { SectionDoubleTitleProps } from './interface'
import { dataMockSectionDoubleTitle } from '../../../constants/dataMock'

const makeSut = (props: Partial<SectionDoubleTitleProps> = {}) => {
  const defaultProps = {
    ...dataMockSectionDoubleTitle,
    ...props
  }

  render(
    <ThemeProvider theme={dark}>
      <SectionDoubleTitle {...defaultProps} />
    </ThemeProvider>
  )
}

describe('SectionDoubleTitle component', () => {
  test('should render by default', () => {
    makeSut()
    const sectionDoubleTitle = screen.queryByTestId('double-title')
    expect(sectionDoubleTitle).toBeInTheDocument()
  })

  test('should render with correct data', () => {
    makeSut()
    const sectionDoubleTitle = screen.queryByTestId('double-title')
    expect(sectionDoubleTitle).toHaveTextContent(
      dataMockSectionDoubleTitle.titleMin
    )
    expect(sectionDoubleTitle).toHaveTextContent(
      dataMockSectionDoubleTitle.titleMax
    )
  })
})
