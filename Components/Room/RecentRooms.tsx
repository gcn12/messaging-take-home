import styled from 'styled-components'
import RecentRoomCard from './RecentRoomCard'

const RecentRooms = (props: any) => {
    return(
        <Container>
            <Title>Recent Rooms</Title>
            <Cards>
                {cards.map((card, index)=> {
                    return <RecentRoomCard card={card} key={index} />
                })}
            </Cards>
        </Container>
    )
}

export default RecentRooms

const Container = styled.div`
    border-right: 1px solid #d6d6d6;
    width: 25%;
    height: calc(100vh - 40px);
    background-color: white;
`

const Title = styled.h1`
    font-size: 20px;
    padding: 10px 0px 10px 20px;
    box-shadow: 0 7px 4px -4px rgba(0, 0, 0, .1);
    position: relative;
    height: 40px;
    border-bottom: 1px solid #d6d6d6;
`

const Cards = styled.div`
    overflow-y: scroll;
    height: calc(100vh - 90px);
`

const cards = [
    {
        title: 'Architecture Group',
        description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        url: 'architecture-group',
    },
    {
        title: 'Movie club',
        description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        url: 'movie-club',
    },
    {
        title: 'Writing',
        description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        url: 'writing',
    },
    {
        title: 'Sports Talk',
        description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        url: 'sports-talk',
    },
    {
        title: 'Hitman 3',
        description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        url: 'hitman-3',
    },
    {
        title: 'Far Cry 6',
        description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        url: 'far-cry-6',
    },
    {
        title: 'Returnal',
        description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        url: 'returnal',
    },
    {
        title: 'Stray',
        description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        url: 'stray',
    },
    {
        title: 'Palmer',
        description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        url: 'palmer',
    },
    {
        title: 'Cooking Chat',
        description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        url: 'cooking-chat',
    },
]