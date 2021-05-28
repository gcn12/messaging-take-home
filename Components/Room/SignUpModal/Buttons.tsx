import styled from 'styled-components'

const Buttons = (props: any) => {
    return(
        <>
        {props.step=== 'select username' && 
        <ButtonWarningContainer>
            {props.nameWarning &&
            <Warning>Looks like your username is a bit too short...</Warning>
            }
            <NextButton onClick={props.usernameNext}>Next</NextButton>
        </ButtonWarningContainer>
        }
        {props.step=== 'select photo' &&
        <ButtonsContainer>
            <BackButton onClick={props.photoBack}>Back</BackButton>
            <SmallNextButton onClick={props.handlePhotoUpload}>Finish</SmallNextButton>
        </ButtonsContainer>
        }
        </>
    )
}

export default Buttons

const ButtonWarningContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const Warning = styled.h2`
    color: #cb5050;
    align-self: center;
    margin-bottom: 10px;
`

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
`

const SmallNextButton = styled.button`
    font-size: 24px;
    padding: 10px 30px;
    background-color: #6a7b82;
    color: white;
`

const BackButton = styled.button`
    font-size: 24px;
    padding: 10px 30px;
    background-color: #6a7b82;
    margin-right: 20px;
    color: white;
`

const NextButton = styled.button`
    font-size: 24px;
    padding: 10px 30px;
    background-color: #6a7b82;
    color: white;
`