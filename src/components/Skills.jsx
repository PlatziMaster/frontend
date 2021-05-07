import React from 'react';
import '../styles/components/Skills.scss';
import Profile from '../components/Profile';

const Skills = ({title, children }) => (
  <Profile title={title}>
    {children}
  </Profile>
);

export default Skills;