import Link from 'next/link'
import React from 'react'
import Button from '../../atoms/Button'
import SectionTitle from '../../atoms/SectionTitle'
import { Container } from './styles'

const MenuBottom = ({ posts }) => {
  return (
    <Container>
      <SectionTitle title="Tags" strong />
      <div className="categories">
        <div className="category">
          <Link href={'/explore/seo'}>
            <Button rounded>
              <span>SEO</span>
            </Button>
          </Link>
        </div>
        <div className="category">
          <Link href={'/explore/front-end'}>
            <Button rounded>
              <span>Front end</span>
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  )
}

export default MenuBottom
