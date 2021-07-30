import { useState, useEffect } from 'react';
import { getData } from '../utils/getData';


const useInitialState = (API) => {
    
  const [Info, setInfo] = useState([]);

  useEffect(() => {
    getData(API)
      .then(data => setInfo(data))
  }, []);//parametro para evitar loop infinito
    
  return Info;
}
export default useInitialState;