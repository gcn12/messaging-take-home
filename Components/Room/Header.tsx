import styled from 'styled-components'
import Link from 'next/link'

const Header = (props) => {
    return(
        <Container>
            <Link href='/'>
                <Logo>Pigeon</Logo>
            </Link>
            <RightSide>
                <Bell src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTUgMjFjMCAxLjU5OC0xLjM5MiAzLTIuOTcxIDNzLTMuMDI5LTEuNDAyLTMuMDI5LTNoNnptLjEzNy0xNy4wNTVjLS42NDQtLjM3NC0xLjA0Mi0xLjA3LTEuMDQxLTEuODJ2LS4wMDNjLjAwMS0xLjE3Mi0uOTM4LTIuMTIyLTIuMDk2LTIuMTIycy0yLjA5Ny45NS0yLjA5NyAyLjEyMnYuMDAzYy4wMDEuNzUxLS4zOTYgMS40NDYtMS4wNDEgMS44Mi00LjY2OCAyLjcwOS0xLjk4NSAxMS43MTUtNi44NjIgMTMuMzA2djEuNzQ5aDIwdi0xLjc0OWMtNC44NzctMS41OTEtMi4xOTMtMTAuNTk4LTYuODYzLTEzLjMwNnptLTMuMTM3LTIuOTQ1Yy41NTIgMCAxIC40NDkgMSAxIDAgLjU1Mi0uNDQ4IDEtMSAxcy0xLS40NDgtMS0xYzAtLjU1MS40NDgtMSAxLTF6bS02LjQ1MSAxNmMxLjE4OS0xLjY2NyAxLjYwNS0zLjg5MSAxLjk2NC01LjgxNS40NDctMi4zOS44NjktNC42NDggMi4zNTQtNS41MDkgMS4zOC0uODAxIDIuOTU2LS43NiA0LjI2NyAwIDEuNDg1Ljg2MSAxLjkwNyAzLjExOSAyLjM1NCA1LjUwOS4zNTkgMS45MjQuNzc1IDQuMTQ4IDEuOTY0IDUuODE1aC0xMi45MDN6Ii8+PC9zdmc+" />
                {props.userData.image ? 
                <ProfilePicture src={props.userData.image} />
                :
                <ProfilePicture src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptNy43NTMgMTguMzA1Yy0uMjYxLS41ODYtLjc4OS0uOTkxLTEuODcxLTEuMjQxLTIuMjkzLS41MjktNC40MjgtLjk5My0zLjM5My0yLjk0NSAzLjE0NS01Ljk0Mi44MzMtOS4xMTktMi40ODktOS4xMTktMy4zODggMC01LjY0NCAzLjI5OS0yLjQ4OSA5LjExOSAxLjA2NiAxLjk2NC0xLjE0OCAyLjQyNy0zLjM5MyAyLjk0NS0xLjA4NC4yNS0xLjYwOC42NTgtMS44NjcgMS4yNDYtMS40MDUtMS43MjMtMi4yNTEtMy45MTktMi4yNTEtNi4zMSAwLTUuNTE0IDQuNDg2LTEwIDEwLTEwczEwIDQuNDg2IDEwIDEwYzAgMi4zODktLjg0NSA0LjU4My0yLjI0NyA2LjMwNXoiLz48L3N2Zz4=" />
                }
            </RightSide>
        </Container>
    )
}

export default Header

const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    height: 50px;
    background-color: white;
`

const RightSide = styled.div`
    display: flex;
    align-items: center;
`

const ProfilePicture = styled.img`
    height: 35px;
    width: 35px;
    object-fit: cover;
    border-radius: 50%;
    margin-left: 20px;
`

const Bell = styled.img`
    height: 25px;
    width: auto;
`

const Logo = styled.a`
    font-size: 28px;
    font-weight: 600;
    cursor: pointer;
`