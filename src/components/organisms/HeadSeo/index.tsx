import React from 'react'
import Head from 'next/head'
import { HeadSeoProps } from './interface'

const HeadSeo = ({
  title,
  description,
  keyword,
  cover,
  slug
}: HeadSeoProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="author" content="Cássio Freitas" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keyword} />
      {/* <link rel="icon" href="/favicon.ico" /> */}

      {/* <!-- Google / Search Engine Tags --> */}
      <meta itemProp="name" content="Cássio Freitas - Web Developer" />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={cover} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={slug} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" itemProp="image" content={cover} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={slug} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" itemProp="image" content={cover} />
    </Head>
  )
}

export default HeadSeo
