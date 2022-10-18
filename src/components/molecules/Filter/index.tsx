import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { PostInterface } from '../../../interfaces/postInterface'
import { generateFilters } from '../../../lib/generateFilters'
import Button from '../../atoms/Button'
import SectionTitle from '../../atoms/SectionTitle'
import { Container } from './styles'

type Props = {
  posts: PostInterface[]
}

const Filter = ({ posts }: Props) => {
  const [filters, setFilters] = useState<string[]>([])

  useEffect(() => {
    const filtersArray = generateFilters(posts)
    setFilters(filtersArray)
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
