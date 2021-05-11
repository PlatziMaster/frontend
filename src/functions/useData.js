import { useState, useEffect } from 'react';
import API_URL from '../utils/environment';
import getData from './getData';

/*
  Function to SET data from API
*/

function useData() {
  const [state, setState] = useState({});

  useEffect(() => {
    getData(`${API_URL}/data.json`)
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