import { useState, useEffect } from 'react';

const API = 'http://localhost:3000/data';

const getData = () => {
  const [state, setState] = useState([
    {
      certificate: [],
      Academic: [],
      experience: [],
      skills: [],
      interest: [],
      languages: [],
      social: [],
    },
  ]);

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setState(data))
      .catch(error => console.error(error));
  }, []);
  return state;
};

export default getData;
