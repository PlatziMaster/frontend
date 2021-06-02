import { useState, useEffect } from 'react';
import getData from '../utils/getData';

const useInitialData = () => {
  const [state, setState] = useState({});

  useEffect(() => {
    getData()
      .then((res) => { setState({ ...res }); })
      .catch(err => console.error(err));
  }, []);

  return state;
};

export default useInitialData;
