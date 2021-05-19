import React from 'react';
import Box from '../Box/Box';
import ListItems from '../ListItems/ListItems';

const Interest = ({ data }) => {

  const createInterestsItem = (interest) => {
    return interest.map(interestItem => (
      <div>
        {interestItem}
      </div>
    ));
  };

  const items = [...createInterestsItem(data)];

  return (
    <Box>
      <h1 className='Interest-title'>
        Interest
      </h1>
      <ListItems listName='Interest' items={items} columnsNumber={2} />
    </Box>
  );
};

export default Interest;
