import styled from 'styled-components'
import Header from '../Components/Room/Header'
import RecentRooms from '../Components/Room/RecentRooms'
import MessageWindow from '../Components/Room/MessageWindow'
import Members from '../Components/Room/Members'
import SignUpModal from '../Components/Room/SignUpModal'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Room = () => {

    const [userData, setUserData] = useState({userName: '', image: ''})
    const [showSignUp, setShowSignUp] = useState(false)

    const route = useRouter()
    const room = route.query

    useEffect(()=> {
        if(!userData.userName) {
            setShowSignUp(true)
        }
    }, [])

    return(
        <Container>
            <SignUpModal setUserData={setUserData} showSignUp={showSignUp} setShowSignUp={setShowSignUp} />
            <Header userData={userData} />
            <ComponentsContainer>
                <RecentRooms room={room} />
                <MessageWindow userData={userData} room={room} />
                <Members />
            </ComponentsContainer>
        </Container>
    )
}

export default Room

const Container = styled.div`
    height: 100%;
`

const ComponentsContainer = styled.div`
    height: 100%;
    display: flex;
    border-top: 1px solid #d6d6d6;
`