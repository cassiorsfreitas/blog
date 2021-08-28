/* eslint-disable multiline-ternary */
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BiMoon } from 'react-icons/bi'
import { Container } from './styles'

import { MdSearch, MdWbSunny } from 'react-icons/md'
import { useGlobalContext } from '../../../contexts/globalContext'
import profile from '../../../../public/profile.jpg'

const MenuTop = () => {
  const { isLight, setIsLight } = useGlobalContext()

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
      <Link href="/">
        <a>
          <Image
            src={profile}
            width={50}
            height={50}
            priority
            alt="Cássio Freitas Profile"
            className="picture-profile"
          />
        </a>
      </Link>
      <Link href="/explore">
        <a>
          <MdSearch size={30} />
        </a>
      </Link>
    </Container>
  )
}

export default MenuTop
