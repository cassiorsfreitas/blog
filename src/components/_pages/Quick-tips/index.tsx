import SearchBar from '../../molecules/SearchBar'
import HeadSeo from '../../organisms/HeadSeo'
import LatestPosts from '../../organisms/LatestPosts'
import LayoutMobile from '../../templates/LayoutMobile'
import MainContent from '../../templates/MainContent'

const Quicktips = ({ posts }) => {
  return (
    <>
      <HeadSeo
        title="Front end - Cássio Freitas"
        description="This is a blog about web development"
        keyword="full stack developer"
        cover="https://cassiorsfreitas.com/cover-blog.png"
        slug="https://cassiorsfreitas.com/explore/quick-tips"
        canonical="https://cassiorsfreitas.com/explore/quick-tips"
      />
      <LayoutMobile>
        <MainContent>
          <SearchBar />
          <LatestPosts posts={posts} />
        </MainContent>
      </LayoutMobile>
    </>
  )
}

export default Quicktips
