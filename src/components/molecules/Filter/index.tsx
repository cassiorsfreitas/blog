import Link from 'next/link'
import React from 'react'
import Button from '../../atoms/Button'
import SectionTitle from '../../atoms/SectionTitle'
import { Container } from './styles'

export interface FilterProps {
  filters: string[]
}

const Filter = ({ filters }: FilterProps) => {
  return (
    <Container data-testid="filter-component">
      <SectionTitle title="Tags" strong />
      <div className="categories">
        {filters.map(filter => {
          return (
            <div className="category" key={filter} data-testid="category">
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
