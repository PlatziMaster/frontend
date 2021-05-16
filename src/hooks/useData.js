import { useContext, useState } from 'react';
import { appContext } from '../containers/AppContext';

const useData = (element) => {
  const {
    data: {
      dataFromApi: {
        data: { element },
      },
    },
  } = useContext(appContext);

  const [data, setData] = useState([]);
  return [data, setData];
};

export default useData;
