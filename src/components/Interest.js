import React from 'react';

import '../styles/components/Interest.css';

const Interest = ({ data }) => {

  const interest = data || [1, 2, 3];

  return (
    <div className='Interest-title'>
      <h1>Interest</h1>
      <ul>
        {interest != null &&
          interest.map(item => (
            <li key={item} className='Interest-item'>
              <p>
                {item}
              </p>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Interest;
