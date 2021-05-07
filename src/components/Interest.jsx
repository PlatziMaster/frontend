import React from 'react';
import '../styles/components/Interest.scss';
import Profile from '../components/Profile';

const Interest = ({title,  children }) => (
  <Profile title={title}>
    {children}
  </Profile>
);

export default Interest;