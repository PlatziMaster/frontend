import React from 'react';
import Box from '../Box/Box';
import ListItems from '../ListItems/ListItems';

const Academic = () => {
  const items = ['.Academic-Item 1', '.Academic-Item 2', '.Academic-Item 3'];

  return (
    <Box>
      <h1 className='Academic-title'>
        .Academic-title
      </h1>
      <ListItems listName='Academic' items={items} />
    </Box>
  );
};

export default Academic;
