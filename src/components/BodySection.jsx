import React from 'react';
import '../styles/components/Body.styl';
import Academic from '../elements/Academic';
import Skills from '../elements/Skills';
import SoftSkills from '../elements/SoftSkills';

const BodySection = ({ data }) => {
  return (
    <div className='body-container'>
      <SoftSkills softskills={data.softskills} />
      <Skills skills={data.skills} />
      <Academic academic={data.Academic} />
    </div>
  );
};

export default BodySection;
