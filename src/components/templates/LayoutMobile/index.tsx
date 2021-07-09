import React from 'react'
import MenuTop from '../../molecules/MenuTop'
import { LayoutProps } from './interface'
import { Container } from './styles'

// top menu
// bottom menu

const LayoutMobile = ({ children }: LayoutProps) => {
  return (
    <Container>
      <MenuTop />

      {children}

      {/* <MenuBottom /> */}
    </Container>
  )
}

export default LayoutMobile
