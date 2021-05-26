import styled from 'styled-components'
import Router from 'next/router'
import firebase from 'firebase'
import TitleInput from './TitleInput'
import Buttons from './Buttons'
import PhotoContainer from './PhotoContainer'
import { useState } from 'react'
import { DialogOverlay, DialogContent } from '@reach/dialog'

const SignUpModal = (props) => {

    const [step, setStep] = useState('select username')
    const [name, setName] = useState('')
    const [nameWarning, setNameWarning] = useState(false)
    const [isImage, setIsImage] = useState(false)
    const [photoUploadSettings, setPhotoUploadSettings] = useState({
        opacity: 0,
        left: '70%',
        visibility: 'hidden',
    })

    const handlePhotoUpload = () => {
        const files = (document.getElementById('photo-input') as HTMLInputElement).files
        if(files.length===1) {
            uploadPhoto(files)
        }else {
            closeModal(null)
        }
    }

    const uploadPhoto = (files) => {
        setPhotoUploadSettings({
            opacity: 0,
            left: '30%',
            visibility: 'hidden',
        })
        setStep('photo upload')
        const file = files[0]
        const filename = file.name
        const storageRef = firebase.storage().ref()
        const photoRef = storageRef.child(filename)
        photoRef.put(file)
        .then(()=> {
            photoRef.getDownloadURL()
            .then(image=> {
                closeModal(image)
            })
        })
        
    }

    const closeModal = (image) => {
        props.setUserData({
            image,
            name,
        })
        props.setShowSignUp(false)
    }

    const usernameNext = () => {
        if(name.length > 0) {
            setStep('select photo')
            setPhotoUploadSettings({
                opacity: 1,
                left: '50%',
                visibility: 'visible',
            })
            setNameWarning(false)
        }else {
            setNameWarning(true)
        }
    }

    const photoBack = () => {
        setStep('select username')
        setPhotoUploadSettings({
            opacity: 0,
            left: '70%',
            visibility: 'hidden',
        })
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
                {step!=='photo upload' &&
                <BackHome onClick={()=>Router.push('/')}>Back to home</BackHome>
                }
                <TitleInput step={step} setName={setName} />
                <PhotoContainer photoUploadSettings={photoUploadSettings} isImage={isImage} displayImage={displayImage} />
                <Loading step={step}>We're processing your profile...</Loading>
                <Buttons photoBack={photoBack} step={step} usernameNext={usernameNext} setStep={setStep} handlePhotoUpload={handlePhotoUpload} nameWarning={nameWarning} />
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

const Loading = styled.h2`
    white-space: nowrap;
    font-size: 24px;
    position: absolute;
    transition: left 500ms ease-in-out, opacity 300ms ease-in-out, visibility 300ms ease-in-out;
    left: ${props=>props.step==='photo upload' ? '50%' : '70%'};
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: ${props=>props.step==='photo upload' ? '1' : '0'};
    visibility: ${props=>props.step==='photo upload' ? 'visible' : 'hidden'};
`

const BackHome = styled.button`
    font-size: 24px;
    padding: 10px 0px;
    align-self: flex-start;
`