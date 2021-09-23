import { useState, useEffect } from 'react';

const getData = url => {
  const [datos, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data.results));
  }, [url]);
  return datos;
};

export { getData };
