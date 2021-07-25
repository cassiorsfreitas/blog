import { GetStaticProps } from 'next'
import React from 'react'
import Seo from '../../../components/_pages/Seo'
import { graphQLClient } from '../../api/graphql'

const Index = ({ posts }) => {
  return <Seo posts={posts} />
}

export default Index

export const getStaticProps: GetStaticProps = async () => {
  const query = `
    query {
      posts {
        metadata {
          title
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
  const categories = data.posts.map(post =>
    post.metadata.category.toLowerCase().replace(' ', '')
  )

  console.log(categories)

  return {
    props: {
      posts: data.posts
    }
  }
}
