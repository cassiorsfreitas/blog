import { GetStaticProps } from 'next'
import Explore from '../../components/_pages/Explore'
import { PostInterface } from '../../interfaces/postInterface'
import { graphQLClient } from '../api/graphql'

type Props = {
  posts: PostInterface[]
}
const Index = ({ posts }: Props) => {
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
