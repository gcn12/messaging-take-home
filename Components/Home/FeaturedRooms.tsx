import styled from 'styled-components'
import FeaturedCard from './FeaturedCard'
import { rooms } from '../../data'

const FeaturedRooms = (props: any) => {
    return(
        <Container>
            <Title>Featured</Title>
            <Rooms>
                {rooms.map((room, index)=> {
                    return <FeaturedCard room={room} key={index} />
                })}
            </Rooms>
        </Container>
    )
}

export default FeaturedRooms

const Rooms = styled.div`
    display: grid;
    grid-gap: 20px;
    /* grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); */
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    justify-items: center;
`

const Title = styled.h1`
    font-size: 20px;
    margin-left: 10px;
    margin-bottom: 10px;
`

const Container = styled.div`
    padding: 0 30px;
    margin-bottom: 25px;
    margin-top: 80px;
`