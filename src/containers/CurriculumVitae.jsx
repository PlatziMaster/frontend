import React from 'react';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import Social from '../components/Social';

const CurriculumVitae = ({ data }) => {
  const { social, avatar, name, experience, skills, academic, interest, languages, profile } = data && data;

  return (
    <>
      <Header avatar={avatar} name={name}>
        <About {...data} />
        <Social social={social} />
      </Header>
      <Profile profile={profile} />
      <Experience experience={experience} />
      <div className='Aside'>
        <Academic academic={academic} />
        <Skills skills={skills} />
      </div>
      <Interest interest={interest} />
      <Languages languages={languages} />
    </>
  );
};

CurriculumVitae.propTypes = {
  data: PropTypes.object,
};

export default CurriculumVitae;
