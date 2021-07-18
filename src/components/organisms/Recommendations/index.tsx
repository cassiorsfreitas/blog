import React from 'react'
import PostCard from '../../atoms/PostCard'
import SectionDoubleTitle from '../../atoms/SectionDoubleTitle'
import { Container } from './styles'

import Button from '../../atoms/Button'

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
              />
            </div>
          )
        })}
      </div>
      <div className="more">
        <Button rounded fullWidth className="simple-button">
          <span>See more</span>
        </Button>
      </div>
    </Container>
  )
}

export default Recommendations
