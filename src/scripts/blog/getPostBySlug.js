import fs from 'fs'
import matter from 'gray-matter'
import remark from 'remark'
import remarkHTML from 'remark-html'

export function getPostBySlug(slug) {
  const markdownWithMeta = fs.readFileSync(`./_posts/${slug}.md`, 'utf-8')
  const { data: metadata, content } = matter(markdownWithMeta)
  const htmlContent = remark().use(remarkHTML).processSync(content).toString()

  return {
    metadata: {
      ...metadata
    },
    content: htmlContent
  }
}
