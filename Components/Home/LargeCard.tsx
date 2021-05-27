import styled from 'styled-components'
import Router from 'next/router'

const LargeCard = (props) => {

    const pageRoute = () => {
        Router.push(`/${props.room.url}`)
        props.setPageName(props.room.name)
    }

    return(
        <Container color={props.room.color} onClick={pageRoute}>
            <Content>
                {/* <CoverImage src={props.room.cover} /> */}
                <Header>
                    <Title fontColor={props.room.fontColor}>{props.room.name}</Title>
                    <Description fontColor={props.room.fontColor}>{props.room.description}</Description>
                    <UserImages>
                        {props.room.images.map((image, index)=> {
                            return <UserImage index={index} fontColor={props.room.fontColor} key={index} src={image} />
                        })}
                        <More length={props.room.images.length}>{props.room.more}</More>
                    </UserImages>
                    {/* <JoinRoom>Join Room</JoinRoom> */}
                </Header>
            </Content>
        </Container>
    )
}

export default LargeCard

const Container = styled.a`
    max-width: 550px;
    min-height: 200px;
    display: block;
    /* background-color: #ffffff; */
    background-image: linear-gradient(to bottom left, #ecfff1, #ffffff);
    border-radius: 5px;
    cursor: pointer;
    margin: 0 10px 10px 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
    padding: 30px;
    transition: box-shadow 200ms ease-in-out, transform 200ms;
    display: flex;
    align-items: center;
    /* border: 1px solid rgba(0, 0, 0, .1); */
    &:hover {
        box-shadow: 0 5px 7px rgba(0, 0, 0, .2);
        transform: scale(1.01);
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    /* min-height: 300px; */
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`

const Title = styled.h1`
    font-size: 36px;
    font-weight: 600;
    margin-bottom: 5px;
    color: ${props=>props.fontColor};
    font-family: 'Nunito', sans-serif;
    color: black;
`

const UserImages = styled.div`
    margin-bottom: 10px;
    display: flex;
    align-items: center;
`

const More = styled.h4`
    font-size: 14px;
    background-color: #c5d7de;
    height: 40px;
    width: 40px;
    text-align: center;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    left: ${props=>props.length * -20}px;
`

const UserImage = styled.img`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 5px;
    /* border: 1px solid rgba(0, 0, 0, .1); */
    border: 4px solid #c5d7de;
    position: relative;
    left: ${props=>props.index * -20}px;
    /* border: 1px solid ${props=>props.fontColor}; */
`

const Description = styled.p`
    color: ${props=>props.fontColor};
    color: black;
    font-size: 20px;
    font-weight: 300;
    line-height: 1.2;
    margin-bottom: 10px;
    font-family: 'Nunito', sans-serif;
`

const CoverImage = styled.img`
    width: 290px;
    height: 220px;
    object-fit: cover;
    border-radius: 10px;
    margin-right: 30px;
`

// import styled from 'styled-components'
// import Router from 'next/router'

// const LargeCard = (props) => {

//     const pageRoute = () => {
//         Router.push(`/${props.room.url}`)
//         props.setPageName(props.room.name)
//     }

//     return(
//         <Container color={props.room.color} onClick={pageRoute}>
//             {/* <CoverImage src={props.room.cover} /> */}
//             <Content>
//                 <Header>
//                     <Title fontColor={props.room.fontColor}>{props.room.name}</Title>
//                     <Description fontColor={props.room.fontColor}>{props.room.description}</Description>
//                 </Header>
//                 <UserImages>
//                     {props.room.images.map((image, index)=> {
//                         return <UserImage fontColor={props.room.fontColor} key={index} src={image} />
//                     })}
//                 </UserImages>
//             </Content>
//         </Container>
//     )
// }

// export default LargeCard

// const Container = styled.a`
//     max-width: 350px;
//     min-height: 400px;
//     display: block;
//     background-color: ${props=>props.color};
//     border-radius: 10px;
//     cursor: pointer;
//     margin: 0 10px 10px 10px;
//     box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
//     padding: 30px;
//     transition: box-shadow 200ms ease-in-out, transform 200ms;
//     &:hover {
//         box-shadow: 0 5px 7px rgba(0, 0, 0, .2);
//         transform: scale(1.01);
//     }
// `

// const Content = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     min-height: 300px;
// `

// const Header = styled.div`
//     display: flex;
//     /* align-items: center; */
//     justify-content: space-between;
//     flex-direction: column;
// `

// const Title = styled.h1`
//     font-size: 40px;
//     margin-bottom: 20px;
//     color: ${props=>props.fontColor};
// `

// const UserImages = styled.div``

// const UserImage = styled.img`
//     height: 35px;
//     width: 35px;
//     border-radius: 50%;
//     object-fit: cover;
//     margin-right: 5px;
//     border: 1px solid ${props=>props.fontColor};
// `

// const Description = styled.p`
//     color: ${props=>props.fontColor};
//     font-size: 24px;
//     font-weight: 300;
//     line-height: 1.2;
// `

// const CoverImage = styled.img`
//     width: 100%;
//     height: 200px;
//     object-fit: cover;
//     border-radius: 10px;
// `