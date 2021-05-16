import React from 'react';
//import PropTypes from 'prop-types';

const Academic = ({ certificate, Academic }) => {
  return (
    <div>
      <span className='Academic-title' />
      {certificate?.map((item) => {
        return (
          <span key={item.name} className='certificate-item'>
            {item.name}
          </span>
        );
      })}

      {Academic?.map((item) => {
        return (
          <span key={item.degree} className='Academic-item'>
            {item.degree}
          </span>
        );
      })}

      <span className='Academic-item' />
      <span className='Academic-item' />
      <span className='Academic-item' />
    </div>
  );
};

Academic.propTypes = {};

export default Academic;
