import { GetStaticPaths, GetStaticProps } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import remarkHTML from 'remark-html'
// import Image from 'next/image'
import LayoutMobile from '../components/templates/LayoutMobile'
import MainContent from '../components/templates/MainContent'

export default function PostPage() {
  return (
    <LayoutMobile>
      <MainContent>
        {/* <h1>{title}</h1>
        {content}
        {excerpt}
        {date}
        {time}

        <div className="post-image">
          <Image
            src={`${cover}`}
            layout="responsive"
            width={200}
            height={170}
            alt="image"
          />
        </div> */}
      </MainContent>
    </LayoutMobile>
  )
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
  const markdownWithMeta = fs.readFileSync(`./_posts/${slug}.md`, 'utf-8')
  const { data: metadata, content } = matter(markdownWithMeta)
  const htmlContent = remark().use(remarkHTML).processSync(content).toString()

  console.log(htmlContent)
  return {
    props: {
      metadata,
      content
    }
  }
}
