// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

export const Social = ({ social }) => (
  <div className='icons'>
    {social?.map(({ url, image, name }) => (
      <a key={name} href={url} target='_blank' rel='noreferrer'><img className='iconimages' src={image} alt='linkedin icon' /></a>
    ))}
  </div>
);

Social.propTypes = {
  social: PropTypes.arrayOf(PropTypes.any),
};
