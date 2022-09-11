import { PostInterface } from '../interfaces/postInterface'

export const generateFilters = (posts: PostInterface[]) => {
  const filtersArray = []
  // eslint-disable-next-line array-callback-return
  posts.map(post => {
    if (
      post.metadata.category.includes('Front end') &&
      !filtersArray.includes('front-end')
    ) {
      filtersArray.push('front-end')
    }
    if (
      post.metadata.category.includes('SEO') &&
      !filtersArray.includes('seo')
    ) {
      filtersArray.push('seo')
    }
    if (
      post.metadata.category.includes('DevOps') &&
      !filtersArray.includes('devops')
    ) {
      filtersArray.push('devops')
    }
    if (
      post.metadata.category.includes('Quick tips') &&
      !filtersArray.includes('quick-tips')
    ) {
      filtersArray.push('quick-tips')
    }
  })
  return filtersArray
}
