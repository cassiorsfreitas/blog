import React from 'react'
import HeadSeo from '../../organisms/HeadSeo'

import LayoutMobile from '../../templates/LayoutMobile'

const Home = () => {
  return (
    <LayoutMobile>
      <HeadSeo
        title="Cássio Freitas"
        description="This is my personal website"
      />
      <main>
        <h1>Hello World</h1>
      </main>
    </LayoutMobile>
  )
}

export default Home
