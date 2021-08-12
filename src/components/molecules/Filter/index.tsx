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
              <Link href={`/explore/${post.metadata.link}`}>
                <Button rounded>
                  <span>{post.metadata.category}</span>
                </Button>
              </Link>
            </div>
          )
        })}
      </div>
    </Container>
  )
}

export default MenuBottom
