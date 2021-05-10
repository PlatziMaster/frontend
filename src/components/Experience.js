import React from 'react';
import ItemDescription from './Item-description';

import '../styles/components/Experience.css';

const Experience = ({ data }) => {
  const experience = data || [{ key: 1 }, { key: 2 }, { key: 3 }];
  return (
    <div className='Experience-title'>
      <h1>Experience</h1>
      {
        experience != null &&
        experience.map(item => (
          <div key={item.company || item.key} className='Experience-item'>
            <ItemDescription experience={item} />
          </div>
        ))
      }
    </div>
  );
};

export default Experience;
