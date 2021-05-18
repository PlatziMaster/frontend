import React from 'react';
import Box from '../Box/Box';
import ListItems from '../ListItems/ListItems';

const Experience = () => {
  const items = ['.Experience-item 1', '.Experience-item 2', '.Experience-item 3', '.Experience-item 4'];

  return (
    <Box>
      <h1 className='Experience-title'>
        .Experience-title
      </h1>
      <ListItems listName='Experience' items={items} columnsNumber={2} />
    </Box>
  );
};

export default Experience;
