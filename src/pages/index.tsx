import React from 'react'
import { GetStaticProps } from 'next'

import Home from '../components/_pages/Home'
import { getAllPosts } from '../scripts/blog/getAllPosts'

const Index = () => {
  return <Home />
}

export default Index

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts()
  console.log(posts)

  return {
    props: {
      posts
    }
  }
}
