import React from 'react';

const Languages = ({ languages }) => {
  return (
    <div className='Languages-content'>
      <h2 className='Languages-title'>
        Languages
      </h2>
      <div className='Languages-items'>
        <ul>
          {languages?.map(lang => (
            <li  className='Languages-item' key={lang.name}>
              {`${lang.name} - (${lang.percentage})`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Languages;