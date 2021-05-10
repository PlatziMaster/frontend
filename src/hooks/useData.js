import { useEffect, useState } from 'react';
import getData from '../utils/getData';

function useData() {
  const [state, setState] = useState({});

  useEffect(() => {
    getData('http://localhost:3000/data')
      .then((response) => {
        setState({
          ...state,
          ...response,
        });
      })
      .catch(error => console.log(error));
  }, []);

  return state;
};

export default useData;
