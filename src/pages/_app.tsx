import React from 'react'
import { AppProps } from 'next/app'
// eslint-disable-next-line no-unused-vars
import NextNprogress from 'nextjs-progressbar'

import { GlobalProvider } from '../contexts/globalContext'
import { SearchProvider } from '../contexts/searchContext'
import ThemeWrapper from '../components/templates/ThemeWrapper'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalProvider>
      <ThemeWrapper>
        <NextNprogress color="#FFC72C" />
        <SearchProvider>
          <main>
            <Component {...pageProps} />
          </main>
        </SearchProvider>
      </ThemeWrapper>
    </GlobalProvider>
  )
}

export default MyApp
