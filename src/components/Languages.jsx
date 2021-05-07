import React from 'react';
import Profile from '../components/Profile';
import '../styles/components/Languages.scss';

const Languages = ({title, children }) => (
  <Profile title={title}>
    {children}
  </Profile>
);

export default Languages;