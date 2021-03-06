import styled from 'styled-components'

const PhotoContainer = (props) => {
    const { left, opacity, visibility } = props.photoUploadSettings
    return(
        <PhotoInputContainer left={left} opacity={opacity} visibility={visibility}>
            <Title htmlFor='username-input'>Select a profile image (optional)</Title>
            <PreviewImage isImage={props.isImage} id='preview-image' />
            <PhotoInput onChange={props.displayImage} id='photo-input' type='file' />
        </PhotoInputContainer>
    )
}

export default PhotoContainer

interface PhotoInputContainerStyles {
    left: number;
    opacity: number;
    visibility: string;
}

const PhotoInputContainer = styled.div<PhotoInputContainerStyles>`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: left 500ms ease-in-out, opacity 300ms ease-in-out, visibility 300ms ease-in-out;
    left: ${props=>props.left};
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: ${props=>props.opacity};
    visibility: ${props=>props.visibility};
`

interface PreviewImageStyles {
    isImage: boolean;
}

const PreviewImage = styled.img<PreviewImageStyles>`
    height: 170px;
    width: 170px;
    border-radius: 50%;
    object-fit: cover;
    display: ${props=>props.isImage ? 'initial' : 'none'};
`

const PhotoInput = styled.input``

const Title = styled.label`
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 15px;
    white-space: nowrap;
`