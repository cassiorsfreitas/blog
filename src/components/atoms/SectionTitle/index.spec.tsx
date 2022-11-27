import React from 'react'
import { render, screen } from '../../../../test/config/react-library'
import { ThemeProvider, dark } from '../../../../test/config/theme-wrapper'
import SectionTitle from '../../atoms/SectionTitle'
import { SectionTitleProps } from './interface'
import { dataMockSectionTitle } from '../../../constants/dataMock'

const makeSut = (props: Partial<SectionTitleProps> = {}) => {
  const defaultProps = {
    ...dataMockSectionTitle,
    ...props
  }

  render(
    <ThemeProvider theme={dark}>
      <SectionTitle {...defaultProps} />
    </ThemeProvider>
  )
}

describe('SectionTitle component', () => {
  test('should render by default', () => {
    makeSut()
    const sectionTitle = screen.queryByTestId('section-title')
    expect(sectionTitle).toBeInTheDocument()
  })
})
