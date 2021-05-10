import React, { createContext, useEffect, useState } from 'react';
import getData from '../utils/getData';

const ProfileStore = createContext(null);

const ProfileProvider = ({ children }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const logic = async () => {
      setData(await getData());
    };
    logic();
  }, []);
  return <ProfileStore.Provider value={data}>{ children }</ProfileStore.Provider>;
};

export { ProfileStore };

export default ProfileProvider;
