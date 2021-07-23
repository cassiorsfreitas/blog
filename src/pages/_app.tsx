import React from 'react'
import { AppProps } from 'next/app'

import { GlobalProvider } from '../contexts/globalContext'
import { SearchProvider } from '../contexts/searchContext'
import ThemeWrapper from '../components/templates/ThemeWrapper'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalProvider>
      <ThemeWrapper>
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
