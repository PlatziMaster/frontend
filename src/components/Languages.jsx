import React from 'react';
import '../styles/components/Languages.css';

export default function Languages({ title, languages }) {
  return (
    <div className='language'>
      <h3 className='language-title'>{title}</h3>
      {languages && languages?.map((item) => {
        return (
          <div className='language-item' key={languages.indexOf(item)}>
            <h3 className='level Languages-item'>{item.name}</h3>
            <h3 className='percentage Languages-item'>{item.percentage}</h3>
          </div>
        );
      })}
    </div>
  );
}

