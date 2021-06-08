import React, { createContext, useEffect, useState } from 'react';
import { getData } from '../utils/getData';

const initialState = {
  loading: true,
  error: false,
}

const Provider = ({ children }) => {
  const [data, setData] = useState(initialState);

  useEffect(() => {
    getData('/data.json')
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

export default Provider;
export const appContext = createContext({})