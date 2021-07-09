import React from 'react'
import { AppProps } from 'next/app'

import { GlobalProvider } from '../contexts/globalContext'
import ThemeWrapper from '../components/templates/ThemeWrapper'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalProvider>
      <ThemeWrapper>
        <main>
          <Component {...pageProps} />
        </main>
      </ThemeWrapper>
    </GlobalProvider>
  )
}

export default MyApp
