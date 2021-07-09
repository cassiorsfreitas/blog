import React from 'react'
import PostCard from '../../atoms/PostCard'
import SectionDoubleTitle from '../../atoms/SectionDoubleTitle'
import { Container } from './styles'

import posts from '../../../constants/posts/posts'

const Recommendations = () => {
  return (
    <Container>
      <SectionDoubleTitle titleMax="Recommendation" titleMin="Your Daily" />
      <div className="postCardContainer">
        {posts.map(post => {
          return (
            <div key={post.title}>
              <PostCard
                title={post.title}
                subtitle={post.description}
                time={post.time}
                date={post.date}
                imagePath={post.cover}
              />
            </div>
          )
        })}
      </div>
    </Container>
  )
}

export default Recommendations
