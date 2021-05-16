import React from 'react';
//import PropTypes from 'prop-types';

const Academic = ({ certificate, Academic }) => {
  return (
    <div>
      <h4 className='Academic-title'> Academic</h4>
      {Academic?.map((item) => {
        return (
          <span key={item.degree} className='Academic-item'>
            {item.degree}
          </span>
        );
      })}

      <h4 className='Certificate-title'> certificate</h4>

      {certificate?.map((item) => {
        return (
          <span key={item.name} className='certificate-item'>
            {item.name}
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
