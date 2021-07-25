import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from './styles'

import MainContent from '../../templates/MainContent'

const SinglePost = ({ metadata, content }) => {
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
        </div>
      </MainContent>
    </Container>
  )
}

export default SinglePost
