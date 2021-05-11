import React from 'react';

import SectionContainer from '../../../../components/SectionContainer';

import './Header.scss';

export default ({ data }) => {

  return (
    <SectionContainer id='header'>
      <div>
        <h1>{data.title}</h1>
        <p>{data.subtitle}</p>
      </div>
      <div className='luisMartinezPic' />
    </SectionContainer>
  );
};
