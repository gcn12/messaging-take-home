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
      <ScrollGallery setPageName={props.setPageName} content={schools} title='Universities' />
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  overflow-y: scroll;
`

const sportsColors = '#e7f4fe'


const sports = [
  {
    name: 'ASU Football',
    url: 'asu-football',
    color: sportsColors,
    colorOne: '#D9FFF8',
    colorTwo: '#C7FFDA',
    fontColor: '#000000',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt_veyplL09OprCNZurQU9AiMqb8f9FE82Fg&usqp=CAU',
    description: 'Proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
  {
    name: 'Hockey',
    url: 'hockey',
    colorOne: '#F7E3AF',
    colorTwo: '#F3EEC3',
    color: sportsColors,
    fontColor: '#000000',
    image: 'https://www1.cbn.com/sites/default/files/styles/video_ratio_16_9/public/media/slider/images/covidhockey_hdv.jpg?itok=fJOiwsul',
    description: 'Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  {
    name: 'Rugby Chat',
    url: 'rugby-chat',
    image: 'https://images.unsplash.com/photo-1480099225005-2513c8947aec?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cnVnYnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    colorOne: '#3DFAFF',
    colorTwo: '#3feaf0',
    color: sportsColors,
    fontColor: '#000000',
    description: 'Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  {
    name: 'Baseball Tributes',
    url: 'baseball-tributes',
    image: 'https://images.unsplash.com/photo-1528291954423-c0c71c12baeb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFzZWJhbGx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    color: sportsColors,
    fontColor: '#000000',
    description: 'Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  {
    name: 'Miami Soccer',
    url: 'miami-soccer',
    image: 'https://images.unsplash.com/photo-1544698310-74ea9d1c8258?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNvY2NlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    color: sportsColors,
    fontColor: '#000000',
    description: 'Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  {
    name: 'We Swim',
    url: 'we-swimming',
    color: sportsColors,
    image: 'https://images.unsplash.com/photo-1572116239546-4284968bb750?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHN3aW18ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    fontColor: '#000000',
    description: 'Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
]

const moviesColor = '#f3fef2'

const movies = [
  {
    name: 'Prince of Persia',
    url: 'prince-of-persia',
    image: 'https://wegotthiscovered.com/wp-content/uploads/2020/03/aOGcWc6tIgVlLIG4RJEmn39uXFw.jpg',
    color: moviesColor,
    fontColor: '#000000',
    description: 'Proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    name: 'The Revenant',
    url: 'the-revenant',
    color: moviesColor,
    image: 'https://img.cinemablend.com/filter:scale/cb/9/b/9/9/e/7/9b99e7623f1765b21e09910da13a35243ff1b835d5d21cd5ccd6bb5c266d8745.jpg?fw=1200',
    fontColor: '#000000',
    description: 'Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  {
    name: 'Side Effects',
    url: 'side-effects',
    color: moviesColor,
    image: 'https://ca-times.brightspotcdn.com/dims4/default/79b7576/2147483647/strip/true/crop/1920x1080+64+0/resize/1200x675!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F9b%2Fb8%2Ff49a575db34cd17630390ba255aa%2Fla-xpm-photo-2013-feb-11-la-et-mn-side-effects-channing-tatum-reviews-theaters-movie-box-office-20130210',
    fontColor: '#000000',
    description: 'Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  {
    name: 'Gravity',
    url: 'gravity',
    color: moviesColor,
    fontColor: '#000000',
    image: 'https://images.newscientist.com/wp-content/uploads/2013/09/dn24160-1_800.jpg?width=800',
    description: 'Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  {
    name: 'Romeo and Juliet',
    url: 'romeo-and-juliet',
    color: moviesColor,
    fontColor: '#000000',
    image: 'https://parentpreviews.com/images/made/legacy-pics/romeo-and-juliet-2013_668_330_80_int_s_c1.jpg',
    description: 'Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
]

const schoolColor = '#ffefeb'

const schools = [
  {
    name: 'Cornell',
    url: 'cornell',
    color: schoolColor,
    fontColor: '#000000',
    image: 'https://i1.wp.com/cornellsun.com/wp-content/uploads/2018/11/16319864675_b3a25fb203_b.jpg?fit=1024%2C681',
    description: 'Proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    name: 'Notre Dame',
    url: 'notre-dame',
    color: schoolColor,
    image: 'https://image.cnbcfm.com/api/v1/image/104792290-GettyImages-576938862.jpg?v=1532563739&w=1600&h=900',
    fontColor: '#000000',
    description: 'Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  {
    name: 'Emory',
    url: 'emory',
    image: 'https://www.honorsociety.org/sites/default/files/uni-campus-18265',
    color: schoolColor,
    fontColor: '#000000',
    description: 'Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  {
    name: 'Wake Forest',
    url: 'wake-forest',
    color: schoolColor,
    image: 'https://www.usnews.com/dims4/USNEWS/a1989a4/17177859217/resize/800x540%3E/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2F96%2F20796e235018f451de8f0451e43f33%2Fcollege-photo_11989.jpg',
    fontColor: '#000000',
    description: 'Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  {
    name: 'King\'s College',
    url: 'kings-college',
    color: schoolColor,
    image: 'https://cdn.getyourguide.com/img/location/5b1450f00ed7d.jpeg/92.jpg',
    fontColor: '#000000',
    description: 'Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
]