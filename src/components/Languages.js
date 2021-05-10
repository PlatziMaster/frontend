import React from 'react';
import ItemSkill from './Item-skills';

import '../styles/components/Languages.css';

const Languages = ({ data }) => {

  const languages = data || [{ key: 1 }, { key: 2 }, { key: 3 }];
  return (
    <div className='Languages-title'>
      <h1>Languages</h1>
      {languages != null &&
        languages.map(item => (
          <div key={item.name || item.key} className='Languages-item'>
            <ItemSkill skills={item} />
          </div>
        ))
      }
    </div>
  );
};

export default Languages;
