import React from 'react';
import { AiFillLike } from 'react-icons/ai';

const Interest = ({ interest }) => {
  return (
    <div className='box interest'>
      <div className='flex align-items-center gap-2'>
        <AiFillLike color='#588B8B' />
        <div className='title'>Intereses</div>
      </div>
      <div className='interest-content'>
        {interest &&
          interest.length > 0 &&
          interest.map((element, index) => {
            return (
              <div key={element.name} className='interest-card'>
                <div className='icon-container'>
                  <img alt={element.name} src={element.icon} />
                </div>
                <div>{element.name}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Interest;
