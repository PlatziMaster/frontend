import React from 'react';
import Box from '../Box/Box';
import ListItems from '../ListItems/ListItems';

const Skills = () => {
  const items = ['.Experience-Item 1', '.Experience-Item 2', '.Experience-Item 3'];

  return (
    <Box>
      <h1 className='Skills-title'>
        .Skills-title
      </h1>
      <ListItems listName='Skills' items={items} />
    </Box>
  );
};

export default Skills;
