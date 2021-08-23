/* eslint-disable multiline-ternary */
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import MainContent from '../../templates/MainContent'
import { MdFavoriteBorder, MdFavorite, MdShare } from 'react-icons/md'

import { Container } from './styles'

const SinglePost = ({ metadata, content }) => {
  const [liked, setLiked] = useState(false)

  const handleLiked = () => {
    setLiked(!liked)
  }

  return (
    <Container>
      <div className="post-image">
        <Image
          src={`${metadata.cover}`}
          layout="responsive"
          width={200}
          height={170}
          alt="image"
        />
      </div>
      <MainContent>
        <div className="tag">{metadata.category}</div>
        <div className="text-content">
          <h1>{metadata.title}</h1>
          <h4>
            {metadata.time} • {metadata.date}
          </h4>
          <h3>{metadata.excerpt}</h3>

          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        </div>
        <div className="backToList">
          <Link href="/explore">← back to list</Link>
          <div className="favorite">
            <MdShare size={30} />
            {liked ? (
              <MdFavorite
                size={30}
                className="fav-icon"
                onClick={handleLiked}
              />
            ) : (
              <MdFavoriteBorder
                size={30}
                className="fav-icon"
                onClick={handleLiked}
              />
            )}
          </div>
        </div>
      </MainContent>
    </Container>
  )
}

export default SinglePost
