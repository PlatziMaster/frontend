import { useEffect, useState } from 'react';

const GetData = (API) => {
  const [data, setData] = useState({
    certificates: [],
    academic: [],
    experience: [],
    skills: [],
    interest: [],
    languages: [],
    social: [],
  });

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setData(data));
  }, []);
  return data;
};

export default GetData;
