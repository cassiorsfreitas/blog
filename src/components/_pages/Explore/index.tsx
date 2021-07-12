import React from 'react'
import SectionDoubleTitle from '../../atoms/SectionDoubleTitle'
import SearchBar from '../../molecules/SearchBar'
import LayoutMobile from '../../templates/LayoutMobile'
import MainContent from '../../templates/MainContent'

const Explore = () => {
  return (
    <LayoutMobile>
      <MainContent>
        <SearchBar />
        <SectionDoubleTitle
          titleMin="67 results found in 23ms"
          titleMax="Results found"
        />
      </MainContent>
    </LayoutMobile>
  )
}

export default Explore
