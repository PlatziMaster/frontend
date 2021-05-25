import { useState, useEffect } from 'react';

/** @function
 * @name getData
 * @param  {string} API - URL of the API to consult
 * @returns {object} infoCV - Data related with the CV requested
 */
const getData = (API) => {
  const [ infoCV, setInfoCV ] = useState({});

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setInfoCV(data));
  }, []);

  return infoCV;
}

export default getData
