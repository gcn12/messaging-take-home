import styled from 'styled-components'
import ScrollItem from './ScrollItem'

const ScrollGallery = (props) => {
    return(
        <Container>
            {/* <Header> */}
                <Title>{props.title}</Title>
                {/* <SeeMore>See more</SeeMore>
            </Header> */}
            <Cards>
                {props.content.map((item, index)=> {
                    return <ScrollItem setPageName={props.setPageName} item={item} key={index} />
                })}
            </Cards>
        </Container>
    )
} 

export default ScrollGallery

const Container = styled.div` 
    padding: 0px 0px 15px 30px;
    /* margin-right: -20px; */
`

// const Header = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
// `

// const SeeMore = styled.h2`
//     font-size: 18px;
//     font-weight: 400;
//     margin-right: 40px;
// `

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