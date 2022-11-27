import Image from 'next/image'
import Link from 'next/link'
import { Container } from './styles'
import { FaClock } from 'react-icons/fa'
import { PostCardMiniProps } from './interface'

const PostCardMini = ({
  title,
  time,
  date,
  imagePath,
  link
}: PostCardMiniProps) => {
  return (
    <Container data-testid="post-card-mini">
      <Link href={`/${link}`}>
        <a>
          <div className="cardContainer">
            <div className="cardImage">
              <Image
                src={imagePath}
                alt="Main mini card image"
                layout="fill"
                objectFit="cover"
                className="cardImageIn"
              />
            </div>
            <div className="cardDescription">
              <div className="content">
                <div className="title">{title}</div>
              </div>
              <div className="details">
                <div className="time">
                  <FaClock className="clockIcon" />
                  {time}
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

export default PostCardMini
