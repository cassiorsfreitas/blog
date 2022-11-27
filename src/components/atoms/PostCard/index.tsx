import Image from 'next/image'
import Link from 'next/link'
import { Container } from './styles'
import { FaClock } from 'react-icons/fa'
import { PostCardProps } from './interface'
import Tag from '../Tag'

const PostCard = ({
  title,
  subtitle,
  time,
  date,
  imagePath,
  link,
  category
}: PostCardProps) => {
  return (
    <Container data-testid="post-card">
      <Link href={`/${link}`}>
        <a>
          <div className="cardContainer">
            <div className="cardImage">
              <div className="tag">
                <Tag category={category} />
              </div>
              <Image
                src={imagePath}
                alt="Main card image"
                width={170}
                height={200}
                layout="responsive"
                objectFit="cover"
                className="cardImageIn"
                data-testid="image"
                priority
              />
            </div>
            <div className="cardDescription">
              <div className="content">
                <div className="title">{title}</div>
                <div className="subtitle">{subtitle}</div>
              </div>
              <div className="details">
                <div className="time">
                  <FaClock className="clockIcon" /> {time}
                </div>
                <div className="date">{date}</div>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </Container>
  )
}

export default PostCard
