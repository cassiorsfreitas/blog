import React from 'react'
import { render, screen } from '../../../../test/config/react-library'
import { ThemeProvider, dark } from '../../../../test/config/theme-wrapper'
import Newsletter from '.'

const makeSut = () => {
  return render(
    <ThemeProvider theme={dark}>
      <Newsletter />
    </ThemeProvider>
  )
}

describe('Newsletter component', () => {
  it('should render by default', () => {
    makeSut()
    const newsletterContainer = screen.queryByTestId('newsletter-container')
    expect(newsletterContainer).toBeInTheDocument()
  })
})
