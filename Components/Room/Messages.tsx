import Message from './Message'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { db } from '../../firebase'

const Messages = (props) => {

    const [messages, setMessages] = useState([])

    useEffect(()=> {
        if(props.room) {
            const unsubscribe = db.collection(String(props.room))
            .orderBy('timestamp', 'desc')
            .limit(25)
            .onSnapshot((items)=> {
                const messagesArr = []
                items.forEach(item=>{
                    messagesArr.push(item.data())
                })
                setMessages(messagesArr.reverse())
                document.getElementById('scroll-bottom').scrollIntoView(false)
            })
            return ()=> unsubscribe()
        }
    }, [props])

    return(
        <MessagesContainer>
            {messages.map((message, index) => {
                return <Message {...message} key={index} />
            })}
            <div id='scroll-bottom'></div>
        </MessagesContainer>
    )
}

export default Messages

const MessagesContainer = styled.div`
    overflow-y: scroll;
    height: calc(100vh - 230px);
    border-bottom: 1px solid #d6d6d6;
`