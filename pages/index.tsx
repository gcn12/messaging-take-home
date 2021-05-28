import styled from 'styled-components'
import Header from '../Components/Home/Header'
import { sports, movies, schools, } from '../data'
import ScrollGallery from '../Components/Home/ScrollGallery'
import FeaturedRooms from '../Components/Home/FeaturedRooms'

export default function Home(props) {
  return (
    <Container>
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