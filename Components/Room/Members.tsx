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
    height: 93%;
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
        bio: 'Suscipit adipiscing bibendum est ultricies integer quis. Proin fermentum leo vel orci porta non. Faucibus ornare suspendisse sed nisi lacus. Eget lorem dolor sed viverra. \n \n Malesuada fames ac turpis egestas sed. Lectus proin nibh nisl condimentum id. Eu consequat ac felis donec. Lorem ipsum dolor sit amet consectetur adipiscing elit ut.',
        image: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    },
    {
        name: 'Jasmine Nielson',
        isActive: true,
        bio: 'Sed elementum tempus egestas sed sed risus pretium quam vulputate. Vestibulum lorem sed risus ultricies tristique. Vulputate dignissim suspendisse in est ante in nibh mauris. Et ligula ullamcorper malesuada proin libero nunc consequat interdum varius.',
        image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    },
    {
        name: 'Doug Nelson',
        isActive: true,
        bio: 'Sed risus pretium quam vulputate dignissim suspendisse in. Eget gravida cum sociis natoque penatibus et. Pulvinar mattis nunc sed blandit libero volutpat sed. Faucibus in ornare quam viverra orci. Elementum nisi quis eleifend quam adipiscing. Nunc sed id semper risus in hendrerit gravida rutrum quisque. Quis risus sed vulputate odio ut. Varius sit amet mattis vulputate enim.',
        image: 'https://images.unsplash.com/photo-1577880216142-8549e9488dad?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fG1hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    },
    {
        name: 'Janice Yang',
        isActive: false,
        bio: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'https://images.unsplash.com/photo-1544243747-b8ca15da2450?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFzaWFuJTIwd29tYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    },
    {
        name: 'Mitchell Morales',
        isActive: false,
        bio: 'Neque viverra justo nec ultrices dui sapien eget mi proin. Quam adipiscing vitae proin sagittis nisl. Ultrices sagittis orci a scelerisque purus semper eget duis at. Vitae ultricies leo integer malesuada. Consequat id porta nibh venenatis.',
        image: 'https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    },
]