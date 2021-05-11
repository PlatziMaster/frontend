import React from 'react';
import SectionContainer from '../../../../components/SectionContainer';
import './Profile.scss';

export default ({ data }) => {
  return (
    <SectionContainer id='sideProfile'>
      <p>{data.top}</p>

      <div>
        <div>
          <a href={data.middle.portfolio.href}>{data.middle.portfolio.label}</a>
          <p>{data.middle.portfolio.text}</p>
        </div>

        <div>
          <a href={data.middle.github.href}>{data.middle.github.label}</a>
          <p>{data.middle.github.text}</p>
        </div>

        <div>
          <p>{data.middle.tel}</p>
          <p>{data.middle.mail}</p>
        </div>
      </div>

      <p>{data.bottom}</p>
    </SectionContainer>
  );
};
