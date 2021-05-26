import styled from 'styled-components'
import Router from 'next/router'
import firebase from 'firebase'
import { useState } from 'react'
import { DialogOverlay, DialogContent } from '@reach/dialog'

const SignUpModal = (props) => {

    const [isStepOne, setIsStepOne] = useState(true)
    const [name, setName] = useState('')
    const [nameWarning, setNameWarning] = useState(false)
    const [isImage, setIsImage] = useState(false)

    const uploadPhoto = () => {
        const files = (document.getElementById('photo-input') as HTMLInputElement).files
        if(files.length===1) {
            const file = (document.getElementById('photo-input') as HTMLInputElement).files[0]
            const filename = file.name
            const ref = firebase.storage().ref()
            const photoRef = ref.child(filename)
            photoRef.put(file)
            .then(()=> {
                photoRef.getDownloadURL()
                .then(image=> {
                    props.setUserData({
                        image: image,
                        name,
                    })
                    props.setShowSignUp(false)
                })
            })
        }else {
            props.setUserData({
                image: null,
                name,
            })
            props.setShowSignUp(false)
        }
    }

    const usernameNext = () => {
        if(name.length > 0) {
            setIsStepOne(false)
            setNameWarning(false)
        }else {
            setNameWarning(true)
        }
    }

    const displayImage = () => {
        const fileReader = new FileReader()
        fileReader.readAsDataURL((document.getElementById('photo-input') as HTMLInputElement).files[0])
        fileReader.onload = function(event) {
            (document.getElementById('preview-image') as HTMLInputElement).src = String(event.target.result)
            setIsImage(true)
        }
    }

    return(
        <Overlay onDismiss={()=>null} isOpen={props.showSignUp}>
            <Content aria-label='Sign up'>
                <BackHome onClick={()=>Router.push('/')}>Back to home</BackHome>
                <TitleInput isStepOne={isStepOne}>
                    <Title htmlFor='username-input'>Choose a username</Title>
                    <UsernameInput onChange={(e)=>setName(e.target.value)} autoComplete='off' id='username-input' />
                </TitleInput>
                <PhotoInputContainer isStepOne={isStepOne}>
                    <Title htmlFor='username-input'>Select a profile image (optional)</Title>
                    <PreviewImage isImage={isImage} id='preview-image' />
                    <PhotoInput onChange={displayImage} id='photo-input' type='file' />
                </PhotoInputContainer>
                {isStepOne ? 
                <ButtonWarningContainer>
                    {nameWarning &&
                    <Warning>Looks like your username is a bit too short...</Warning>
                    }
                    <NextButton onClick={usernameNext}>Next</NextButton>
                </ButtonWarningContainer>
                :
                <ButtonsContainer>
                    <BackButton onClick={()=>setIsStepOne(true)}>Back</BackButton>
                    <SmallNextButton onClick={uploadPhoto}>Finish</SmallNextButton>
                </ButtonsContainer>
                }
            </Content>
        </Overlay>
    )
}

export default SignUpModal

const Content = styled(DialogContent)`
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    padding: 0;
    background-color: white;
    position: absolute;
    height: 475px;
    width: 700px;
    border-radius: 10px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Overlay = styled(DialogOverlay)`
    background: rgba(0, 0, 0, .3);
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    height: 200vh;
    width: 200vw;
    display: flex;
    justify-content: center;
`

const ButtonWarningContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const TitleInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    transition: left 400ms ease-in-out, opacity 400ms ease-in-out, visibility 400ms ease-in-out;
    left: ${props=>props.isStepOne ? '50%' : '30%'};
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: ${props=>props.isStepOne ? '1' : '0'};
    visibility: ${props=>props.isStepOne ? 'visible' : 'hidden'};
`

const Warning = styled.h2`
    color: #cb5050;
    align-self: center;
    margin-bottom: 10px;
`

const PhotoInputContainer = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: left 400ms ease-in-out, opacity 400ms ease-in-out, visibility 400ms ease-in-out;
    left: ${props=>props.isStepOne ? '70%' : '50%'};
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: ${props=>props.isStepOne ? '0' : '1'};
    visibility: ${props=>props.isStepOne ? 'hidden' : 'visible'};
`

const PreviewImage = styled.img`
    height: 170px;
    width: 170px;
    border-radius: 50%;
    object-fit: cover;
    display: ${props=>props.isImage ? 'initial' : 'none'};
`

const PhotoInput = styled.input``

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
`

const SmallNextButton = styled.button`
    font-size: 24px;
    padding: 10px 30px;
    background-color: #b0b6b0;
`

const BackButton = styled.button`
    font-size: 24px;
    padding: 10px 30px;
    background-color: #b0b6b0;
    margin-right: 20px;
`

const Title = styled.label`
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 15px;
    white-space: nowrap;
`

const UsernameInput = styled.input`
    min-height: 40px;
    width: 340px;
    font-size: 1.3rem;
`

const NextButton = styled.button`
    font-size: 24px;
    padding: 10px 30px;
    background-color: #b0b6b0;
`

const BackHome = styled.button`
    font-size: 24px;
    padding: 10px 0px;
    align-self: flex-start;
`