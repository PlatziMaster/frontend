import React from 'react';
import Box from '../Box/Box';
import ListItems from '../ListItems/ListItems';

const Lenguages = () => {
  const items = ['.Lenguages-Item 1', '.Lenguages-Item 2', '.Lenguages-Item 3'];

  return (
    <Box>
      <h1 className='Languages-title'>
        .Lenguages-title
      </h1>
      <ListItems listName='Languages' items={items} columnsNumber={3} />
    </Box>
  );
};

export default Lenguages;
