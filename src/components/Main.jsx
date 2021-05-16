import React from 'react';

const Main = (props) => {
  const { children } = props;

  return (
    <>
      <main className='Main'>
        {children}
      </main>
    </>
  );
};

export default Main;
