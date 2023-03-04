import React from 'react';

const About = () => {
  return (
    <>
      <div className='col-3'>
        <img className='img-profile ' src='https://media.licdn.com/dms/image/C4E03AQFkccad2NlFeA/profile-displayphoto-shrink_200_200/0/1630707728621?e=1683158400&v=beta&t=Fjsxcoqdn5INIVNUR6zLre2ErbEcpeHxF-USeLdnVso' alt='profile' />
      </div>
      <div className='col-9'>
        <h2 className='Header-title About-title'>Jose Alberto Cortes Ayala </h2>
        <p className='Header-job-title'>Desarrollador javascript/python</p>
        <div>
          <span className='Header-phone About-item'>55-41-17-38-26</span>
          {' '}
          <span className='Header-email About-item'>josealbertocortesayala94@gmail.com</span>
          {' '}
          <span className='Header-website About-item'>N/A</span>
        </div>
        <div className='Header-adress'>
          Ciudad de México
        </div>
      </div>
    </>
  );
};

export default About;
