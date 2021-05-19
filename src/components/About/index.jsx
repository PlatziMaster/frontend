import React from 'react';

const About = () => {
  const items = ['Item 1', 'Item 2', 'Item 3'];

  const renderItems = () => {
    return items.map(item => <li key={item} className='About-item'>{item}</li>);
  };

  return (
    <>
      <div className='About-title'>
        About
      </div>
      <ul>
        {renderItems()}
      </ul>
    </>
  );
};

export default About;
