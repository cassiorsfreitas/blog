import { PostInterface } from '../interfaces/postInterface'

type Filter = {
  category: string
  name: string
}

const filters: Filter[] = [
  { category: 'Front end', name: 'front-end' },
  { category: 'SEO', name: 'seo' },
  { category: 'DevOps', name: 'devops' },
  { category: 'Quick tips', name: 'quick-tips' }
]

export const generateFilters = (posts: PostInterface[]) => {
  const filtersSet = new Set<string>()

  posts.forEach(post => {
    filters.forEach(filter => {
      if (post.metadata.category.includes(filter.category)) {
        filtersSet.add(filter.name)
      }
    })
  })

  const filtersArray = Array.from(filtersSet)

  return filtersArray
}
