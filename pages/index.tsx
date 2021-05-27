import styled from 'styled-components'
import Header from '../Components/Home/Header'
import ScrollGallery from '../Components/Home/ScrollGallery'
import FeaturedRooms from '../Components/Home/FeaturedRooms'

export default function Home(props) {
  return (
    <Container>
      <Header />
      <FeaturedRooms setPageName={props.setPageName} />
      <ScrollGallery setPageName={props.setPageName} content={sports} title='Sports' />
      <ScrollGallery setPageName={props.setPageName} content={movies} title='Movies' />
      <ScrollGallery setPageName={props.setPageName} content={academics} title='Academics' />
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  overflow-y: scroll;
`

const sports = [
  {
    name: 'ASU Football',
    url: 'asu-football',
    color: '#c8d7d7',
    colorOne: '#D9FFF8',
    colorTwo: '#C7FFDA',
    fontColor: '#000000',
    description: 'Proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',},
  {
    name: 'Hockey',
    url: 'hockey',
    colorOne: '#F7E3AF',
    colorTwo: '#F3EEC3',
    color: '#c8d7d7',
    fontColor: '#000000',
    description: 'Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  {
    name: 'Rugby Chat',
    url: 'rugby-chat',
    colorOne: '#3DFAFF',
    colorTwo: '#3feaf0',
    color: '#c8d7d7',
    fontColor: '#000000',
    description: 'Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  {
    name: 'Baseball Tributes',
    url: 'baseball-tributes',
    color: '#c8d7d7',
    fontColor: '#000000',
    description: 'Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  {
    name: 'Miami Soccer',
    url: 'miami-soccer',
    color: '#c8d7d7',
    fontColor: '#000000',
    description: 'Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  {
    name: 'We Swim',
    url: 'we-swimming',
    color: '#c8d7d7',
    fontColor: '#000000',
    description: 'Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
]

const movies = [
  {
    name: 'Prince of Persia',
    url: 'prince-of-persia',
    color: '#3F3047',
    fontColor: '#ffffff',
    description: 'Proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    name: 'The Revenant',
    url: 'the-revenant',
    color: '#30BCED',
    fontColor: '#000000',
    description: 'Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  {
    name: 'Side Effects',
    url: 'side-effects',
    color: '#EBEBD3',
    fontColor: '#000000',
    description: 'Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  {
    name: 'Gravity',
    url: 'gravity',
    color: '#91F5AD',
    fontColor: '#000000',
    description: 'Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  {
    name: 'Romeo and Juliet',
    url: 'romeo-and-juliet',
    color: '#91F5AD',
    fontColor: '#000000',
    description: 'Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
]

const academics = [
  {
    name: 'Mathematics',
    url: 'mathematics',
    color: '#3F3047',
    fontColor: '#ffffff',
    description: 'Proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    name: 'Chemistry',
    url: 'chemistry',
    color: '#30BCED',
    fontColor: '#000000',
    description: 'Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  {
    name: 'History',
    url: 'history',
    color: '#EBEBD3',
    fontColor: '#000000',
    description: 'Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  {
    name: 'Astronomy',
    url: 'astronomy',
    color: '#91F5AD',
    fontColor: '#000000',
    description: 'Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  {
    name: 'Physics',
    url: 'physics',
    color: '#91F5AD',
    fontColor: '#000000',
    description: 'Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
]