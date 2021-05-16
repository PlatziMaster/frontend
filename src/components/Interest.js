import React from 'react';
//import PropTypes from 'prop-types';

const Interest = ({ interest }) => {
  return (
    <div>
      <span className='Interest-title' />

      {
              interest?.map((item) => {
                return (
                  <span
                    key={item}
                    className='Interest-item'
                  >
                    {item}
                  </span>
                );
              })

      }
      <span className='Interest-item' />
      <span className='Interest-item' />
      <span className='Interest-item' />
    </div>
  );
};

Interest.propTypes = {

};

export default Interest;
