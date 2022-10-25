import React from 'react'
import { render, screen } from '../../../../test/config/react-library'
import { ThemeProvider, dark } from '../../../../test/config/theme-wrapper'
import Input from '.'

const makeSut = () => {
  return render(
    <ThemeProvider theme={dark}>
      <Input />
    </ThemeProvider>
  )
}

describe('Button component', () => {
  it('should render with correct state', () => {
    makeSut()
    const button = screen.queryByTestId('input-container')
    expect(button).toBeInTheDocument()
  })
})
