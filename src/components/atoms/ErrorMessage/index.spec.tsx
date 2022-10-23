import React from 'react'
import { render, screen } from '../../../../test/config/react-library'
import { ThemeProvider, dark } from '../../../../test/config/theme-wrapper'
import ErrorMessage from '.'

const makeSut = () => {
  return render(
    <ThemeProvider theme={dark}>
      <ErrorMessage>Any</ErrorMessage>
    </ThemeProvider>
  )
}

describe('Button component', () => {
  it('should render with correct state', () => {
    makeSut()
    const button = screen.queryByTestId('error-message')
    expect(button).toBeInTheDocument()
  })
})
