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
    const errorMessage = screen.queryByTestId('error-message')
    expect(errorMessage).toBeInTheDocument()
  })
})
