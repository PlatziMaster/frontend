import React from 'react';
import ItemDescription from './Item-description';

import '../styles/components/Academic.css';

const Academic = ({ data }) => {

  const Academic = data || [{ key: 1 }, { key: 2 }, { key: 3 }];

  return (
    <div className='Academic-title'>
      <h1>Academic</h1>
      {
        Academic != null &&
        Academic.map(item => (
          <div key={item.institution || item.key} className='Academic-item'>
            <ItemDescription Academic={item} />
          </div>
        ))
      }
    </div>
  );
};

export default Academic;
