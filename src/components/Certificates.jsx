import React from 'react';

const Certificates = ({ certificates }) => {
  return (
    <div className='Certificates-content'>
      <h2 className='Certificates-title'>
        Certificates
      </h2>
      <div className='Certificates-items'>
        <ul>
          {certificates?.map(ct => (
            <li className='Certificates-item' key={ct.name}>
              {`${ct.name} - (${ct.institution})`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Certificates;