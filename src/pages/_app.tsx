import React from 'react'
import { AppProps } from 'next/app'
import ThemeWrapper from '../components/templates/ThemeWrapper'

function MyApp({ Component, pageProps }: AppProps) {
  console.log('Have a great day! 📣🦖')

  return (
    <ThemeWrapper>
      <>
        <main>
          <Component {...pageProps} />
        </main>
      </>
    </ThemeWrapper>
  )
}

export default MyApp
