import Message from './Message'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import moment from 'moment'
import { db } from '../../firebase'
import { AppContext } from '../Context/Context'
import { useContext } from 'react'

const Messages = () => {
    const context = useContext(AppContext) 

    const [messages, setMessages] = useState([])
    const [isNoMessages, setIsNoMessages] = useState(false)

    const getMessages = () => {
        return db.collection(String(context.roomURL))
        .orderBy('timestamp', 'desc')
        .limit(25)
        .onSnapshot((items)=> {
            setMessages([])
            if(items.size===0) {
                setIsNoMessages(true)
            }else {
                setIsNoMessages(false)
            }
            const messagesArr = []
            items.forEach(item=>{
                messagesArr.push(item.data())
            })
            setMessages(messagesArr.reverse())
            document.getElementById('scroll-bottom').scrollIntoView(false)
        })
    }

    useEffect(()=> {
        if(context.roomURL) {
            const unsubscribe = getMessages()
            return ()=> unsubscribe()
        }
    }, [context.roomURL])

    return(
        <MessagesContainer>
            {messages.map((message, index) => {
                return (
                    <div key={index}>
                        {index===0 &&
                            <Day><Line>{moment(messages[index].timestamp).format('MMM Do YYYY')}</Line></Day>
                        }
                        <Message {...message} key={index} />
                        {messages[index +1] && moment(messages[index].timestamp).format('dddd') !== moment(messages[index +1]?.timestamp).format('dddd') &&
                            <Day><Line>{moment(messages[index + 1]?.timestamp).format('MMM Do YYYY')}</Line></Day>
                        }
                    </div>
                )
            })}
            {isNoMessages &&
                <NoMessages>Write a message to get the conversation started.</NoMessages>
            }
            <div id='scroll-bottom'></div>
        </MessagesContainer>
    )
}

export default Messages

const Line = styled.span`
    background: white;
    padding: 0 20px;
`

const Day = styled.h1`
    text-align: center;
    border-bottom: 1px solid #747474;
    line-height: 1px;
    width: 80%;
    margin: 20px auto;
    color: #747474;
`

const NoMessages = styled.h2`
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    margin-top: 20px;
`

const MessagesContainer = styled.div`
    overflow-y: scroll;
    height: calc(100vh - 230px);
    border-bottom: 1px solid #d6d6d6;
    margin-top: 20px;
`