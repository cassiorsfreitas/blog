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
      <meta name="author" content="Cássio Freitas"></meta>
      <meta name="description" content={description}></meta>
      <meta name="keywords" content={keyword}></meta>

      <meta property="og:type" content="website"></meta>
      <meta property="og:url" content={slug}></meta>
      <meta property="og:title" content={title}></meta>
      <meta property="og:description" content={description}></meta>
      <meta property="og:image" content={cover}></meta>

      <meta property="twitter:card" content="summary_large_image"></meta>
      <meta property="twitter:url" content={slug}></meta>
      <meta property="twitter:title" content={title}></meta>
      <meta property="twitter:description" content={description}></meta>
      <meta property="twitter:image" content={cover}></meta>
    </Head>
  )
}

export default HeadSeo
