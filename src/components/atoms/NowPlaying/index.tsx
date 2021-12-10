import React from 'react'
import useSWR from 'swr'
import { NowPlayingSong } from '../../../lib/types'
import fetcher from '../../../lib/fetcher'
import { Container } from './styles'
import { SiSpotify } from 'react-icons/si'

const NowPlaying = () => {
  const { data } = useSWR<NowPlayingSong>('/api/now-playing', fetcher)
  return (
    <>
      {data?.isPlaying && (
        <Container>
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
