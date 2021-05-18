import React from 'react';

const Interest = () => {
  const items = ['Item 1', 'Item 2', 'Item 3'];

  const renderItems = () => {
    return items.map(item => <li key={item} className='Interest-item'>{item}</li>);
  };

  return (
    <>
      <div className='Interest-title'>
        Interest
      </div>
      <ul>
        {renderItems()}
      </ul>
    </>
  );
};

export default Interest;
