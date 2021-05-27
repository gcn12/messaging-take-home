import Messages from './Messages'
import styled from 'styled-components'
import { useState } from 'react'
import { db } from '../../firebase'

const MessageWindow = (props) => {

    const [message, setMessage] = useState('')

    const sendMessage = () => {
        if(message.length===0) return
        const userData = {
            message,
            timestamp: Date.now(),
            name: props.userData.name,
        }
        if(props.userData.image===null) {
            userData['image'] = 'https://firebasestorage.googleapis.com/v0/b/messaging-e2002.appspot.com/o/iconmonstr-user-20-240.png?alt=media&token=7a7fc2d2-252d-4fdc-8816-076f7b8de78d'
        } else {
            userData['image'] = props.userData.image
        }
        sendMessageToDatabase(userData)
    }

    const sendMessageToDatabase = (userData) => {
        db.collection(String(props.room.room))
        .add(userData)
        .then(()=> {
            (document.getElementById('message-textarea') as HTMLInputElement).value = ''
            setMessage('')
        })
    }

    const handleChange = (e) => {
        const message = e.target.value
        setMessage(message)
    }
    
    const handleEnter = (e) => {
        if(e.key==='Enter') {
            e.preventDefault()
            sendMessage()
        }
    }

    return(
        <Container>
            <Title>{props.pageName}</Title>
            <Messages {...props.room} />
            <TextContainer>
                <Textbox id='message-textarea' onKeyDown={handleEnter} onKeyUp={handleChange} placeholder='Write a message...' />
                <SendButton onClick={sendMessage}>
                    <PlaneIcon src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjQgMGwtNiAyMi04LjEyOS03LjIzOSA3LjgwMi04LjIzNC0xMC40NTggNy4yMjctNy4yMTUtMS43NTQgMjQtMTJ6bS0xNSAxNi42Njh2Ny4zMzJsMy4yNTgtNC40MzEtMy4yNTgtMi45MDF6Ii8+PC9zdmc+" />
                </SendButton>
            </TextContainer>
        </Container>
    )
}

export default MessageWindow

const Container = styled.div`
    width: 55%;
    height: calc(100vh - 40px);
    background-color: white;
`

const Title = styled.h1`
    font-size: 20px;
    padding: 10px 0px 10px 20px;
    box-shadow: 0 7px 4px -4px rgba(0, 0, 0, .1);
    height: 40px;
    border-bottom: 1px solid #d6d6d6;
`

const TextContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: relative;
`

const Textbox = styled.textarea`
    height: 135px;
    width: 100%;
    border: none;
    resize: none;
    font-size: 1.125rem;
    position: relative;
    font-family: 'Karla', sans-serif;
    padding: 15px 150px 15px 15px;
`

const SendButton = styled.button`
    width: 50px;
    height: 50px;
    background-color: red;
    border-radius: 50%;
    position: absolute;
    right: 50px;
`

const PlaneIcon = styled.img`
    height: 25px;
    width: auto;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    filter: invert();
`