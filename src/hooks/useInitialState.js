import { useEffect, useState } from 'react';
import getData from '../utils/getData';

const useInitialState = (API) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData(API) {
      const data = await getData(API);
      setData(data);
    }
    fetchData(API);

  }, []);
  return data;
};

export default useInitialState;
