import React from 'react';
import '../styles/components/Languages.scss';
import Profile from '../components/Profile';

const Languages = ({title, children }) => (
  <Profile title={title}>
    {children}
  </Profile>
);

export default Languages;