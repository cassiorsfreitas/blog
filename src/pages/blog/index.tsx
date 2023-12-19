import { GetStaticProps } from 'next'
import { PostInterface } from '../../interfaces/post'
import { graphQLClient } from '../api/graphql'
import HeadSeo from '../../components/HeadSeo'

type Props = {
  posts: PostInterface[]
}
const Index = ({ posts }: Props) => {
  console.log(posts)
  return (
    <>
      <HeadSeo
        title="Cássio Freitas - Software Engineer"
        description="A blog by a full-stack developer, digital marketing and consumer experience enthusiast. Team Liquid fan and musician in his spare time."
        keyword="software engineer"
        cover="https://cassiorsfreitas.com/cover-blog.png"
        slug="https://cassiorsfreitas.com/"
        canonical="https://cassiorsfreitas.com/"
      />
      Im Cássio Freitas
    </>
  )
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
