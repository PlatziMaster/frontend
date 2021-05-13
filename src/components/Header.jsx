import React from 'react';
import { Wrapper } from '../styles/components/WrapperHeader';
import { Img } from '../styles/components/Photo';

const Header = () => {
  return (
    <Wrapper>
      <Img src='../../assets/images/photo.jpg' alt='profile' />
      <div>
        <h1 className='Header-title'>Frontend Developer</h1>
        <h2>Manuel David Arias Gonzalez</h2>
      </div>
    </Wrapper>
  );
};

export default Header;
