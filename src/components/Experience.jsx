import React from 'react';
import '../styles/components/Experience.scss';
import Profile from '../components/Profile';

const Experience = ({title, children }) => (
  <Profile title={title}>
    {children}
  </Profile>
);

export default Experience;