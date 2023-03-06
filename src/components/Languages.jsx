import React from 'react';

const Languages = ({ languages = [] }) => {
  return (
    <div className='section two-cols'>
      <div className='title-section'>
        <h2 className='Languages-title'>Idiomas</h2>
      </div>
      <div className='desc-section'>
        {languages.map((item) => {
          return (
            <p key={item.name} className='Languages-item'>
              {item.name}
              <span>{item.level}</span>
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Languages;
