import React from 'react';
import '../styles/components/Interest.styl';

const Interest = (data) => {
  const { interest } = data;
  return (
    <section className='Interest-container'>
      <h2 className='Interest-title'>Interest</h2>
      <div className='Interest-items-container'>
        { interest &&
          interest.map(item => (
            <div className='Interest-item' key={interest.indexOf(item)}>
              {item}
            </div>
          ))
        }
      </div>
    </section>
  );
};

export default Interest;
