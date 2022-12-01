import React from 'react'
import {
  render,
  screen,
  userEvent
} from '../../../../test/config/react-library'
import { ThemeProvider, dark } from '../../../../test/config/theme-wrapper'
import Button from '.'
import { ButtonProps } from './interface'
import { dataMockButton } from '../../../constants/dataMock/index'

const makeSut = (props: Partial<ButtonProps> = {}) => {
  const defaultProps: ButtonProps = {
    onClick: jest.fn(),
    ...props
  }
  return render(
    <ThemeProvider theme={dark}>
      <Button {...defaultProps}>{dataMockButton.text}</Button>
    </ThemeProvider>
  )
}

describe('Button component', () => {
  it('should render by default', () => {
    makeSut()
    const button = screen.queryByTestId('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent(dataMockButton.text)
  })

  it('should call correct onClick function', async () => {
    const customOnClick = jest.fn()
    makeSut({
      onClick: customOnClick
    })
    const button = screen.getByTestId('button')
    await userEvent.click(button)
    expect(customOnClick).toHaveBeenCalled()
  })
})
