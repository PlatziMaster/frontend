import React from 'react';
import '../styles/components/App.styl';
import Perfil from '../components/Perfil';
import Objetivo from '../components/Objetivo';

const App = () => {
  return (
    <div className="wrapper">
      <Perfil> </Perfil>
      <Objetivo> </Objetivo>
    </div>
  );
};

export default App;
