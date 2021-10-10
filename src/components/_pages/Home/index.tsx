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
        title="Cássio Freitas - Web Developer"
        description="A blog by a full-stack developer, digital marketing and consumer experience enthusiast. Team Liquid fan and musician in his spare time."
        keyword="desenvolvedor full stack"
        cover="/cover-blog.png"
        slug="https://cassiorsfreitas.com/"
      />
      <MainContent>
        <Filter posts={posts} />
        <Recommendations posts={posts} />
      </MainContent>
    </LayoutMobile>
  )
}

export default Home
