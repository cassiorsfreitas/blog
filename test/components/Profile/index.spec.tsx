import React from 'react'
import Profile from '../../../src/components/_pages/Profile'
import { cleanup, render, screen } from '../../config/react-library'
import { ThemeProvider, dark } from '../../config/theme-wrapper'

afterEach(() => {
  cleanup()
})

const makeSut = () => {
  return render(
    <ThemeProvider theme={dark}>
      <Profile />
    </ThemeProvider>
  )
}

describe('<Profile />', () => {
  test('should render profile image', () => {
    makeSut()
    expect(screen.queryByAltText('Profile picture')).toBeInTheDocument()
  })
})
