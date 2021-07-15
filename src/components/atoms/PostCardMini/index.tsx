import React from 'react'
import Image from 'next/image'
import { Container } from './styles'
import { FaClock } from 'react-icons/fa'
import { PostCardMiniProps } from './interface'

const PostCardMini = ({
  title,
  subtitle,
  time,
  date,
  imagePath
}: PostCardMiniProps) => {
  return (
    <Container>
      <div className="cardContainer">
        <div className="cardImage">
          <Image
            src={imagePath}
            alt="image"
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
    </Container>
  )
}

export default PostCardMini
