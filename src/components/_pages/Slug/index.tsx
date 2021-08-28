import React from 'react'
import LayoutMobile from '../../templates/LayoutMobile'
import SinglePost from '../../organisms/SinglePost'
import HeadSeo from '../../organisms/HeadSeo'

const Slug = ({ metadata, content }) => {
  return (
    <>
      <HeadSeo
        title={`${metadata.title} - Cássio Freitas`}
        description={metadata.metadescription}
        keyword={metadata.keyword}
      />
      <LayoutMobile>
        <SinglePost metadata={metadata} content={content} />
      </LayoutMobile>
    </>
  )
}

export default Slug
