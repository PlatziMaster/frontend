// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Components

// Styles
import './layout.css';
// import { GlobalStyles } from '../styles/GlobalStyles';

export const Layout = ({ children }) => (
  <>
    {/* <GlobalStyles /> */}
    <main>{children}</main>
  </>
);

Layout.propTypes = {
  children: PropTypes.node,
};
