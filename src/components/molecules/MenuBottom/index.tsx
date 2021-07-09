/* eslint-disable multiline-ternary */
import React from 'react'
import { useRouter } from 'next/router'
import { FaUserCircle } from 'react-icons/fa'
import { IoHomeOutline, IoBookOutline } from 'react-icons/io5'
import { Container } from './styles'

const MenuBottom = () => {
  const router = useRouter()

  return (
    <Container>
      <IoHomeOutline size={30} onClick={() => router.push('/')} />
      <IoBookOutline size={30} onClick={() => router.push('/')} />
      <FaUserCircle size={30} onClick={() => router.push('/')} />
    </Container>
  )
}

export default MenuBottom
