import { GetStaticProps } from 'next'
import React from 'react'
import Explore from '../../components/_pages/Explore'
import { graphQLClient } from '../api/graphql'

const Index = ({ posts }) => {
  return <Explore posts={posts} />
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
        }
      }
    }
  `

  const { data } = await graphQLClient.executeOperation({ query })
  console.log(data.posts)

  return {
    props: {
      posts: data.posts
    }
  }
}
