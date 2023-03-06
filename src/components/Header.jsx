import React from 'react';

const Header = ({
  children,
  name = 'Curriculum Vitae',
  profession = '',
  avatar = '',
}) => {
  return (
    <div className='section two-cols '>
      <div className='title-section'>
        <img className='avatar' src={avatar} alt={`${name}'s Avatar`} />
      </div>
      <div className='desc-section des-section-center'>
        <h1 className='Header-title'>{name}</h1>
        <p>{profession}</p>
        {children}
      </div>
    </div>
  );
};

export default Header;
