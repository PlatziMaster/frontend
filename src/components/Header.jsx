import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { Wrapper } from '../styles/components/WrapperHeader';
import { Img } from '../styles/components/Photo';

const Header = () => {
  const data = useContext(AppContext);

  return (
    <Wrapper>
      <Img src={data.data?.avatar} alt='profile' />
      <div>
        <h1 className='Header-title'>{data.data?.profession}</h1>
        <h2>{data.data?.name}</h2>
      </div>
    </Wrapper>
  );
};

export default Header;
