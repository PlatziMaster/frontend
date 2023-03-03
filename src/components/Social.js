import React from 'react';
import '../styles/components/App.styl';

const Social = ({ data }) => {
  const social = Object.values(data);
  return (
    <div className='redes-sociales'>
      {social.map(red => (
        <a href={red.url} target='_blank' rel='noreferrer' className='red-social-link'>
          {/* {red.name} */}
          <img src={red.url_img} alt='' className='red-social-icon' />
        </a>
      ))}
    </div>
  );
};

export default Social;
