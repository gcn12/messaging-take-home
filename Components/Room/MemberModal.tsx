import { DialogOverlay, DialogContent } from '@reach/dialog'
import styled from 'styled-components'

const MemberModal = (props) => {
    return(
        <Overlay  onDismiss={()=>props.setIsDialogOpen(false)} isOpen={props.isDialogOpen}>
            <Content aria-label='Member dialog'>
                <CloseButton onClick={()=>props.setIsDialogOpen(false)}>
                    <XIcon alt='close modal icon' src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xMiAxMS4yOTNsMTAuMjkzLTEwLjI5My43MDcuNzA3LTEwLjI5MyAxMC4yOTMgMTAuMjkzIDEwLjI5My0uNzA3LjcwNy0xMC4yOTMtMTAuMjkzLTEwLjI5MyAxMC4yOTMtLjcwNy0uNzA3IDEwLjI5My0xMC4yOTMtMTAuMjkzLTEwLjI5My43MDctLjcwNyAxMC4yOTMgMTAuMjkzeiIvPjwvc3ZnPg==" />
                </CloseButton>
                <ContentContainer>
                    <ProfileImage src={props.modalData.image} />
                    <NameBio>
                        <Name>{props.modalData.name}</Name>
                        <Bio>{props.modalData.bio}</Bio>
                        <SendMessage>SEND MESSAGE</SendMessage>
                    </NameBio>
                </ContentContainer>
            </Content>
        </Overlay>
    )
}

export default MemberModal

const CloseButton = styled.button`
    margin-bottom: 20px;
`

const SendMessage = styled.button`
    padding: 20px;
    background-color: #6a7b82;
    color: white;
`

const NameBio = styled.div`
    display: flex;
    flex-direction: column;
`

const ContentContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const ProfileImage = styled.img`
    height: 350px;
    width: 350px;
    object-fit: cover;
    border-radius: 10px;
    margin-right: 30px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, .2);
`

const Name = styled.h1`
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 10px;
`

const Bio = styled.p`
    font-size: 16px;
    font-weight: 500;
    line-height: 1.2;
    margin-bottom: 20px;
`

const Content = styled(DialogContent)`
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    padding: 0;
    background-color: white;
    position: absolute;
    height: 500px;
    width: 850px;
    border-radius: 10px;
    padding: 40px;
`

const Overlay = styled(DialogOverlay)`
    background: rgba(0, 0, 0, .3);
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    height: 200vh;
    width: 200vw;
`

const XIcon = styled.img`
    height: 30px;
    width: auto;
`