import React from 'react'
import { cleanup, render, screen } from '../../config/react-library'
import { ThemeProvider, dark } from '../../config/theme-wrapper'
import SocialCard from '../../../src/components/molecules/SocialCard'
import { readFakeData } from './readFakeData'

afterEach(() => {
  cleanup()
})

const makeSut = () => {
  return render(
    <ThemeProvider theme={dark}>
      <SocialCard />
    </ThemeProvider>
  )
}

describe('<SocialCard />', () => {
  it('should has correct cards name', async () => {
    makeSut()
    expect(screen.queryByText(readFakeData.github.name)).toBeInTheDocument()
    expect(screen.queryByText(readFakeData.twitter.name)).toBeInTheDocument()
    expect(screen.queryByText(readFakeData.linkedin.name)).toBeInTheDocument()
    expect(screen.queryByText(readFakeData.email.name)).toBeInTheDocument()
  })
})
