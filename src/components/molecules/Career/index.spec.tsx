import React from 'react'
import { render, screen } from '../../../../test/config/react-library'
import { ThemeProvider, dark } from '../../../../test/config/theme-wrapper'
import Career, { CareerProps } from '.'
import { dataMockCareer } from '../../../constants/dataMock'

const makeSut = (props: Partial<CareerProps> = {}) => {
  const defaultProps = {
    ...dataMockCareer,
    ...props
  }
  return render(
    <ThemeProvider theme={dark}>
      <Career {...defaultProps} />
    </ThemeProvider>
  )
}

describe('Career component', () => {
  it('should render with correctly values', () => {
    makeSut()
    const career = screen.queryByTestId('career-component')
    const postCareerUrlCompany = screen.getByRole('link')
    expect(postCareerUrlCompany).toHaveAttribute(
      'href',
      `${dataMockCareer.urlCompany}`
    )
    expect(career).toBeInTheDocument()
    expect(career).toHaveTextContent(dataMockCareer.role)
    expect(career).toHaveTextContent(dataMockCareer.city)
    expect(career).toHaveTextContent(dataMockCareer.company)
    expect(career).toHaveTextContent(dataMockCareer.duration)
    expect(career).toHaveTextContent(dataMockCareer.finalDate)
    expect(career).toHaveTextContent(dataMockCareer.startDate)
  })

  it('should not render duration value if it is not provided', () => {
    makeSut({
      duration: ''
    })
    const career = screen.queryByTestId('career-component')
    expect(career).not.toHaveTextContent(dataMockCareer.duration)
  })
})
