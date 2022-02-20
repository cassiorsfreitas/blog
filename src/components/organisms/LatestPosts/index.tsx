/* eslint-disable prefer-const */
/* eslint-disable indent */
import React, { useContext } from 'react'
import { SearchContext } from '../../../contexts/searchContext'
import PostCardMini from '../../atoms/PostCardMini'
import SectionDoubleTitle from '../../atoms/SectionDoubleTitle'

import { Container } from './styles'

const LatestPosts = ({ posts }) => {
  const { search } = useContext(SearchContext)

  const handleSearch = () => {
    return search
      ? posts.filter(post => {
          return post.metadata.title
            .toLowerCase()
            .includes(search.toLowerCase())
        })
      : posts
  }

  const numberOfPosts = posts?.length
  const filteredPosts = handleSearch()
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
