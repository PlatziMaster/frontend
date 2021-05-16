import React from 'react';
import ProgressItem from './ProgressItem';
//import PropTypes from 'prop-types';

const Languages = ({ languages }) => {
  return (
    <div>
      <h4 className='Languages-title'> languages</h4>
      {languages?.map((item) => {
        return <ProgressItem key={item.name} {...item} className='Languages-item' />;
      })}

      <span className='Languages-item' />
      <span className='Languages-item' />
      <span className='Languages-item' />
    </div>
  );
};

Languages.propTypes = {};

export default Languages;
