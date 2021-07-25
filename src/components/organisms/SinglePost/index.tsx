import React from 'react'
import Image from 'next/image'
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
        <div className="text-content">
          <h4>
            {metadata.time} • {metadata.date}
          </h4>
          <h1>{metadata.title}</h1>
          <h3>{metadata.excerpt}</h3>

          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        </div>
      </MainContent>
    </Container>
  )
}

export default SinglePost
