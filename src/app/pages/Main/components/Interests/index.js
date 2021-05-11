import React from 'react';
import SectionContainer from '../../../../components/SectionContainer';
import './Interests.scss';

export default ({ data }) => {
  return (
    <SectionContainer id='interestsContainer'>
      <p>{data}</p>
    </SectionContainer>
  );
};
