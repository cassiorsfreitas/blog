import React from 'react'
import NowPlaying from '../../../src/components/atoms/NowPlaying'
import { NowPlayingSong } from '../../../src/lib/types'
import { cleanup, render, screen } from '../../config/react-library'
import { ThemeProvider, dark } from '../../config/theme-wrapper'
import { readFakeData } from './readFakeData'

afterEach(() => {
  cleanup()
})

const makeSut = (data?: NowPlayingSong) => {
  return render(
    <ThemeProvider theme={dark}>
      <NowPlaying data={data} />
    </ThemeProvider>
  )
}

describe('<NowPlaying />', () => {
  test('should display if Spotify is playing', () => {
    const data: NowPlayingSong = readFakeData()
    makeSut(data)
    expect(screen.queryByText('Playing on Spotify')).toBeInTheDocument()
  })

  test('should hide if Spotify is not playing', () => {
    const data: NowPlayingSong = readFakeData()
    makeSut({ ...data, isPlaying: false })
    expect(screen.queryByText('Playing on Spotify')).not.toBeInTheDocument()
  })
})
