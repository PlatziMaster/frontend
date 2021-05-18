import React from 'react';

class Academic extends React.Component {
  render() {
    return (
      <div className='containerAcademic'>
        <img className='logouniandes' src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/University_of_Los_Andes_logo.svg/1200px-University_of_Los_Andes_logo.svg.png' alt='logouniandes' />
        <div className='listdegrees'>
          <li className='Uniandes'>
            <h3>Ingeniera Química de la Universidad de los Andes</h3>
          </li>
          <li className='Emprendimiento'>
            <h3>Opción académica en Emprendimiento</h3>
          </li>
          <li className='Gestión'>
            <h3>Opción académica en Gestión</h3>
          </li>
          <li className='PLI'>
            <h3>Programa de Liderazgo en Ingeniería</h3>
          </li>
        </div>
      </div>
    );
  };
}

export default Academic;
