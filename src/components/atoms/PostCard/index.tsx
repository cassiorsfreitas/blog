import React from 'react'
import Image from 'next/image'
import { Container } from './styles'
import { FaClock } from 'react-icons/fa'
import { PostCardProps } from './interface'

const PostCard = ({
  title,
  subtitle,
  time,
  date,
  imagePath
}: PostCardProps) => {
  return (
    <Container>
      <div className="cardContainer">
        <div className="cardImage">
          <Image
            src={imagePath}
            alt="image"
            height={170}
            width={200}
            layout="responsive"
            className="cardImageIn"
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
    </Container>
  )
}

export default PostCard
