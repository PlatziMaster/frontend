import { useState, useEffect } from 'react';
import getData from '../utils/getData';

const useFetchData = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const API = 'http://localhost:3000/data';

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await getData(API);
      setData(response);
    } catch {
      setError('Not found information!');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error };
};

export default useFetchData;
