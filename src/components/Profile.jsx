import React from 'react';

export default function Profile({ data }) {
  return (
    <div className='profile'>
      <h2>
        Perfil
      </h2>
      <p>{data.Profile}</p>
    </div>
  );
}
