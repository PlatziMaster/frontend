import React, { useState, useEffect } from 'react';

const About = () => {
  const [dataInfo, setDataInfo] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data')
      .then(response => response.json())
      .then(data => setDataInfo(data));
  }, []);
  return (
    <div className='Profile-container main'>
      <h2 className='Profile-title'>
        About
      </h2>
      <p>
        {dataInfo.profile}
      </p>
    </div>
  );
};

export default About;
