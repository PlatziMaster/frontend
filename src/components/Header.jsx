import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { Wrapper } from '../styles/components/WrapperHeader';
import { Img } from '../styles/components/Photo';

const Header = ({ children }) => {
  const data = useContext(AppContext);

  return (
    <Wrapper>
      <Img src={data.avatar} alt='profile' />
      <div>
        <h1 className='Header-title'>{data.profession}</h1>
        <h2>{data.name}</h2>
      </div>
    </Wrapper>
  );
};

export default Header;
