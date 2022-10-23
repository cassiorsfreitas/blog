import { GetStaticProps } from 'next'
import { graphQLClient } from './api/graphql'
import Home from '../components/_pages/Home'
import generateRssFeed from '../lib/generateRssFeed'
import { PostInterface } from '../interfaces/postInterface'

type Props = {
  posts: PostInterface[]
}

export const Index = ({ posts }: Props) => {
  return <Home posts={posts} />
}

export default Index

export const getStaticProps: GetStaticProps = async () => {
  const query = `
    query {
      posts {
        metadata {
          id
          title
          excerpt
          date
          time
          cover
          slug
          category
          link
        }
      }
    }
  `

  const { data } = await graphQLClient.executeOperation({ query })
  await generateRssFeed(data.posts)

  return {
    props: {
      posts: data.posts
    }
  }
}
