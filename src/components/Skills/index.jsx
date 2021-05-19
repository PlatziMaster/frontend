import React from 'react';
import Box from '../Box/Box';
import ListItems from '../ListItems/ListItems';

const Skills = ({ data }) => {

  const createSkillsItem = (skills) => {
    return skills.map(skill => (
      <div>
        <b>{skill.name}</b>
        <br />
        {skill.percentage}
      </div>
    ));
  };
  const items = [...createSkillsItem(data)];

  return (
    <Box>
      <h1 className='Skills-title'>
        Skills
      </h1>
      <ListItems listName='Skills' items={items} columnsNumber={3} />
    </Box>
  );
};

export default Skills;
