import React from 'react';
import dataMock from './dataMock';

const App = (props) => {
  const data = dataMock
  return (
    <>
      {props.children, props.data}
    </>
  )
};

export default App;
