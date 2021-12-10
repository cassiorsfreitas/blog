import React from 'react'
import useSWR from 'swr'
import { NowPlayingSong } from '../../../lib/types'
import fetcher from '../../../lib/fetcher'
import { Container } from './styles'
import { FaSpotify } from 'react-icons/fa'

const NowPlaying = () => {
  const { data } = useSWR<NowPlayingSong>('/api/now-playing', fetcher)
  return (
    <>
      {data?.isPlaying && (
        <Container>
          <div className="spotify">
            <FaSpotify />
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
