/* eslint-disable multiline-ternary */
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { setCookie, parseCookies, destroyCookie } from 'nookies'

import MainContent from '../../templates/MainContent'
import { MdFavoriteBorder, MdFavorite, MdShare } from 'react-icons/md'

import { Container } from './styles'

const SinglePost = ({ metadata, content }) => {
  const router = useRouter()
  const [liked, setLiked] = useState(false)

  const handleLiked = () => {
    setLiked(!liked)
    handleCookies()
  }

  const handleCookies = () => {
    if (liked) {
      destroyCookie(null, `FAVPOST${metadata.id}`)
    } else {
      setCookie(null, `FAVPOST${metadata.id}`, `${metadata.title}`, {
        path: '/'
      })
    }
  }

  useEffect(() => {
    const cookies = parseCookies()
    cookies['FAVPOST' + metadata.id] ? setLiked(true) : setLiked(false)
  }, [])

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
          <a onClick={() => router.back()}>← back to list</a>
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
