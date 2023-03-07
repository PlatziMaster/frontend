import React from 'react';

const Academic = ({ userData }) => {
  return (
    <div>
      <div className='Academic-title'>
        Títulos Académicos
      </div>
      <div className='Academic-items'>
        <ul>
          {userData?.certificate?.map(cert => (
            <li className='Academic-item' key={cert.name}>
              {`${cert.name} - (${cert.institution})`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Academic;
