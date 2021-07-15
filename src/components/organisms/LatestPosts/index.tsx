import React from 'react'
import PostCardMini from '../../atoms/PostCardMini'
import SectionDoubleTitle from '../../atoms/SectionDoubleTitle'
import { Container } from './styles'

import posts from '../../../constants/posts/posts'

const LatestPosts = () => {
  return (
    <Container>
      <SectionDoubleTitle
        titleMax="Results found"
        titleMin="67 results found in 23ms"
      />
      <div className="postCardContainer">
        {posts.map(post => {
          return (
            <div key={post.title}>
              <PostCardMini
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

export default LatestPosts
