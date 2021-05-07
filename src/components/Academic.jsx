/* Componente Academic, en este se muestran los 
contactos de redes sociales y demas sobre la personal 
Se reutilizo Profiel y con la meta de crear este componente 
se encupsulo dentro, simplemente por requeriemiento de la competencia */

import React from 'react';
import '../styles/components/Academic.scss';
import Profile from '../components/Profile';

const Academic = ({ title, children }) => (
  <Profile title={title}>
    {children}
  </Profile>
);

export default Academic;