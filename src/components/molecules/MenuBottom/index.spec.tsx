import React from 'react'
import {
  render,
  screen,
  userEvent
} from '../../../../test/config/react-library'
import { ThemeProvider, dark } from '../../../../test/config/theme-wrapper'
import MenuBottom, { MenuBottomProps } from '.'

const makeSut = (props: Partial<MenuBottomProps> = {}) => {
  const defaultProps = {
    scrollTop: jest.fn(),
    ...props
  }

  return render(
    <ThemeProvider theme={dark}>
      <MenuBottom {...defaultProps} />
    </ThemeProvider>
  )
}

describe('MenuBottom component', () => {
  it('should render by default', () => {
    makeSut()
    const menuBottom = screen.queryByTestId('menu-bottom')
    expect(menuBottom).toBeInTheDocument()
  })

  it('should render by default', async () => {
    const scrollTopFn = jest.fn()
    makeSut({
      scrollTop: scrollTopFn
    })
    makeSut()
    const topButton = screen.getAllByTestId('menu-bottom-btn')
    await userEvent.click(topButton[0])
    expect(scrollTopFn).toHaveBeenCalled()
  })
})
