import HeadSeo from '../../HeadSeo'
import MainContent from '../../templates/MainContent'

const Blog = ({ posts }) => {
  return (
    <>
      <HeadSeo
        title="Explore - Cássio Freitas"
        description="This is a blog about web development"
        keyword="full stack developer"
        cover="https://cassiorsfreitas.com/cover-blog.png"
        slug="https://cassiorsfreitas.com/explore"
        canonical="https://cassiorsfreitas.com/explore"
      />
      <MainContent>Blog</MainContent>
    </>
  )
}

export default Blog
