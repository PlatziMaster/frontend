import React, { createContext, useEffect, useState } from 'react'
import { getData } from '../utils/getData'

export const appContext = createContext({})

const AppContext = ({children}) => {
    const [data, setData] = useState({
        loading: true
    })
    
     useEffect(() => {
      getData('https://shrouded-thicket-27001.herokuapp.com/')
        .then((dataFromApi) => setData({ loading: false, dataFromApi }))
        .catch(console.warn);
     }, []);

    return (
      <appContext.Provider
        value={{
          data,
          setData,
        }}
      >
        {children}
      </appContext.Provider>
    );
}

export default AppContext
