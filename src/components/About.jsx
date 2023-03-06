import React from 'react';
// import pfp from '../../public/images/WUTVPGKj_400x400.jpg';

export default function About({ data }) {
  return (
    <div className='about'>
      <div>
        <img src='../../public/images/WUTVPGKj_400x400.jpg' alt='pfp' />
      </div>
      <div>
        <h1>{data.name}</h1>
        <h2>{data.profession}</h2>
        <ul>
          <li>{data.email}</li>
          <li>{data.address}</li>
        </ul>
      </div>
    </div>
  );
}
