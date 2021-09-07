import { useState, useEffect } from 'react';

const getData = (ENDPOINT) => {
  const [resume, setResume] = useState([], { Profile: [] }, { experience: [] }, { Academic: [] }, { skills: [] }, { interest: [] }, { languages: [] }, { social: [] });

  useEffect(() => {
    fetch(ENDPOINT)
      .then(response => response.json())
      .then(data => setResume(data));
  }, []);

  return resume;
};

export default getData;
