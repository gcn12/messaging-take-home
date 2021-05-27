import styled from 'styled-components'

const Member = (props) => {

    const selectMember = () => {
        props.setModalData(props)
        props.setIsDialogOpen(true)
    }

    let shortenedBio: string

    if(props.bio.length > 55) {
        shortenedBio = props.bio.slice(0, 55).trim()
        if(shortenedBio[shortenedBio.length - 1] !== '.') {
            shortenedBio += '...'
        }
    }else{
        shortenedBio = props.bio
    }

    return(
        <Container isActive={props.isActive}>
            <button onClick={selectMember}>
                <UserImage src={props.image} />
            </button>
            <NameBio>
                <NameButton onClick={selectMember}>
                    <Name>{props.name}</Name>
                </NameButton>
                <Bio>{shortenedBio}</Bio>
            </NameBio>
        </Container>
    )
}

export default Member

const NameButton = styled.button`
    align-self: flex-start;
`

const Container = styled.article`
    display: flex;
    padding: 15px 10px;
    /* align-self: flex-start; */
    /* opacity: ${props=>props.isActive ? '1' : '.5'}; */
`

const NameBio = styled.div`
    display: flex;
    flex-direction: column;
`

const UserImage = styled.img`
    height: 55px;
    width: 55px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 10px;
    border: 1px solid #d6d6d6;
`

const Name = styled.h1`
    font-size: 20px;
    font-weight: 600;
    align-self: flex-start;
    margin-bottom: 2px;
    transition: text-decoration 60ms ease-in-out;
    &:hover {
        text-decoration: underline;
    }
`

const Bio = styled.p`
    font-size: 12px;
    font-weight: 400;
    text-align: left;
    line-height: 1.1;
`