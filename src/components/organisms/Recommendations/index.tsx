import React from 'react'
import PostCard from '../../atoms/PostCard'
import SectionDoubleTitle from '../../atoms/SectionDoubleTitle'
import { Container } from './styles'

import Button from '../../atoms/Button'
import router from 'next/router'

const Recommendations = ({ posts }) => {
  const recommendationSize = 2
  const items = posts.slice(0, recommendationSize)

  return (
    <Container>
      <SectionDoubleTitle titleMax="Recommendation" titleMin="Your Daily" />
      <div className="postCardContainer">
        {items.map(post => {
          return (
            <div key={post.metadata.title}>
              <PostCard
                title={post.metadata.title}
                subtitle={post.metadata.excerpt}
                time={post.metadata.time}
                date={post.metadata.date}
                imagePath={post.metadata.cover}
                link={post.metadata.slug}
                category={post.metadata.category}
              />
            </div>
          )
        })}
      </div>
      <div className="more">
        <a>
          <Button
            rounded
            fullWidth
            className="simple-button"
            onClick={() => router.push('/explore')}
          >
            <span>See more</span>
          </Button>
        </a>
      </div>
    </Container>
  )
}

export default Recommendations
