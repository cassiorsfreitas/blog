import React from 'react'
import Head from 'next/head'
import { HeadSeoProps } from './interface'

const HeadSeo = ({ title, description, keyword, cover }: HeadSeoProps) => {
  const currentCover = cover || '/cover-blog.png'

  return (
    <Head>
      <title>{title}</title>
      <meta name="robots" content="nofollow" />
      <meta name="author" content="Cássio Freitas" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keyword} />
      {/* <link rel="icon" href="/favicon.ico" /> */}

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://cassiorsfreitas.com/" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        itemProp="image"
        content={`https://cassiorsfreitas.com${currentCover}`}
      />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://cassiorsfreitas.com/" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta
        property="twitter:image"
        itemProp="image"
        content={`https://cassiorsfreitas.com${currentCover}`}
      />
    </Head>
  )
}

export default HeadSeo
