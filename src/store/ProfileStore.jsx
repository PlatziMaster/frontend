import React, { createContext, useEffect, useState } from 'react';
import getData from '../utils/getData';

const ProfileStore = createContext(null);

const ProfileProvider = ({ children }) => {
  const [data, setData] = useState({

    'certificate': [

    ],
    'Academic': [

    ],
    'experience': [

    ],
    'skills': [

    ],
    'interest': [
    ],
    'languages': [
    ],
    'social': [

    ],
  });
  useEffect(() => {
    const logic = async () => {
      const result = await getData();
      setData(result);
    };
    logic();
  }, []);
  return <ProfileStore.Provider value={data}>{ children }</ProfileStore.Provider>;
};

export { ProfileStore };

export default ProfileProvider;
