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
        {posts.map(post => {
          return (
            <div key={post.metadata.category} className="category">
              <Button rounded>
                <Link href={`/explore/${post.metadata.link}`}>
                  <span>{post.metadata.category}</span>
                </Link>
              </Button>
            </div>
          )
        })}
      </div>
    </Container>
  )
}

export default MenuBottom
