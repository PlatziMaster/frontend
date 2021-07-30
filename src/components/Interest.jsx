import React from 'react';
import '../styles/components/Interest.styl';

const Interest = ({ interest }) => {

  return (
    <div className='Interest-title'>
      <h4>- My Personal Interests</h4>
      {
        interest?.map((i) => {
          return (
            <div key={i} className='Interest-item'>
              <>{i}</>
            </div>
          );
        })
      }
    </div>
  );
};

export default Interest;
