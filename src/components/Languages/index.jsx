import React from 'react';
import Box from '../Box/Box';
import ListItems from '../ListItems/ListItems';

const Languages = ({ data }) => {
  console.log(data);
  const createLanguagesItem = (languages) => {
    return languages.map(language => (
      <div>
        <b>{language.name}</b>
        <br />
        {language.percentage}
      </div>
    ));
  };

  const items = [...createLanguagesItem(data)];

  return (
    <Box>
      <h1 className='Languages-title'>
        Languages
      </h1>
      <ListItems listName='Languages' items={items} columnsNumber={3} />
    </Box>
  );
};

export default Languages;
