import React, { createContext, useState } from 'react'

export const appContext = createContext(null)

const AppContext = ({children}) => {
    const [data, setData] = useState({})
    
    return (
        <appContext.Provider value={{
            data,
            setData
        }}>
            {children}
        </appContext.Provider>
    )
}

export default AppContext
