import React from 'react'
import {
  render,
  screen,
  userEvent
} from '../../../../test/config/react-library'
import { ThemeProvider, dark } from '../../../../test/config/theme-wrapper'
import MenuTop from '.'

const makeSut = () => {
  return render(
    <ThemeProvider theme={dark}>
      <MenuTop />
    </ThemeProvider>
  )
}

describe('MenuTop component', () => {
  it('should render by default', () => {
    makeSut()
    const menuTop = screen.queryByTestId('menu-top')
    expect(menuTop).toBeInTheDocument()
  })

  it('should render dark theme at first and change to light theme if click on sun button', async () => {
    makeSut()
    const sunButton = screen.getByTestId('sun-button')
    expect(sunButton).toBeInTheDocument()
    await userEvent.click(sunButton)
    const moonButton = screen.queryByTestId('moon-button')
    expect(moonButton).not.toBeInTheDocument()
  })
})
