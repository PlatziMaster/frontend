import { useEffect, useState } from 'react';
import getData from '../utils/getData';

function useData() {
  const [state, setState] = useState(null);

  useEffect(() => {
    getData('http://localhost:3000/data')
      .then((response) => {
        setState(response);
      })
      .catch(error => console.log(error));
  }, []);

  return state;
};

export default useData;
