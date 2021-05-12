import React from 'react';
import '../styles/components/Social.styl';

const Social = ({ data = [], username = 'username' }) => {
  const list = data.map(item => (
    <a href={`${item.url}${username}`} key={item.name} rel='noreferrer' target='_blank'>
      <img className={item.name} src={`../assets/svg/${item.name}.svg`} alt={item.name} />
    </a>
  ));
  return (
    <div className='Social'>
      <span className='Social-title'>{`/${username}`}</span>
      <div className='Social-list'>
        { data.length ? list : <p className='empty'>No data</p>}
      </div>
    </div>
  );
};

export default Social;
