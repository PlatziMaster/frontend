import React from 'react';

const Interest = ({ interest = [] }) => {

  return (
    <div className='interest__container'>
      <h4>- My Personal Interests</h4>
      {
        interest.map((i) => {
          return (
            <div key={i} className='interest__list'>
              <>{i}</>
            </div>
          );
        })
      }
    </div>
  );
};

export default Interest;
