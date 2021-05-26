import styled from 'styled-components'
import moment from 'moment'

const Message = (props: any) => {
    return(
        <Container>
            <UserImage src={props.image} />
            <NameDescription>
                <NameTime>
                    <Name>{props.name}</Name>
                    <Time>{moment(props.timestamp).format('LT')}</Time>
                </NameTime>
                <Description>{props.message}</Description>
            </NameDescription>
        </Container>
    )
}

export default Message

const Container = styled.div`
    display: flex;
    padding: 20px;
    width: 100%;
`

const NameDescription = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const NameTime = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    width: 100%;
`

const Time = styled.h3`
    font-size: 12px;
`

const Name = styled.h1`
    font-size: 20px;
    font-weight: 600;
`

const Description = styled.p`
    font-weight: 400;
`

const UserImage = styled.img`
    height: 50px;
    width: 50px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 20px;
`