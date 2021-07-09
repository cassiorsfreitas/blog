/* eslint-disable multiline-ternary */
import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { BiSun, BiMoon, BiSearch } from 'react-icons/bi'
import { Container } from './styles'

import { useGlobalContext } from '../../../contexts/globalContext'

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
        <BiSun
          onClick={() => setIsLight !== undefined && setIsLight(!isLight)}
          size={30}
          className="theme-icon"
        />
      )}
      <FaUserCircle size={40} />
      <BiSearch size={30} />
    </Container>
  )
}

export default MenuTop
