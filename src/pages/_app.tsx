import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'
import NextNprogress from 'nextjs-progressbar'
import { GlobalProvider } from '../contexts/globalContext'
import { SearchProvider } from '../contexts/searchContext'
import ThemeWrapper from '../components/templates/ThemeWrapper'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

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
