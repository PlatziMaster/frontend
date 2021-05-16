import React from 'react';
import ProgressItem from './ProgressItem';
//import PropTypes from 'prop-types';

const Skills = ({ skills }) => {
  return (
    <div>
      <h4 className='Skills-title'> skills</h4>

      {
              skills?.map((item) => {
                return (
                  <ProgressItem key={item.name} {...item} className='Skills-item' />

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
