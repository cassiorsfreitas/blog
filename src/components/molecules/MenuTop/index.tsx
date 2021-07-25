/* eslint-disable multiline-ternary */
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { BiMoon } from 'react-icons/bi'
import { Container } from './styles'

import { MdSearch, MdWbSunny } from 'react-icons/md'
import { useGlobalContext } from '../../../contexts/globalContext'
import profile from '../../../../public/profile.jpg'

const MenuTop = () => {
  const { isLight, setIsLight } = useGlobalContext()
  const router = useRouter()

  return (
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
      <Image
        src={profile}
        width={50}
        height={50}
        priority
        alt="Cássio Freitas Profile"
        className="picture-profile"
        onClick={() => router.push('/')}
      />
      <MdSearch size={30} onClick={() => router.push('/explore')} />
    </Container>
  )
}

export default MenuTop
