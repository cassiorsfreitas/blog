import React from 'react'

import Filter from '../../molecules/Filter'
import HeadSeo from '../../organisms/HeadSeo'
import Recommendations from '../../organisms/Recommendations'
import LayoutMobile from '../../templates/LayoutMobile'
import MainContent from '../../templates/MainContent'

const Home = () => {
  return (
    <LayoutMobile>
      <HeadSeo
        title="Cássio Freitas"
        description="This is my personal website"
      />
      <MainContent>
        <Filter />
        <Recommendations />
      </MainContent>
    </LayoutMobile>
  )
}

export default Home
