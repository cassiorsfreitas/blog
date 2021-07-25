/* eslint-disable multiline-ternary */
import React from 'react'
import { Container } from './styles'

import { useRouter } from 'next/router'

import {
  MdHome,
  MdFavorite,
  MdAccountCircle,
  MdArrowUpward
} from 'react-icons/md'

const MenuBottom = () => {
  const router = useRouter()
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Container>
      <MdHome size={30} onClick={() => router.push('/')} />
      <MdFavorite size={30} onClick={() => router.push('/')} />
      <MdAccountCircle size={30} onClick={() => router.push('/')} />
      <MdArrowUpward size={30} onClick={() => scrollTop()} />
    </Container>
  )
}

export default MenuBottom
