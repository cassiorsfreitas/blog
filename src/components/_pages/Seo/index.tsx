import React from 'react'
import SearchBar from '../../molecules/SearchBar'
import HeadSeo from '../../organisms/HeadSeo'
import LatestPosts from '../../organisms/LatestPosts'
import LayoutMobile from '../../templates/LayoutMobile'
import MainContent from '../../templates/MainContent'

const Seo = ({ posts }) => {
  return (
    <>
      <HeadSeo
        title="Seo - Cássio Freitas"
        description="This is my personal website"
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

export default Seo
