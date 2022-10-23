import { GetStaticProps } from 'next'
import Fav from '../../components/_pages/Fav'
import { graphQLClient } from '../api/graphql'
import { parseCookies } from 'nookies'

const Index = ({ posts }) => {
  const cookies = parseCookies()

  const filteredPosts = posts.filter(
    post => cookies['FAVPOST' + post.metadata.id] !== undefined
  )

  return <Fav posts={filteredPosts} />
}

export default Index

export const getStaticProps: GetStaticProps = async () => {
  const query = `
    query {
      posts {
        metadata {
          id
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
