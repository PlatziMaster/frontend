import React from 'react';
import ProgressItem from './ProgressItem';
//import PropTypes from 'prop-types';

const Skills = ({ skills }) => {
  const order = skills?.sort((a, b) => parseInt(b.percentage, 10) - parseInt(a.percentage, 10));
  console.log(order);
  return (
    <div>
      <h4 className='Skills-title'> Habilidades</h4>
      <div className='px-3 mt-3'>
        {order?.map((item) => {
          return (
            <ProgressItem key={item.name} {...item} className='Skills-item' />
          );
        })}
      </div>

      <span className='Skills-item' />
      <span className='Skills-item' />
      <span className='Skills-item' />
    </div>
  );
};

Skills.propTypes = {};

export default Skills;
