import React, { useState, useEffect } from 'react';

const Experience = () => {

  const [dataInfo, setDataInfo] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data')
      .then(response => response.json())
      .then(data => setDataInfo(data.experience));
  }, []);

  return (
    <div className='Experience main'>
      <h2 className='Experience-title'>
        Work experience
      </h2>
      <div className='Experience-container'>
        {dataInfo.map(data => (
          <div className='Experience-item'>
            <h2>
              {data.startDate}
              {' - '}
              {data.endDate}
            </h2>
            <h3>{data.company}</h3>
            <h3>{data.jobTitle}</h3>
            <p>
              {data.jobDescription}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
