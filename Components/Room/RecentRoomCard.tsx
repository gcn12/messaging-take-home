import styled from 'styled-components'
import Router from 'next/router'

const RecentRoomCard = (props: any) => {
    return(
        <Container url={props.room.room} href={props.url} onClick={()=> Router.push(`/${props.url}`)} >
            <Header>
                <Title>{props.title}</Title>
                {/* <Images>
                    {props.users.map((user: object, index: number)=> {
                        return <UserImage src={user} key={index} />
                    })}
                </Images> */}
            </Header>
            <Description>{props.description}</Description>
        </Container>
    )
}

export default RecentRoomCard

const Container = styled.button`
    width: 100%;
    display: block;
    min-height: 100px;
    background-color: ${props=>props.url === props.href ? 'white' : '#EBF1F0'};
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

const Images = styled.div``

const Title = styled.h1`
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 5px;
`

const UserImage = styled.img`
    height: 30px;
    width: 30px;
    object-fit: cover;
    border-radius: 50%;
    border: 1px solid #d6d6d6;
`

const Description = styled.p`
    font-size: 14px;
    text-align: left;
`