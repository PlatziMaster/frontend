import React from 'react';
import Box from '../Box/Box';
import ListItems from '../ListItems/ListItems';

const Interest = () => {
  const items = ['.Interest-Item 1', '.Interest-Item 2', '.Interest-Item 3'];
  return (
    <Box>
      <h1 className='Interest-title'>
        .Interest-title
      </h1>
      <ListItems listName='Interest' items={items} columnsNumber={2} />
    </Box>
  );
};

export default Interest;
