import styled from 'styled-components'
import Router from 'next/router'

const ScrollItem = (props) => {

    const pageRoute = () => {
        Router.push(`/${props.item.url}`)
        props.setPageName(props.item.name)
    }

    return(
        <Container colorOne={props.item.colorOne} colorTwo={props.item.colorTwo} color={props.item.color} onClick={pageRoute}>
            <Title fontColor={props.item.fontColor}>{props.item.name}</Title>
            <Description fontColor={props.item.fontColor}>{props.item.description}</Description>
        </Container>
    )
}

export default ScrollItem

const Title = styled.h1`
    color: ${props=>props.fontColor};
    font-size: 30px;
    margin-bottom: 15px;
`

const Description = styled.h1`
    color: ${props=>props.fontColor};
    font-size: 18px;
    font-weight: 400;
`

const Container = styled.a`
    cursor: pointer;
    min-height: 200px;
    min-width: 350px;
    background-color: ${props=>props.color};
    /* background-image: linear-gradient(to bottom right, ${props=>props.colorOne}, ${props=>props.colorTwo}); */
    padding: 20px;
    margin-right: 10px;
    border-radius: 10px;
    transition: transform 200ms;
    margin-top: 5px;
    &:hover {
        transform: scale(1.02);
    }
`