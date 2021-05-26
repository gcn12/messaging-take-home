import styled from 'styled-components'
import Member from './Member'
import { useState } from 'react'
import MemberModal from './MemberModal'

const Members = () => {

    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [modalData, setModalData] = useState({})

    return(
        <Container>
            <MemberModal modalData={modalData} isDialogOpen={isDialogOpen} setIsDialogOpen={setIsDialogOpen} />
            <Title>Members</Title>
            {users.map((user, index)=> {
                return <Member setModalData={setModalData} setIsDialogOpen={setIsDialogOpen} {...user} key={index} />
            })}
        </Container>
    )
}

export default Members

const Container = styled.div`
    background-color: #EBF1F0;
    height: 720px;
    width: 20%;
`

const Title = styled.h1`
    padding: 10px 15px;
    font-size: 20px;
`

const users = [
    {
        name: 'Daniel Parker',
        isActive: true,
        bio: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa.',
        image: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    },
    {
        name: 'Jasmine Nielson',
        isActive: true,
        bio: 'Excepteur sint occaecat cupidatat non proident.',
        image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    },
    {
        name: 'Doug Nelson',
        isActive: true,
        bio: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa.',
        image: 'https://images.unsplash.com/photo-1577880216142-8549e9488dad?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fG1hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    },
    {
        name: 'Janice Yang',
        isActive: false,
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'https://images.unsplash.com/photo-1544243747-b8ca15da2450?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFzaWFuJTIwd29tYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    },
    {
        name: 'Mitchell Morales',
        isActive: false,
        bio: 'Proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    },
]