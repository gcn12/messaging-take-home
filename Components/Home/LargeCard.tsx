import styled from 'styled-components'
import Router from 'next/router'

const LargeCard = (props) => {

    const pageRoute = () => {
        Router.push(`/${props.room.url}`)
        props.setPageName(props.room.name)
    }

    return(
        <Container color={props.room.color} onClick={pageRoute}>
            {/* <CoverImage src={props.room.cover} /> */}
            <Content>
                <Header>
                    <Title fontColor={props.room.fontColor}>{props.room.name}</Title>
                    <Description fontColor={props.room.fontColor}>{props.room.description}</Description>
                </Header>
                <UserImages>
                    {props.room.images.map((image, index)=> {
                        return <UserImage fontColor={props.room.fontColor} key={index} src={image} />
                    })}
                </UserImages>
            </Content>
        </Container>
    )
}

export default LargeCard

const Container = styled.a`
    max-width: 350px;
    min-height: 400px;
    display: block;
    /* background-color: #ffffff; */
    background-color: ${props=>props.color};
    border-radius: 10px;
    cursor: pointer;
    margin: 0 10px 10px 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
    padding: 30px;
    transition: box-shadow 200ms ease-in-out, transform 200ms;
    &:hover {
        box-shadow: 0 5px 7px rgba(0, 0, 0, .2);
        transform: scale(1.01);
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 300px;
`

const Header = styled.div`
    display: flex;
    /* align-items: center; */
    justify-content: space-between;
    flex-direction: column;
`

const Title = styled.h1`
    font-size: 40px;
    margin-bottom: 20px;
    color: ${props=>props.fontColor};
`

const UserImages = styled.div``

const UserImage = styled.img`
    height: 35px;
    width: 35px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 5px;
    border: 1px solid ${props=>props.fontColor};
`

const Description = styled.p`
    color: ${props=>props.fontColor};
    font-size: 24px;
    font-weight: 300;
    line-height: 1.2;
`

const CoverImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
`