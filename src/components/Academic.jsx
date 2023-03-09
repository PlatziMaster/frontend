import React from 'react';

const Academic = ({ academic }) => {
  return (
    <div className='Academic-content'>
      <h2 className='Academic-title'>
        Academic Titles
      </h2>
      <div className='Academic-items'>
        <ul>
          {academic?.map(acad => (
            <li className='Academic-item' key={acad.degree}>
              {`${acad.degree} - (${acad.institution})`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Academic;