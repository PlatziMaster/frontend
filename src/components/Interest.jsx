import React from 'react';
import '../styles/components/Interest.css';

export default function Interest({ title, interest }) {
  return (
    <div className='interest'>
      <h3 className='interest-title'>{title}</h3>
      {interest && interest?.map((item) => {
        return (
          <div className='interest-container' key={interest.indexOf(item)}>
            <h3 className='interest-item'>{item.name}</h3>
          </div>
        );
      })}
    </div>
  );
}
