/* eslint-disable multiline-ternary */
import React from 'react'
import Link from 'next/link'
import { Container } from './styles'

import {
  MdHome,
  MdFavorite,
  MdAccountCircle,
  MdArrowUpward
} from 'react-icons/md'

const MenuBottom = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Container>
      <Link href="/">
        <a className="button">
          <div className="menu-desktop">home</div>
          <MdHome className="menu-mobile" size={30} />
        </a>
      </Link>
      <Link href="/fav">
        <a className="button">
          <div className="menu-desktop">favorites</div>
          <MdFavorite className="menu-mobile" size={30} />
        </a>
      </Link>
      <Link href="/profile">
        <a className="button">
          <div className="menu-desktop">profile</div>
          <MdAccountCircle className="menu-mobile" size={30} />
        </a>
      </Link>
      <a className="button" onClick={() => scrollTop()}>
        <div className="menu-desktop">top</div>
        <MdArrowUpward size={30} className="scrollTop menu-mobile" />
      </a>
    </Container>
  )
}

export default MenuBottom
