import React from 'react'
import { render, screen } from '../../../config/react-library'
import { ThemeProvider, dark } from '../../../config/theme-wrapper'

import Button from '../../../../src/components/atoms/Button'
import '@testing-library/jest-dom'

const makeSut = () => {
  return render(
    <ThemeProvider theme={dark}>
      <Button>Potato</Button>
    </ThemeProvider>
  )
}

describe('Button component', () => {
  it('should render with correct state', () => {
    makeSut()
    const button = screen.queryByTestId('button')
    expect(button).toBeInTheDocument()
  })
})
