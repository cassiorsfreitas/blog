/* eslint-disable prefer-const */
/* eslint-disable indent */
import React, { useContext } from 'react'
import { SearchContext } from '../../../contexts/searchContext'
import PostCardMini from '../../atoms/PostCardMini'
import SectionDoubleTitle from '../../atoms/SectionDoubleTitle'

import { Container } from './styles'

const CategoriesPosts = ({ posts }) => {
  const numberOfResults = posts.length
  const { search } = useContext(SearchContext)

  const handleSearch = () => {
    return search
      ? posts.filter(post => {
          return post.title.toLowerCase().includes(search.toLowerCase())
        })
      : posts
  }

  const filteredPosts = handleSearch()

  return (
    <Container>
      <SectionDoubleTitle
        titleMax="Results found"
        titleMin={`${numberOfResults} results found in 3ms`}
      />
      <div className="postCardContainer">
        {filteredPosts.map(post => {
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

export default CategoriesPosts
