import React from 'react'
import SearchBar from '../../molecules/SearchBar'
import LayoutMobile from '../../templates/LayoutMobile'
import MainContent from '../../templates/MainContent'

const Explore = () => {
  return (
    <LayoutMobile>
      <MainContent>
        <SearchBar />
      </MainContent>
    </LayoutMobile>
  )
}

export default Explore
