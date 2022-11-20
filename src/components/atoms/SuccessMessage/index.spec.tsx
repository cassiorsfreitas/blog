import React from 'react'
import { render, screen } from '../../../../test/config/react-library'
import { ThemeProvider, dark } from '../../../../test/config/theme-wrapper'
import SuccessMessage from '../../atoms/SuccessMessage'

const makeSut = () => {
  render(
    <ThemeProvider theme={dark}>
      <SuccessMessage>Any children</SuccessMessage>
    </ThemeProvider>
  )
}

describe('SuccessMessage component', () => {
  test('should render by default', () => {
    makeSut()
    const sectionTitle = screen.queryByTestId('success-message')
    expect(sectionTitle).toBeInTheDocument()
  })
})
