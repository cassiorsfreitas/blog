/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import fs from 'fs'
import path from 'path'
import { renderToStaticMarkup } from 'react-dom/server'
import React from 'react'

const Sitemap = () => null

const GetSiteMap = ({ pages }) => {
  return (
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://cassiorsfreitas.com/</loc>
        <changefreq>monthly</changefreq>
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
      {console.log(pages)}
      {pages?.map((page, index) => {
        return (
          <url key={index}>
            <loc>{`https://cassiorsfreitas.com/${page.params.slug}`}</loc>
            <changefreq>monthly</changefreq>
            <priority>0.8</priority>
          </url>
        )
      })}
    </urlset>
  )
}

export const getServerSideProps = ({ res }) => {
  const files = fs.readdirSync(path.join('_posts'))
  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.md', '')
    }
  }))

  res.setHeader('Content-Type', 'text/xml')
  res.write(renderToStaticMarkup(<GetSiteMap pages={paths} />))
  res.end()

  return {
    props: {}
  }
}

export default Sitemap
