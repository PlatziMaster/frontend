import React from 'react';

import '../styles/components/Item-skill.css';

const ItemSkill = ({ skills, languages }) => {

  const {
    name,
    percentage,
  } = skills || languages || [];

  const styles = {
    width: percentage,
  };
  return (
    <div className='Item-skill'>
      <div className='Item-skill-progress'>
        <div className='Item-skill-progress-total' style={styles}> </div>
      </div>
      <div className='Item-skill-description'>
        <div className='Item-skill-name'>{name}</div>
        <div className='Item-skill-porcentage'>{percentage}</div>
      </div>
    </div>
  );
};

export default ItemSkill;
