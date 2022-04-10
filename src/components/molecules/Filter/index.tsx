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
            <a>
              <Button rounded size="small">
                <span>SEO</span>
              </Button>
            </a>
          </Link>
        </div>
        <div className="category">
          <Link href={'/explore/front-end'}>
            <a>
              <Button rounded size="small">
                <span>Front end</span>
              </Button>
            </a>
          </Link>
        </div>
        <div className="category">
          <Link href={'/explore/devops'}>
            <a>
              <Button rounded size="small">
                <span>DevOps</span>
              </Button>
            </a>
          </Link>
        </div>
      </div>
    </Container>
  )
}

export default MenuBottom
