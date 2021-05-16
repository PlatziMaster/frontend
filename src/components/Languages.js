import React from 'react';
//import PropTypes from 'prop-types';

const Languages = ({ languages }) => {
  return (
    <div>
      <span className='Languages-title' />

      {
              languages?.map((item) => {
                return (
                  <span
                    key={item.name}
                    className='Languages-item'
                  >
                    {item.name}
                  </span>
                );
              })

      }

      <span className='Languages-item' />
      <span className='Languages-item' />
      <span className='Languages-item' />
    </div>
  );
};

Languages.propTypes = {

};

export default Languages;
