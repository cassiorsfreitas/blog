import fs from 'fs'
import grayMatter from 'gray-matter'
import remark from 'remark'
import remarkHTML from 'remark-html'

export function getAllPosts() {
  const allPostsFileNames = fs.readdirSync('./_posts')

  const posts = allPostsFileNames.map(fileName => {
    const fileContents = fs.readFileSync(`./_posts/${fileName}`, 'utf-8')
    const { content, data: metadata } = grayMatter(fileContents)

    const htmlContent = remark().use(remarkHTML).processSync(content).toString()
    return {
      metadata: {
        ...metadata,
        slug: fileName.replace('.md', '')
      },
      content: htmlContent
    }
  })

  console.log(posts)

  return posts
}
