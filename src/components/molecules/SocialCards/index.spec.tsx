import React from 'react'
import { render, screen } from '../../../../test/config/react-library'
import { ThemeProvider, dark } from '../../../../test/config/theme-wrapper'
import { dataMockSocialCards } from '../../../constants/dataMock'
import SocialCards from '.'

const makeSut = () => {
  return render(
    <ThemeProvider theme={dark}>
      <SocialCards socialData={dataMockSocialCards} />
    </ThemeProvider>
  )
}

describe('SocialCards component', () => {
  it('should render by default', async () => {
    makeSut()
    const searchBarContainer = screen.queryByTestId('social-card-container')
    expect(searchBarContainer).toBeInTheDocument()
  })
})
