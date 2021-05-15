import { useState, useEffect } from 'react';

const API = 'http://localhost:3000/data';
const getData = () => {
  const [datacv, setDatacv] = useState({
    Academic: [],
    certificate: [],
    experience: [],
    skills: [],
    interest: [],
    languages: [],
    social: [],
  });

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setDatacv(data));
  }, []);
  return datacv;
};
export default getData;
