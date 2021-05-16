import React from 'react';
//import PropTypes from 'prop-types';

const Skills = ({ skills }) => {
  return (
    <div>
      <span className='Skills-title' />

      {
              skills?.map((item) => {
                return (
                  <span
                    key={item.name}
                    className='Skills-item'
                  >
                    {item.name}
                  </span>
                );
              })

      }

      <span className='Skills-item' />
      <span className='Skills-item' />
      <span className='Skills-item' />
    </div>
  );
};

Skills.propTypes = {

};

export default Skills;
