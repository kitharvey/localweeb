import type { AppProps } from 'next/app'
import Layout from '../components/Layout'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
  <Layout title="Home | Next.js + TypeScript Example">
    <Component {...pageProps} />
  </Layout>
  )
}