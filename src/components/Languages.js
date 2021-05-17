import React from 'react';
import ProgressItem from './ProgressItem';
//import PropTypes from 'prop-types';

const Languages = ({ languages }) => {
  return (
    <div>
      <h4 className='Languages-title'> Languages</h4>
      <div className="px-3 mt-3">

      {languages?.map((item) => {
        return <ProgressItem key={item.name} {...item} className='Languages-item' />;
      })}
      </div>

      <span className='Languages-item' />
      <span className='Languages-item' />
      <span className='Languages-item' />
    </div>
  );
};

Languages.propTypes = {};

export default Languages;
