import Link from 'next/link'
import React from 'react'
import Button from '../../atoms/Button'
import SectionTitle from '../../atoms/SectionTitle'
import { Container } from './styles'

const MenuBottom = ({ posts }) => {
  return (
    <Container>
      <SectionTitle title="Categories" strong />
      <div className="categories">
        <div className="category">
          <Link href={'/explore/seo'}>
            <Button rounded>
              <span>SEO</span>
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  )
}

export default MenuBottom
