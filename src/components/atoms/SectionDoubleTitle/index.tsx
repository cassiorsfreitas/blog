import React from 'react'
import { Container } from './styles'
import { SectionDoubleTitleProps } from './interface'

const SectionDoubleTitle = ({
  titleMin,
  titleMax
}: SectionDoubleTitleProps) => {
  return (
    <Container>
      <div className="titleMin">{titleMin}</div>
      <div className="titleMax">{titleMax}</div>
    </Container>
  )
}

export default SectionDoubleTitle
