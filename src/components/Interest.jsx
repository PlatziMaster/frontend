import React from 'react';
import '../styles/components/Interest.styl';

const Interest = ({
  interest,
}) => {

  return (
    <div className='interest'>
      <h2 className='interest-title'>Intereses</h2>
      {interest &&
        interest.map((item, index) => {
          const { id } = index;
          return (
            <div key={id} className='interest-item'>
              <p className='interest-name'>{item}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Interest;
