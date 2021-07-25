import React from 'react'
import { GetStaticProps } from 'next'
import PropTypes from 'prop-types'

import { graphQLClient } from './api/graphql'
import Home from '../components/_pages/Home'

export const Index = ({ posts }) => {
  return <Home posts={posts} />
}

export default Index

Index.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      metadata: PropTypes.shape({
        title: PropTypes.string,
        excerpt: PropTypes.string
      })
    })
  ).isRequired
}

export const getStaticProps: GetStaticProps = async () => {
  const query = `
    query {
      posts {
        metadata {
          title
          excerpt
          date
          time
          cover
          slug
          category
        }
      }
    }
  `

  const { data } = await graphQLClient.executeOperation({ query })

  return {
    props: {
      posts: data.posts
    }
  }
}
