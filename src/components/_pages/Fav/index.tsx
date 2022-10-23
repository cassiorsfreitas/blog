import SectionTitle from '../../atoms/SectionTitle'
import SearchBar from '../../molecules/SearchBar'
import HeadSeo from '../../organisms/HeadSeo'
import LatestPosts from '../../organisms/LatestPosts'
import LayoutMobile from '../../templates/LayoutMobile'
import MainContent from '../../templates/MainContent'

const Fav = ({ posts }) => {
  return (
    <>
      <HeadSeo
        title="Fav - Cássio Freitas"
        description="This is a blog about web development"
        keyword="full stack developer"
        cover="https://cassiorsfreitas.com/cover-blog.png"
        slug="https://cassiorsfreitas.com/fav"
        canonical="https://cassiorsfreitas.com/fav"
      />
      <LayoutMobile>
        <MainContent>
          <SearchBar />
          <SectionTitle title="Your favorite posts:" />
          <LatestPosts posts={posts} />
        </MainContent>
      </LayoutMobile>
    </>
  )
}

export default Fav
