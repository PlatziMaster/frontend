import React from 'react';

const Languages = ({ userData }) => {
  return (
    <div>
      <div className='Languages-title'>
        Idiomas
      </div>
      <div className='Languages-items'>
        <ul>
          {userData?.languages?.map(language => (
            <li  className='Languages-item' key={language.name}>
              {`${language.name} - (${language.percentage})`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Languages;
