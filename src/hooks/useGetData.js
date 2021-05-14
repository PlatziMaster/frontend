import { useState, useEffect } from 'react';
import getData from '../utils/getData';

const useGetData = api => {
  // this hook call to the function getData and return the data from the API

  const [userData, setUserData] = useState({
    names: '',
    profesion: '',
    addres: '',
    email: '',
    website: '',
    phone: '',
    avatar: '',
    Profile: '',
    certificate: [],
    Academic: [],
    experience: [],
    skills: [],
    interest: [],
    languages: [],
    social: [],
  });
  useEffect(() => {
    const data = getData(api);
    data.then(result => setUserData(result));
  }, []);
  return userData;
};

export default useGetData;
