import React from 'react';

const Interest = ({ userData }) => {
  return (
    <div>
      <div className='Interest-title'>
        Intereses
      </div>
      <div className='Interest-items'>
        <ul>
          {userData?.interest?.map(item => (
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
