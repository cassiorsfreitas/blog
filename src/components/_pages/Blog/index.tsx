import HeadSeo from '../../organisms/HeadSeo'
import LatestPosts from '../../organisms/LatestPosts'
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
      <MainContent>
        <LatestPosts posts={posts} />
      </MainContent>
    </>
  )
}

export default Blog
