import React from 'react'
import { AppProps } from 'next/app'
import NextNprogress from 'nextjs-progressbar'
import { GlobalProvider } from '../contexts/globalContext'
import ThemeWrapper from '../components/templates/ThemeWrapper'

function MyApp({ Component, pageProps }: AppProps) {
  console.log('Have a great day! 📣🦖')

  return (
    <GlobalProvider>
      <ThemeWrapper>
        <NextNprogress color="#FFC72C" />
        <>
          <main>
            <Component {...pageProps} />
          </main>
        </>
      </ThemeWrapper>
    </GlobalProvider>
  )
}

export default MyApp
