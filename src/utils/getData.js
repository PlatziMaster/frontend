import { useState, useEffect } from 'react';

export const getData = url => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(characters => setCharacters(characters.results));
  }, [url]);
  return characters;
};

