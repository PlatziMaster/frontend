import React, { useContext } from 'react';
import { ColumnLayout, Section, SubTitle, Title } from '../styles/styles';
import { ProfileStore } from '../store/ProfileStore';

const ExperienceItem = ({ jobTitle, jobDescription, company, startDate, endDate }) => (
  <Section classifier='Experience-item'>
    <SubTitle>{jobTitle}</SubTitle>
    <div>
      <i>{company}</i>
      &nbsp;
      {startDate}
      &nbsp;-&nbsp;
      {endDate}
    </div>
    {jobDescription}
  </Section>
);

const Experience = () => {
  const data = useContext(ProfileStore);

  return (
    <Section>
      <Title classifier='Experience-title'>Experiencia</Title>
      <ColumnLayout columns='1fr 1fr'>
        { data.experience.map((itm, ix) => (
          // eslint-disable-next-line react/no-array-index-key
          <ExperienceItem key={ix} {...itm} />
        ))}
      </ColumnLayout>
    </Section>
  );
};

export default Experience;
