import React from 'react';

const Academic = () => {
  const items = ['Item 1', 'Item 2', 'Item 3'];

  const renderItems = () => {
    return items.map(item => <li key={item} className='Academic-item'>{item}</li>);
  };
  return (
    <>
      <div className='Academic-title'>
        Academic
      </div>
      <ul>
        {renderItems()}
      </ul>
    </>
  );
};

export default Academic;
