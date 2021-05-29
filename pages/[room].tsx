import styled from 'styled-components'
import Header from '../Components/Room/Header'
import RecentRooms from '../Components/Room/RecentRooms'
import MessageWindow from '../Components/Room/MessageWindow'
import Members from '../Components/Room/Members'
import SignUpModal from '../Components/Room/SignUpModal/SignUpModal'
import { useRouter } from 'next/router'
import { useEffect, useState, useContext } from 'react'
import { AppContext } from '../Components/Context/Context'
import { routes } from '../data'
import Head from 'next/head'

const Room = () => {
    const context = useContext(AppContext)
    const [showSignUp, setShowSignUp] = useState(false)

    const route = useRouter()
    const room = route.query
    useEffect(()=> {
        context.setPageName(routes[room.room])
        context.setRoomURL(room.room)
    }, [route])

    useEffect(()=> {
        if(context?.userData?.userName?.length < 1) {
            setShowSignUp(true)
        }
    }, [])

    return(
        <Container>
            <Head>
                <title>{context.pageName}</title>
            </Head>
            <SignUpModal showSignUp={showSignUp} setShowSignUp={setShowSignUp} />
            <Header />
            <ComponentsContainer>
                <RecentRooms />
                <MessageWindow />
                <Members />
            </ComponentsContainer>
        </Container>
    )
}

export default Room

const Container = styled.div`
    height: 100vh;
`

const ComponentsContainer = styled.div`
    height: 100vh;
    display: flex;
    border-top: 1px solid #d6d6d6;
`