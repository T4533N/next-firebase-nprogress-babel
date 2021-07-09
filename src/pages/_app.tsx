/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import dynamic from 'next/dynamic'
import { FuegoProvider } from '@nandorojo/swr-firestore'

import { config } from '@lib/init-firebase'
import { Fuego } from '@lib/fuego'
import SEO from '../../next-seo.config'
import '../styles/index.css'
import 'nprogress/nprogress.css'

const fuego = new Fuego(config)

const TopProgressBar: any = dynamic(
  () => {
    return import('@components/top-progress-bar')
  },
  { ssr: false }
)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <FuegoProvider fuego={fuego}>
        <TopProgressBar />
        <Component {...pageProps} />
      </FuegoProvider>
    </>
  )
}

export default MyApp
