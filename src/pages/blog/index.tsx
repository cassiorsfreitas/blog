import { GetStaticProps } from 'next'
import Blog from '../../components/_pages/Blog'
import { PostInterface } from '../../interfaces/postInterface'
import { graphQLClient } from '../api/graphql'

type Props = {
  posts: PostInterface[]
}
const Index = ({ posts }: Props) => {
  return <Blog posts={posts} />
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
          link
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
