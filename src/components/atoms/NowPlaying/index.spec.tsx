import React from 'react'
import { render, screen } from '../../../../test/config/react-library'
import { ThemeProvider, dark } from '../../../../test/config/theme-wrapper'
import NowPlaying from '.'
import { NowPlayingProps } from './interface'
import { NowPlayingSong } from '../../../lib/types'
import { dataMockNowPlaying } from '../../../constants/dataMock'

const makeSut = (props: Partial<NowPlayingSong> = {}) => {
  const defaultProps: NowPlayingProps = {
    data: {
      ...dataMockNowPlaying,
      ...props
    }
  }

  return render(
    <ThemeProvider theme={dark}>
      <NowPlaying {...defaultProps} />
    </ThemeProvider>
  )
}

describe('Button component', () => {
  it('should not render if spotify is not playing', () => {
    makeSut()
    const nowPlaying = screen.queryByTestId('nowPlaying')
    expect(nowPlaying).not.toBeInTheDocument()
  })

  it('should render if spotify is playing', () => {
    makeSut({
      isPlaying: true
    })
    const nowPlaying = screen.queryByTestId('nowPlaying')
    expect(nowPlaying).toBeInTheDocument()
    expect(nowPlaying).toHaveTextContent(dataMockNowPlaying.title)
    expect(nowPlaying).toHaveTextContent(dataMockNowPlaying.artist)
  })
})
