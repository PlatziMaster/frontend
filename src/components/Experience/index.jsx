import React from 'react';

const Experience = () => {
  const items = ['Item 1', 'Item 2', 'Item 3'];

  const renderItems = () => {
    return items.map(item => <li key={item} className='Experience-item'>{item}</li>);
  };

  return (
    <>
      <div className='Experience-title'>
        Experience
      </div>
      <ul>
        {renderItems()}
      </ul>
    </>
  );
};

export default Experience;
