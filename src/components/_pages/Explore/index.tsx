import React from 'react'
import SearchBar from '../../molecules/SearchBar'
import LatestPosts from '../../organisms/LatestPosts'
import LayoutMobile from '../../templates/LayoutMobile'
import MainContent from '../../templates/MainContent'

const Explore = () => {
  return (
    <LayoutMobile>
      <MainContent>
        <SearchBar />
        <LatestPosts />
      </MainContent>
    </LayoutMobile>
  )
}

export default Explore
