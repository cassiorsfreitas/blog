/* eslint-disable indent */
import router from 'next/router'
import { Container } from './styles'

import PostCard from '../../atoms/PostCard'
import SectionDoubleTitle from '../../atoms/SectionDoubleTitle'
import { MdSearch } from 'react-icons/md'
import postOrganizer from '../../../lib/sortingPosts'

const Recommendations = ({ posts }) => {
  const organizer = postOrganizer()
  const sortedPosts = organizer.descending(posts, 5)

  return (
    <Container>
      <SectionDoubleTitle titleMax="Written" titleMin="Latest posts" />
      <div className="postCardContainer">
        {sortedPosts.map(post => {
          return (
            <div key={post.metadata.title} className="card">
              <PostCard
                title={post.metadata.title}
                subtitle={post.metadata.excerpt}
                time={post.metadata.time}
                date={post.metadata.date}
                imagePath={post.metadata.cover}
                link={post.metadata.slug}
                category={post.metadata.category}
              />
            </div>
          )
        })}
        <div className="card explore" onClick={() => router.push('/explore')}>
          <MdSearch />
        </div>
      </div>
    </Container>
  )
}

export default Recommendations
