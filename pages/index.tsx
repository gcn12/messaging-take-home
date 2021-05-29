import styled from 'styled-components'
import Header from '../Components/Home/Header'
import { sports, movies, schools, } from '../data'
import ScrollGallery from '../Components/Home/ScrollGallery'
import FeaturedRooms from '../Components/Home/FeaturedRooms'
import Head from 'next/head'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Carrier</title>
      </Head>
      <Header />
      <FeaturedRooms />
      <ScrollGallery content={sports} title='Sports' />
      <ScrollGallery content={movies} title='Movies' />
      <ScrollGallery content={schools} title='Universities' />
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  overflow-y: scroll;
`