import React from 'react'
import { LayoutProps } from './interface'
import { Container } from './styles'

// top menu
// bottom menu

const LayoutMobile = ({ children }: LayoutProps) => {
  return (
    <Container>
      {/* <MenuBottom /> */}

      {children}

      {/* <MenuTop /> */}
    </Container>
  )
}

export default LayoutMobile
