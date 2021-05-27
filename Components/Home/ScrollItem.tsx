import styled from 'styled-components'
import Router from 'next/router'

const ScrollItem = (props) => {

    const pageRoute = () => {
        Router.push(`/${props.item.url}`)
        props.setPageName(props.item.name)
    }

    const members = Math.round(Math.random()*100) + 5

    return(
        <Container colorOne={props.item.colorOne} colorTwo={props.item.colorTwo} color={props.item.color} onClick={pageRoute}>
            <Image src={props.item.image} />
            <div>
                <Title fontColor={props.item.fontColor}>{props.item.name}</Title>
                {/* <Description fontColor={props.item.fontColor}>{props.item.description}</Description> */}
                <Description>{members} members</Description>
            </div>
        </Container>
    )
}

export default ScrollItem

const Image = styled.img`
    height: 80px;
    width: 80px;
    object-fit: cover;
    border-radius: 10px;
    margin-right: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .1);
`

const Title = styled.h1`
    color: ${props=>props.fontColor};
    font-size: 30px;
    margin-bottom: 5px;
    font-weight: 600;
    font-family: 'Nunito', sans-serif;
`

const Description = styled.h1`
    color: ${props=>props.fontColor};
    font-size: 18px;
    font-weight: 400;
    font-family: 'Nunito', sans-serif;
`

const Container = styled.a`
    cursor: pointer;
    display: flex;
    align-items: center;
    min-height: 130px;
    min-width: 350px;
    /* background-color: ${props=>props.color}; */
    box-shadow: 0 2px 4px rgba(0, 0, 0, .1);
    background-image: linear-gradient(to bottom right, ${props=>props.color}, #f9f5f5);
    border: 1px solid #54585918;
    padding: 20px;
    margin: 5px 15px 0 0;
    border-radius: 10px;
    transition: transform 200ms;
    &:hover {
        transform: scale(1.02);
    }
`