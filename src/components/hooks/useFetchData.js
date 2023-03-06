import { useEffect, useState } from 'react';
import getData from '../../utils/getData';

const useFetchData = (url) => {
  const [dato, setDato] = useState(null);

  const datos = () => {
    getData(url).then(data => setDato(data));
  };

  useEffect(() => {
    datos();
  }, []);

  return {
    dato,
  };
};

export default useFetchData;
