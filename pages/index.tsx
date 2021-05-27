import styled from 'styled-components'
import Header from '../Components/Home/Header'
import { sports, movies, schools, } from '../data'
import ScrollGallery from '../Components/Home/ScrollGallery'
import FeaturedRooms from '../Components/Home/FeaturedRooms'

export default function Home(props) {
  return (
    <Container>
      <Header />
      <FeaturedRooms setPageName={props.setPageName} />
      <ScrollGallery setPageName={props.setPageName} content={sports} title='Sports' />
      <ScrollGallery setPageName={props.setPageName} content={movies} title='Movies' />
      <ScrollGallery setPageName={props.setPageName} content={schools} title='Universities' />
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  overflow-y: scroll;
`