/* eslint-disable multiline-ternary */
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { BiSun, BiMoon, BiSearch } from 'react-icons/bi'
import { Container } from './styles'

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
        <BiSun
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
      />
      <BiSearch size={30} onClick={() => router.push('/search')} />
    </Container>
  )
}

export default MenuTop
