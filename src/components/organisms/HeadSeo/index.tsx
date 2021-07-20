import React from 'react'
import Head from 'next/head'
import { HeadSeoProps } from './interface'

const HeadSeo = ({ title, description }: HeadSeoProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* <link rel="icon" href="/favicon.ico" /> */}
    </Head>
  )
}

export default HeadSeo
