import React from 'react';

function Academic(props) {
  return (
    <>
      <section className='header__section-container'>
        <h1>Academic Title</h1>
        <div className='header-adress'>Profile Descrip</div>
        {children}
      </section>
    </>
  );
}

export default Academic;
