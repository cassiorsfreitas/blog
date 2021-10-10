/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import fs from 'fs'
import path from 'path'

import React from 'react'

const Sitemap = () => {}

export const getServerSideProps = ({ res }) => {
  const files = fs.readdirSync(path.join('_posts'))
  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.md', '')
    }
  }))

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://cassiorsfreitas.com/</loc>
      <changefreq>monthly</changefreq>
      <priority>1.0</priority>
    </url>
    <url>
      <loc>https://cassiorsfreitas.com/explore</loc>
      <changefreq>monthly</changefreq>
      <priority>1.0</priority>
    </url>
    <url>
      <loc>https://cassiorsfreitas.com/fav</loc>
      <changefreq>monthly</changefreq>
      <priority>1.0</priority>
    </url>
    <url>
      <loc>https://cassiorsfreitas.com/profile</loc>
      <changefreq>monthly</changefreq>
      <priority>1.0</priority>
    </url>
    <url>
      <loc>https://cassiorsfreitas.com/seo</loc>
      <changefreq>monthly</changefreq>
      <priority>0.9</priority>
    </url>
    <url>
      <loc>https://cassiorsfreitas.com/frontend</loc>
      <changefreq>monthly</changefreq>
      <priority>0.9</priority>
    </url>
    ${paths.map(post => {
      return `
      <url>
        <loc>https://cassiorsfreitas.com/${post.params.slug}</loc>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
      `
    })}
    </urlset>
  `

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {}
  }
}

export default Sitemap
