import React from 'react';
import Box from '../Box/Box';
import ListItems from '../ListItems/ListItems';

const Experience = ({ data }) => {

  const createExperienceItem = (experiences) => {
    return experiences.map(experience => (
      <div>
        <b>{experience.jobTitle}</b>
        <br />
        {experience.jobDescription}
        <br />
        {experience.company}
        <br />
        {experience.startDate}
        <br />
        {experience.endDate}
      </div>
    ));
  };

  const items = [...createExperienceItem(data), '', '', ''];

  return (
    <Box>
      <h1 className='Experience-title'>
        Experience
      </h1>
      <ListItems listName='Experience' items={items} columnsNumber={2} />
    </Box>
  );
};

export default Experience;
