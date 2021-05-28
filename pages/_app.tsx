import type { AppProps } from 'next/app'
import { useState } from 'react'
import GlobalStyles from '../Components/GlobalStyles'
import styled from 'styled-components'
import Head from 'next/head'
import { AppProvider } from '../userContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  const [userData, setUserData] = useState({userName: '', image: ''})
  const [pageName, setPageName] = useState('')
  return (
    <AppProvider value={{userData, setUserData, pageName, setPageName}}>
      <Container>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com"/> 
          <link href="https://fonts.googleapis.com/css2?family=Karla:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
        </Head>
        <GlobalStyles />
        <Component pageName={pageName} setPageName={setPageName} {...pageProps} />
      </Container>
    </AppProvider>
  )
}

export default MyApp

const Container = styled.div`
`