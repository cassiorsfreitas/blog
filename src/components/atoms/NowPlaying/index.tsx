import React from 'react'
import { NowPlayingSong } from '../../../lib/types'
import { Container } from './styles'
import { SiSpotify } from 'react-icons/si'

type NowPlayingProps = {
  data: NowPlayingSong
}

const NowPlaying = ({ data }: NowPlayingProps) => {
  return (
    <>
      {data?.isPlaying && (
        <Container data-testid="nowPlaying">
          <div className="spotify">
            <SiSpotify size="16px" color="1DB954" />
            Playing on Spotify
          </div>
          <div>
            {data?.title}, {data?.artist}
          </div>
        </Container>
      )}
    </>
  )
}

export default NowPlaying
