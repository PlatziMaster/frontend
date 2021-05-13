import { useState } from 'react';
import getData from '../utils/getData';

const useInitialData = () => {

  const [state, setState] = useState({});

  const data = getData();
  setState(data);

  return state;
};

export default useInitialData;
