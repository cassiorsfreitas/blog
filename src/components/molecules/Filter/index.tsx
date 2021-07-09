/* eslint-disable multiline-ternary */
import React from 'react'
import Button from '../../atoms/Button'
import { Container } from './styles'

const MenuBottom = () => {
  return (
    <Container>
      <h2>Categories</h2>
      <div className="categories">
        <div className="category">
          <Button rounded>
            <span>SEO</span>
          </Button>
        </div>
        <div className="category">
          <Button rounded>
            <span>DevOps</span>
          </Button>
        </div>
        <div className="category">
          <Button rounded>
            <span>Javascript</span>
          </Button>
        </div>
        <div className="category">
          <Button rounded>
            <span>Misc</span>
          </Button>
        </div>
      </div>
    </Container>
  )
}

export default MenuBottom
