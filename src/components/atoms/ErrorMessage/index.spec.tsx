import React from 'react'
import { render, screen } from '../../../../test/config/react-library'
import { ThemeProvider, dark } from '../../../../test/config/theme-wrapper'
import ErrorMessage from '.'
import { dataMockErrorMessage } from '../../../constants/dataMock'

const makeSut = () => {
  return render(
    <ThemeProvider theme={dark}>
      <ErrorMessage>{dataMockErrorMessage.text}</ErrorMessage>
    </ThemeProvider>
  )
}

describe('Button component', () => {
  it('should render by default', () => {
    makeSut()
    const errorMessage = screen.queryByTestId('error-message')
    expect(errorMessage).toBeInTheDocument()
    expect(errorMessage).toHaveTextContent(dataMockErrorMessage.text)
  })
})
