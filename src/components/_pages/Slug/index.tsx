import React from 'react'
import LayoutMobile from '../../templates/LayoutMobile'
import SinglePost from '../../organisms/SinglePost'
import HeadSeo from '../../organisms/HeadSeo'

const Slug = ({ metadata, content, slug }) => {
  return (
    <>
      <HeadSeo
        title={`${metadata.title} - Cássio Freitas`}
        description={metadata.metadescription}
        keyword={metadata.keyword}
        cover={metadata.cover}
      />
      <LayoutMobile>
        <SinglePost metadata={metadata} content={content} slug={slug} />
      </LayoutMobile>
    </>
  )
}

export default Slug
