import React from 'react'
import { render, screen } from '../../../../test/config/react-library'
import { ThemeProvider, dark } from '../../../../test/config/theme-wrapper'
import Tag from '../../atoms/Tag'

const makeSut = () => {
  render(
    <ThemeProvider theme={dark}>
      <Tag category="Any title" />
    </ThemeProvider>
  )
}

describe('Tag component', () => {
  test('should render by default with correct category', () => {
    makeSut()
    const tag = screen.getByTestId('category')
    expect(tag).toBeInTheDocument()
    expect(tag).toHaveTextContent('Any title')
  })
})
