import { GetStaticProps } from 'next'
import Quicktips from '../../../components/_pages/Quick-tips'
import { graphQLClient } from '../../api/graphql'

const Index = ({ posts }) => {
  return <Quicktips posts={posts} />
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

  const dataFiltered = data.posts.filter(
    post => post.metadata.category === 'Quick tips'
  )
  return {
    props: {
      posts: dataFiltered
    }
  }
}
