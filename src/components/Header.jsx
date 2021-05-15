import React from 'react';
import '../styles/components/Header.css';

const Header = (props, { children }) => {

  const { name,
    profession,
    address,
    email,
    website,
    // eslint-disable-next-line react/destructuring-assignment
    phone } = props.info;

  return (
    <header className='header'>
      <div className='header-image'>
        <img src='../../public/img/Capture.png' alt='Imagen de alejandro' />
      </div>
      <div className='header-container'>
        <div className='Header-title'>
          <h1>{name}</h1>
        </div>
        <div className='header-job-title'>
          <p>{profession}</p>
        </div>
        <ul>
          <li className='header-phone'>
            📞 -
            {' '}
            {phone}
          </li>
          <li className='header-email'>
            📧 -
            {' '}
            {email}
          </li>
          <li className='header-website'>
            🕸 -
            {' '}
            <a href={website}>{website}</a>
          </li>
          <li className='header-adress'>
            🏡 -
            {' '}
            {address}
          </li>
        </ul>

      </div>

      {children}

    </header>
  );
};

export default Header;
