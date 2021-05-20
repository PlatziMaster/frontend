// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

export const Footer = ({ footer }) => (
  <footer className='footer'>
    <p className='footer-text'>{`Todos los derechos reservados ${footer.year}.`}</p>
    <p className='footer-text'>
      Diseñado con
      {' '}
      <i className='fas fa-heart' />
      {` por ${footer.user}.`}
    </p>
  </footer>
);

Footer.propTypes = {
  footer: PropTypes.objectOf(PropTypes.string),
};
