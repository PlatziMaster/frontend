import React from 'react';

const Interest = ({ interest }) => {
  return (
    <div className='Interest-content'>
      <h2 className='Interest-title'>
        Interest
      </h2>
      <div className='Interest-items'>
        <ul>
          {interest?.map(item => (
            <li className='Interest-item' key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Interest;