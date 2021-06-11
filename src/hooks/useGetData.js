import { useState, useEffect } from 'react';
import getData from '../utils/getData';

const useGetData = () => {
  const API = 'http://localhost:3000/data';
  const [data, setData] = useState({});

  useEffect(() => {
    getData(API)
      .then(response => setData(response))
      .catch(error => console.error(error));
  }, []);
  return data;
};

export default useGetData;
