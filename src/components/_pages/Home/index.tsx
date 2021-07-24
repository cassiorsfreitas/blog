import React from 'react'

import Filter from '../../molecules/Filter'
import HeadSeo from '../../organisms/HeadSeo'
import Recommendations from '../../organisms/Recommendations'
import LayoutMobile from '../../templates/LayoutMobile'
import MainContent from '../../templates/MainContent'

const Home = ({ posts }) => {
  return (
    <LayoutMobile>
      <HeadSeo
        title="Cássio Freitas"
        description="This is my personal website"
      />
      <MainContent>
        <Filter posts={posts} />
        <Recommendations posts={posts} />
      </MainContent>
    </LayoutMobile>
  )
}

export default Home
