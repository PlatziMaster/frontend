import React from 'react';

const Social = ({ social }) => (
  <div className='Social'>
    {social && social.map(item => (
      <div className='Social-item' key={`${item.name}`}>
        <a href={item.url}>
          <p>{item.name}</p>
        </a>
      </div>
    ))}
  </div>
);

export default Social;
