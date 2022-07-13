/* eslint-disable multiline-ternary */
// import Image from 'next/image'
import { useRouter } from 'next/router'
import { destroyCookie, parseCookies, setCookie } from 'nookies'
import React, { useEffect, useState } from 'react'
import { MdFavorite, MdFavoriteBorder, MdShare } from 'react-icons/md'
import Newsletter from '../../molecules/Newsletter'
import MainContent from '../../templates/MainContent'
import { Container } from './styles'

const SinglePost = ({ metadata, content }) => {
  const router = useRouter()
  const [liked, setLiked] = useState(false)
  const [urlCopied, seturlCopied] = useState('')
  const [messageCopied, setMessageCopied] = useState('')
  const [scaleUpVerTop, setScaleUpVerTop] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(urlCopied)
    setMessageCopied('URL copied successfully')
    setScaleUpVerTop(true)
  }

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

  useEffect(() => {
    const textToCopy = window.location.href
    seturlCopied(textToCopy)
  }, [])

  return (
    <Container>
      <MainContent>
        <div className="desktop">
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
              <a onClick={handleCopy}>
                <MdShare size={30} data-testid="share-icon" />
              </a>
              {liked ? (
                <MdFavorite
                  data-testid="like-icon"
                  size={30}
                  className="fav-icon"
                  onClick={handleLiked}
                />
              ) : (
                <MdFavoriteBorder
                  data-testid="unlike-icon"
                  size={30}
                  className="fav-icon"
                  onClick={handleLiked}
                />
              )}
            </div>
          </div>
          <div className={`message scale-${scaleUpVerTop}`}>
            <div className="message-content">{messageCopied}</div>
          </div>
          <div className="divider"></div>
          <Newsletter />
        </div>
      </MainContent>
    </Container>
  )
}

export default SinglePost
