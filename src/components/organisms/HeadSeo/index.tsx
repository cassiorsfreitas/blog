import React from 'react'
import Head from 'next/head'
import { HeadSeoProps } from './interface'

const HeadSeo = ({ title, description, keyword }: HeadSeoProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="robots" content="nofollow" />
      <meta name="author" content="Cássio Freitas" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keyword}></meta>
      {/* <link rel="icon" href="/favicon.ico" /> */}
    </Head>
  )
}

export default HeadSeo
