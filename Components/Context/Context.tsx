import { createContext, useState } from 'react'

export const AppContext = createContext(null)

const Context = ({ children }) => {
    const [userData, setUserData] = useState({userName: '', image: ''})
    const [pageName, setPageName] = useState('')
    const [roomURL, setRoomURL] = useState('')
    const [userModalData, setUserModalData] = useState({})

    const context = {
        userData,
        setUserData,
        pageName, 
        setPageName,
        roomURL,
        setRoomURL,
        userModalData,
        setUserModalData
    }

    return (
        <AppContext.Provider value={context}>
            {children}
        </AppContext.Provider>
    )
}

export default Context