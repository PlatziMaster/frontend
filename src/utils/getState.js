import { useState, useEffect } from 'react';
import getData from './getData';

const useInitialState = (API) => {
  const [state, setState] = useState({
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
      .then(data => setState(data));
  }, []);
  return state;
};

export default useInitialState;
