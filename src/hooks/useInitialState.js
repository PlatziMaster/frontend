import { useState, useEffect } from 'react';
import getData from '../utils/getData';

const useInitialState = (API) => {

  const [info, setInfo] = useState({
    name: [],
    profession: [],
    address: [],
    email: [],
    website: [],
    phone: [],
    avatar: [],
    Profile: [],
    certificate: [],
    Academic: [],
    experience: [],
    skills: [],
    interest: [],
    languages: [],
    social: [],
  });

  useEffect(() => {
    getData(API)
      .then(data => setInfo(data));
  }, []);
  return info;
};

export default useInitialState;
