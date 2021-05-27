import styled from 'styled-components'

const TitleInput = (props) => {
    return(
        <Container step={props.step}>
            <Title htmlFor='username-input'>Choose a username</Title>
            <UsernameInput onChange={(e)=>props.setName(e.target.value)} autoComplete='off' id='username-input' />
        </Container>
    )
}

export default TitleInput

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    transition: left 500ms ease-in-out, opacity 300ms ease-in-out, visibility 300ms ease-in-out;
    left: ${props=>props.step==='select username' ? '50%' : '30%'};
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: ${props=>props.step==='select username' ? '1' : '0'};
    visibility: ${props=>props.step==='select username' ? 'visible' : 'hidden'};
`

const UsernameInput = styled.input`
    min-height: 40px;
    width: 340px;
    font-size: 1.3rem;
    border: 1px solid #c4c4c4;
`

const Title = styled.label`
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 15px;
    white-space: nowrap;
`