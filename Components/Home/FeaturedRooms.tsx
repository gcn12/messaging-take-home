import styled from 'styled-components'
import LargeCard from './LargeCard'

const FeaturedRooms = (props) => {
    return(
        <Container>
            <Title>Featured</Title>
            <Rooms>
                {rooms.map((room, index)=> {
                    return <LargeCard room={room} key={index} setPageName={props.setPageName} />
                })}
            </Rooms>
        </Container>
    )
}

export default FeaturedRooms

const Rooms = styled.div`
    display: grid;
    grid-gap: 20px;
    /* grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); */
    /* grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); */
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    justify-items: center;
`

const Title = styled.h1`
    font-size: 20px;
    margin-left: 10px;
    margin-bottom: 10px;
`

const Container = styled.div`
    padding: 0 30px;
    margin-bottom: 25px;
    margin-top: 80px;
`

const rooms = [
    {
        name: 'Car Club',
        url: 'car-club',
        // color: '#DDFCAD',
        color: '#3F3047',
        fontColor: '#ffffff',
        more: `+${Math.round(Math.random()* 60)}`,
        description: 'Proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        images: [
            'https://images.unsplash.com/photo-1621903570450-b6750dce9350?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fHdvbWFufGVufDB8MHwyfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
            'https://images.unsplash.com/photo-1588453383063-37ea0b78f30f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fHBlcnNvbnxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
            'https://images.unsplash.com/photo-1621839602268-04b1967920b2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fHdvbWFufGVufDB8MHwyfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
            'https://images.unsplash.com/photo-1582610285985-a42d9193f2fd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGdpcmx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        ],
        cover: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2Fyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    },
    {
        name: 'Writing',
        url: 'writing',
        more: `+${Math.round(Math.random()* 60)}`,
        color: '#C8E087',
        fontColor: '#000000',
        description: ' Consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat.',
        images: [
        'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1621704960732-b9fff2174e1c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIxfHx3b21hbnxlbnwwfDB8Mnx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1622004780966-39a676138167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbnxlbnwwfDB8Mnx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        ],
        cover: 'https://images.unsplash.com/photo-1600188769045-bc6026bfc8cd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjB3cml0aW5nfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    },
    {
        name: 'Architecture Group',
        url: 'architecture-group',
        color: '#EEF36A',
        fontColor: '#000000',
        more: `+${Math.round(Math.random()* 60)}`,
        description: 'Eleifend mi in nulla posuere sollicitudin aliquam ultrices.',
        images: [
        'https://images.unsplash.com/photo-1621982400152-883d350ac611?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbnxlbnwwfDB8Mnx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1463453091185-61582044d556?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1621888452284-6d739081cbe8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fG1hbnxlbnwwfDB8Mnx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        ],
        cover: 'https://images.unsplash.com/photo-1568715684971-9ac138754ab9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fGJ1aWxkaW5nfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    },
    {
        name: 'Travel',
        url: 'travel',
        color: '#EAEAEA',
        fontColor: '#000000',
        more: `+${Math.round(Math.random()* 60)}`,
        description: 'Consectetur lorem donec massa sapien faucibus et molestie ac feugiat.',
        images: [
        'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1463453091185-61582044d556?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1621868107155-d6cafe369377?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fG1hbnxlbnwwfDB8Mnx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1582610285985-a42d9193f2fd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGdpcmx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        ],
        cover: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    },
    // {
    //     name: 'Sports Talk',
    //     url: 'sports-talk',
    //     color: '#18020C',
    //     fontColor: '#FFFFFF',
    //     more: `+${Math.round(Math.random()* 60)}`,
    //     description: 'Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    //     images: [
    //     'https://images.unsplash.com/photo-1621709483704-0c6ed561d32c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMxfHx3b21hbnxlbnwwfDB8Mnx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    //     'https://images.unsplash.com/photo-1610371335245-ba23aa46800a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHBlcnNvbnxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    //     'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    //     'https://images.unsplash.com/photo-1620553967344-c6d788133f17?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDU3fHx3b21hbnxlbnwwfDB8Mnx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    //     ],
    //     cover: 'https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d3JpdGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    // },
    // {
    //     name: 'Far Cry 6',
    //     url: 'far-cry-6',
    //     color: '#C6D4FF',
    //     fontColor: '#000000',
    //     more: `+${Math.round(Math.random()* 60)}`,
    //     description: 'Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    //     images: [
    //     'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    //     'https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    //     'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    //     'https://images.unsplash.com/photo-1620490451629-e2eaeda383c0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDcyfHx3b21hbnxlbnwwfDB8Mnx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    //     ],
    //     cover: 'https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d3JpdGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    // },
    // {
    //     name: 'Hitman 3',
    //     url: 'hitman-3',
    //     color: '#696773',
    //     fontColor: '#FFFFFF',
    //     description: 'Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    //     images: [
    //     'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    //     'https://images.unsplash.com/photo-1463453091185-61582044d556?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    //     'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    //     'https://images.unsplash.com/photo-1582610285985-a42d9193f2fd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGdpcmx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    //     ],
    //     cover: 'https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d3JpdGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    // },
    // {
    //     name: 'Returnal',
    //     url: 'returnal',
    //     color: '#FFF9FB',
    //     fontColor: '#000000',
    //     description: 'Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    //     images: [
    //     'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    //     'https://images.unsplash.com/photo-1463453091185-61582044d556?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    //     'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    //     'https://images.unsplash.com/photo-1582610285985-a42d9193f2fd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGdpcmx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    //     ],
    //     cover: 'https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d3JpdGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    // },
]