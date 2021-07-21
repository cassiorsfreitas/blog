import React from 'react'
import LayoutMobile from '../../templates/LayoutMobile'
import SinglePost from '../../organisms/SinglePost'

const Slug = ({ metadata, content }) => {
  return (
    <LayoutMobile>
      <SinglePost metadata={metadata} content={content} />
    </LayoutMobile>
  )
}

export default Slug
