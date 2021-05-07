import React, { useState, useEffect } from 'react';

const Academic = () => {
  const [dataInfo, setDataInfo] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data')
      .then(response => response.json())
      .then(data => setDataInfo(data));
  }, []);
  return (
    <div className='Profile-container main'>
      <h2 className='Profile-title'>
        {dataInfo.academicDegree}
      </h2>
      <p>
        {dataInfo.academicDescription}
      </p>
    </div>
  );
};

export default Academic;
