import styled from 'styled-components'
import ScrollItem from './ScrollItem'

const ScrollGallery = (props: any) => {
    return(
        <Container>
            <Title>{props.title}</Title>
            <Cards>
                {props.content.map((item, index: number)=> {
                    return <ScrollItem item={item} key={index} />
                })}
            </Cards>
        </Container>
    )
} 

export default ScrollGallery

const Container = styled.div` 
    padding: 0px 0px 15px 30px;
`

const Cards = styled.div`
    display: flex;
    overflow-x: scroll;
    margin-left: -30px;
    padding-left: 40px;
    padding-bottom: 15px;
`

const Title = styled.h1`
    font-size: 20px;
    margin-left: 10px;
    margin-bottom: 5px;
`