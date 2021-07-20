import React from 'react'
import PostCardMini from '../../atoms/PostCardMini'
import SectionDoubleTitle from '../../atoms/SectionDoubleTitle'
import { Container } from './styles'

const LatestPosts = ({ posts }) => {
  const numberOfResults = posts.length

  return (
    <Container>
      <SectionDoubleTitle
        titleMax="Results found"
        titleMin={`${numberOfResults} results found in 3ms`}
      />
      <div className="postCardContainer">
        {posts.map(post => {
          return (
            <div key={post.metadata.title}>
              <PostCardMini
                title={post.metadata.title}
                time={post.metadata.time}
                date={post.metadata.date}
                imagePath={post.metadata.cover}
                link={post.metadata.slug}
              />
            </div>
          )
        })}
      </div>
    </Container>
  )
}

export default LatestPosts
