import React from 'react';
import '../styles/components/Footer.styl';
import Experience from '../elements/Experience';
import Interest from '../elements/Interest';
import Languages from '../elements/Languages';
import SocialMedia from '../elements/SocialMedia';

const FooterSection = ({ data }) => {
  return (
    <div className='footer-container'>
      <Experience experience={data.experience} />
      <div className='extra-info'>
        <Interest interest={data.interest} />
        <Languages languages={data.languages} />
        <SocialMedia social={data.social} />
      </div>
    </div>
  );
};

export default FooterSection;
