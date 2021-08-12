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
        <a>
          <MdHome size={30} />
        </a>
      </Link>
      <Link href="/">
        <a>
          <MdFavorite size={30} />
        </a>
      </Link>
      <Link href="/">
        <a>
          <MdAccountCircle size={30} />
        </a>
      </Link>
      <MdArrowUpward size={30} onClick={() => scrollTop()} />
    </Container>
  )
}

export default MenuBottom
