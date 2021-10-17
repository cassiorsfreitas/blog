import { GetStaticProps } from 'next'
import React from 'react'
import Devops from '../../../components/_pages/Devops'
import { graphQLClient } from '../../api/graphql'

const Index = ({ posts }) => {
  return <Devops posts={posts} />
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

  data.posts.map(post => console.log(post.metadata.category))

  const dataFiltered = data.posts.filter(
    post => post.metadata.category === 'DevOps'
  )
  return {
    props: {
      posts: dataFiltered
    }
  }
}
