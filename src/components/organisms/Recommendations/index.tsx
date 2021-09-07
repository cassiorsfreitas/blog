import React from 'react'
import PostCard from '../../atoms/PostCard'
import SectionDoubleTitle from '../../atoms/SectionDoubleTitle'
import { Container } from './styles'

import Button from '../../atoms/Button'
import router from 'next/router'

const Recommendations = ({ posts }) => {
  const recommendationSize = 4
  const items = posts.slice(0, recommendationSize)

  return (
    <Container>
      <SectionDoubleTitle titleMax="Recommendation" titleMin="Your Weekly" />
      <div className="postCardContainer">
        {items.map(post => {
          return (
            <div key={post.metadata.title} className="card">
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
            <span>Explore</span>
          </Button>
        </a>
      </div>
    </Container>
  )
}

export default Recommendations
