import React from 'react';
import Box from '../Box/Box';
import ListItems from '../ListItems/ListItems';

const Academic = ({ data }) => {

  const createAcademicItem = (academics) => {
    return academics.map(academic => (
      <div>
        <b>{academic.degree}</b>
        <br />
        {academic.description}
        <br />
        {academic.institution}
        <br />
        {academic.startDate}
        <br />
        {academic.endDate}
      </div>
    ));
  };

  const items = [...createAcademicItem(data), '', ''];

  return (
    <Box>
      <h1 className='Academic-title'>
        Academic
      </h1>
      <ListItems listName='Academic' items={items} />
    </Box>
  );
};

export default Academic;
