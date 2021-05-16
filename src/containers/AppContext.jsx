import React, { createContext, useEffect, useState } from 'react';
import { getData } from '../utils/getData';

export const appContext = createContext({});

const AppContext = ({ children }) => {
  const [data, setData] = useState({
    loading: true,
    error: false,
  });

  useEffect(() => {
    getData('https://shrouded-thicket-27001.herokuapp.com/')
      .then((dataFromApi) =>
        setData({ loading: false, error: false, dataFromApi })
      )
      .catch((error) => {
        setData({ ...data, error: true });
        console.error(error);
      });
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
};

export default AppContext;
