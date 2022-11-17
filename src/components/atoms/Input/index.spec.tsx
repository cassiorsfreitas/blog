import React from 'react'
import { render, screen } from '../../../../test/config/react-library'
import { ThemeProvider, dark } from '../../../../test/config/theme-wrapper'
import Input from '.'
import { InputProps } from './interface'

const makeSut = (props: Partial<InputProps> = {}) => {
  return render(
    <ThemeProvider theme={dark}>
      <Input {...props} />
    </ThemeProvider>
  )
}

describe('Button component', () => {
  it('should render by default', () => {
    makeSut()
    const button = screen.queryByTestId('input-container')
    expect(button).toBeInTheDocument()
  })

  it('should render password input if type is password', () => {
    makeSut({
      type: 'password'
    })
    const button = screen.queryByTestId('input-container')
    expect(button).toHaveAttribute('type', 'password')
  })
})
