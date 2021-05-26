import styled from 'styled-components'

const images = [
    'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1463453091185-61582044d556?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1582610285985-a42d9193f2fd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGdpcmx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
]
const LargeCard = () => {
    return(
        <Container href='/movie-club'>
            <Header>
                <UserImages>
                    {images.map((image, index)=> {
                        return <UserImage key={index} src={image} />
                    })}
                </UserImages>
                <Title>Movie club</Title>
            </Header>
            <Description>
                Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Description>
        </Container>
    )
}

export default LargeCard

const Container = styled.a`
    max-width: 400px;
    min-height: 300px;
    display: block;
    background-color: hsl(20, 30%, 90%);
    border-radius: 10px;
    padding: 20px;
`

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Title = styled.h1`
    font-size: 26px;
`

const UserImages = styled.div``

const UserImage = styled.img`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    object-fit: cover;
`

const Description = styled.p`
    font-size: 18px;
`