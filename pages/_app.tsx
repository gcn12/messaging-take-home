import type { AppProps } from 'next/app'
import GlobalStyles from '../Components/GlobalStyles'
import styled from 'styled-components'
import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com"/> 
        <link href="https://fonts.googleapis.com/css2?family=Karla:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
      </Head>
      <style global jsx>{`
      html,
      body,
      body > div:first-child,
      div#__next,
      div#__next > div {
        height: 100%;
      }
    `}</style>
      <GlobalStyles />
      <Component {...pageProps} />
    </Container>
  )
}

export default MyApp

const Container = styled.div`
`