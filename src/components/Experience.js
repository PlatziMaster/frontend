import React from 'react';
//import PropTypes from 'prop-types';

const Experience = ({ experience }) => {
  return (
    <div>
      <span className='Experience-title' />

      {
              experience?.map((item, id) => {
                return (
                  <span
                    key={id}
                    className='Experience-item'
                  >
                    {item.company}
                  </span>
                );
              })

      }

      <span className='Experience-item' />
      <span className='Experience-item' />
      <span className='Experience-item' />
    </div>
  );
};

Experience.propTypes = {

};

export default Experience;
