import React from 'react';

const Skills = () => {
  const items = ['Item 1', 'Item 2', 'Item 3'];

  const renderItems = () => {
    return items.map(item => <li key={item} className='Skills-item'>{item}</li>);
  };

  return (
    <>
      <div className='Skills-title'>
        Skills
      </div>
      <ul>
        {renderItems()}
      </ul>
    </>
  );
};

export default Skills;
