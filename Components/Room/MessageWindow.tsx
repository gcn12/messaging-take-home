import Messages from './Messages'
import styled from 'styled-components'
import { useState } from 'react'
import { db } from '../../firebase'

const MessageWindow = (props) => {

    const [message, setMessage] = useState('')

    const sendMessage = () => {
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
        db.collection(String(props.room.room))
        .add(userData)
        .then(()=> {
            (document.getElementById('message-textarea') as HTMLInputElement).value = ''
        })
    }

    const handleChange = (e) => {
        const message = e.target.value
        if(e.key === 'Enter') {
            e.preventDefault()
            sendMessage()
        }else {
            setMessage(message)
        }
    }

    return(
        <Container>
            <Title>Movie club</Title>
            <Messages {...props.room} />
            <TextContainer>
                <Textbox id='message-textarea' onKeyUp={handleChange} placeholder='Write message here...' />
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
`

const Title = styled.h1`
    font-size: 20px;
    padding: 10px 0px 10px 20px;
    box-shadow: 0 7px 4px -4px rgba(0, 0, 0, .1);
`

const TextContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

const Textbox = styled.textarea`
    height: 130px;
    width: 90%;
    border: none;
    resize: none;
    font-size: 1.125rem;
    /* margin: 0 20px; */
    padding: 5px;
`

const SendButton = styled.button`
    width: 60px;
    height: 60px;
    background-color: red;
    border-radius: 50%;
    position: relative;
`

const PlaneIcon = styled.img`
    height: 30px;
    width: auto;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    filter: invert();
`

const messages = [
    {
        name: 'Daniel Parker',
        message: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        time: 1621893414,
    },
    {
        name: 'Jasmine Nielson',
        message: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        time: 1621893414,
    },
    {
        name: 'Doug Nelson',
        message: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        time: 1621893414,
    },
    {
        name: 'Janice Yang',
        message: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        time: 1621893414,
    },
    {
        name: 'Mitchell Morales',
        message: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        time: 1621893414,
    },
    {
        name: 'Pete Berg',
        message: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        time: 1621893414,
    },
    {
        name: 'Mel Mitchell',
        message: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        time: 1621493414,
    },
    {
        name: 'Beth T.',
        message: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        time: 1621893414,
    },
]