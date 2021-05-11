import React from 'react';
import SectionContainer from '../../../../components/SectionContainer';
import './Experience.scss';

export default ({ data }) => {
  return (
    <SectionContainer id='experienceContainer'>
      {data.map((e) => {
        return (
          <div key={e.id} className='exp'>
            <div>
              <h4>{e.org}</h4>
              <a href={e.website}>{e.website}</a>
              {e.sub && <p><i>{e.sub}</i></p>}
              <p>{e.duration}</p>
            </div>
            <p className='expDescription'>{e.description}</p>
          </div>
        );
      })}
    </SectionContainer>
  );
};
