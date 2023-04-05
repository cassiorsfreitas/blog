import React from 'react'
import { AppProps } from 'next/app'
import NextNprogress from 'nextjs-progressbar'
import { GlobalProvider } from '../contexts/globalContext'
import { SearchProvider } from '../contexts/searchContext'
import ThemeWrapper from '../components/templates/ThemeWrapper'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  console.log('Have a great day! 📣🦖')

  return (
    <GlobalProvider>
      <ThemeWrapper>
        <NextNprogress color="#FFC72C" />
        <SearchProvider>
          <>
            <Script
              strategy="lazyOnload"
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
            />

            <Script strategy="lazyOnload" id="google-script">
              {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
            </Script>
            <main>
              <Component {...pageProps} />
            </main>
          </>
        </SearchProvider>
      </ThemeWrapper>
    </GlobalProvider>
  )
}

export default MyApp
