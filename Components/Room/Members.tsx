import styled from 'styled-components'
import Member from './Member'
import { useState } from 'react'
import MemberModal from './MemberModal'
import { users } from '../../data'

const Members = () => {

    const [isModalOpen, setIsModalOpen] = useState(false)

    return(
        <Container>
            <MemberModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
            <Title>Members</Title>
            {users.map((user, index)=> {
                return <Member setIsModalOpen={setIsModalOpen} {...user} key={index} />
            })}
        </Container>
    )
}

export default Members

const Container = styled.div`
    background-color: #ebf5f7;
    height: calc(100vh - 50px);
    width: 20%;
    min-width: 250px;
`

const Title = styled.h1`
    padding: 10px 15px;
    font-size: 20px;
`