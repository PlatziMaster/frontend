import React from 'react';
import '../styles/components/App.styl';

const Header = ({ data }) => {
  return (
    <div className='header'>
      <h2 className='header-title'>Datos Principales</h2>
      <div className='avatar'>
        <img src={data.avatar} alt={`${data.name}'s avatar`} />
      </div>
      <p>
        Nombre completo:
        {' '}
        {data.name}
      </p>
      <p>
        Profesión:
        {' '}
        {data.profession}
      </p>
      <p>
        Dirección:
        {' '}
        {data.address}
      </p>
      <p>
        Correo electrónico:
        {' '}
        {data.email}
      </p>
      <p>
        Sitio Web:
        {' '}
        {data.website}
      </p>
      <p>
        Número telefónico:
        {' '}
        {data.phone}
      </p>
      <p>
        Descripción:
        {' '}
        {data.profile}
      </p>
    </div>
  );
};

export default Header;
