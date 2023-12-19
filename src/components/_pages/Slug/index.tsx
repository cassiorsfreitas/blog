import SinglePost from '../../organisms/SinglePost'

const Slug = ({ metadata, content, slug }) => {
  return (
    <>
      {/* <HeadSeo
        title={`${metadata.title} - Cássio Freitas`}
        description={metadata.metadescription}
        keyword={metadata.metakeyword}
        cover={`https://cassiorsfreitas.com${metadata.cover}`}
        slug={`https://cassiorsfreitas.com/${slug}`}
        canonical={`https://cassiorsfreitas.com/${slug}`}
      /> */}
      <SinglePost metadata={metadata} content={content} />
    </>
  )
}

export default Slug
