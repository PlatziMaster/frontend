// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Styled Components
import { ResumeStyled } from './styles';

export const Resume = ({ children }) => (
  <ResumeStyled className='highcontainer'>
    {children}
  </ResumeStyled>
);

Resume.propTypes = {
  children: PropTypes.node,
};
