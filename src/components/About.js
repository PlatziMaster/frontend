import React from 'react';
import { useSelector } from 'react-redux';

function About(children) {
  const data = useSelector(state => state.user.data);

  console.log(data);
  return (
    <>
      <section className='header__section-container'>
        {/* <h1>{data.name}</h1> */}
        <div className='header-job-title'>Job Title</div>
        <section className='header-phone-email-web'>
          <div>{/* {userData.phone} */}</div>
          <div>Email</div>
          <div>Website</div>
        </section>
        <div className='header-adress'>adress</div>
        {children}
      </section>
    </>
  );
}

export default About;
