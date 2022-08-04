import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { PostInterface } from '../../../interfaces/postInterface'
import Button from '../../atoms/Button'
import SectionTitle from '../../atoms/SectionTitle'
import { Container } from './styles'

type Props = {
  posts: PostInterface[]
}

const Filter = ({ posts }: Props) => {
  const [filters, setFilters] = useState<string[]>([])
  console.log('posts', posts)

  const generateFilters = () => {
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
    setFilters(filtersArray)
  }

  useEffect(() => {
    generateFilters()
  }, [])

  return (
    <Container>
      <SectionTitle title="Tags" strong />
      <div className="categories">
        {filters.map(filter => {
          return (
            <div className="category" key={filter}>
              <Link href={`/explore/${filter}`}>
                <a>
                  <Button rounded size="small">
                    <span>
                      {(
                        filter.charAt(0).toUpperCase() + filter.slice(1)
                      ).replace('-', ' ')}
                    </span>
                  </Button>
                </a>
              </Link>
            </div>
          )
        })}
      </div>
    </Container>
  )
}

export default Filter
