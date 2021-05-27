import styled from 'styled-components'
import Router from 'next/router'

const RecentRoomCard = (props: any) => {
    const pageRoute = () => {
        Router.push(`/${props.card.url}`)
        props.setPageName(props.card.title)
    }
    return(
        <Container url={props.room.room} href={props.card.url} onClick={pageRoute} >
            <Header>
                <Title>{props.card.title}</Title>
            </Header>
            <Description>{props.card.description}</Description>
        </Container>
    )
}

export default RecentRoomCard

const Container = styled.button`
    width: 100%;
    display: block;
    min-height: 100px;
    background-color: ${props=>props.url === props.href ? 'white' : '#ebf5f7'};
    padding: 20px;
    border-top: 1px solid #d6d6d6;
    transition: background-color 70ms ease-in-out;
    &:hover {
        background-color: white;
    }
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Title = styled.h1`
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 5px;
`

const Description = styled.p`
    font-size: 14px;
    text-align: left;
`