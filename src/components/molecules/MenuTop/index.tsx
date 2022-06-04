/* eslint-disable multiline-ternary */
import Link from 'next/link'
import React from 'react'
import { BiMoon } from 'react-icons/bi'
import { MdSearch, MdWbSunny } from 'react-icons/md'
import useSWR from 'swr'
import { useGlobalContext } from '../../../contexts/globalContext'
import fetcher from '../../../lib/fetcher'
import { NowPlayingSong } from '../../../lib/types'
import NowPlaying from '../../atoms/NowPlaying'
import { Container, ContainerMobile } from './styles'

const MenuTop = () => {
  const { isLight, setIsLight } = useGlobalContext()
  const { data } = useSWR<NowPlayingSong>('/api/now-playing', fetcher)

  return (
    <>
      <Container>
        {isLight ? (
          <BiMoon
            onClick={() => setIsLight !== undefined && setIsLight(!isLight)}
            size={30}
            className="theme-icon"
          />
        ) : (
          <MdWbSunny
            onClick={() => setIsLight !== undefined && setIsLight(!isLight)}
            size={30}
            className="theme-icon"
          />
        )}
        <div className="header-profile">
          <h1>Read. Learn. Teach.</h1>
        </div>
        <Link href="/explore">
          <a>
            <MdSearch size={30} />
          </a>
        </Link>
      </Container>
      <ContainerMobile>
        <NowPlaying data={data} />
      </ContainerMobile>
    </>
  )
}

export default MenuTop
