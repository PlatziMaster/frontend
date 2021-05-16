import React from 'react';

const Header = (props) => {
  const { avatar, name, profession, children } = props;

  return (
    <>
      <header className='Header'>
        <section className='Header-img'>
          <img src={avatar} alt={name} />
        </section>
        <section className='Header-title'>
          <h1>{name}</h1>
          <h2>{profession}</h2>
          {children}
        </section>
      </header>
    </>
  );
};

export default Header;
