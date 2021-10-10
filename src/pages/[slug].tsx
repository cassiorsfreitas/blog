import fs from 'fs'
import path from 'path'
import { GetStaticPaths, GetStaticProps } from 'next'

import Slug from '../components/_pages/Slug'
import { getPostBySlug } from '../scripts/blog/getPostBySlug'

export default function PostPage({ metadata, content, slug }) {
  return <Slug metadata={metadata} content={content} slug={slug} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(path.join('_posts'))
  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.md', '')
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
  const { metadata, content } = getPostBySlug(slug)
  return {
    props: {
      metadata,
      content,
      slug
    }
  }
}
