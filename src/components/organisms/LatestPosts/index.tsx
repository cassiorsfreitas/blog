import React from 'react'
import PostCardMini from '../../atoms/PostCardMini'
import SectionDoubleTitle from '../../atoms/SectionDoubleTitle'

import { Container } from './styles'

const LatestPosts = ({ posts }) => {
  const numberOfPosts = posts?.length
  const filteredPosts = posts.filter(post => {
    return post.metadata.title.toLowerCase()
  })
  const numberOfResults = filteredPosts.length

  return (
    <Container>
      <SectionDoubleTitle
        titleMax="Results found"
        titleMin={`${numberOfResults} results found in ${numberOfPosts} posts`}
      />
      <div className="postCardContainer">
        {filteredPosts.map(post => {
          return (
            <div key={post.metadata.title} className="card">
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
