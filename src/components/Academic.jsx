import React, { useContext } from 'react';
import { Section, SubTitle, Title } from '../styles/styles';
import { ProfileStore } from '../store/ProfileStore';

const AcademicItem = ({ degree, description, institution, startDate, endDate }) => (
  <Section classifier='Academic-item'>
    <SubTitle>{degree}</SubTitle>
    <div>
      <i>{institution}</i>
      &nbsp;
      {startDate}
      &nbsp;-&nbsp;
      {endDate}
    </div>
    {description}
  </Section>
);

const Academic = () => {
  const data = useContext(ProfileStore);

  return (
    <Section>
      <Title classifier='Academic-title'>Estudios</Title>
      { data.Academic.map((itm, ix) => (
        // eslint-disable-next-line react/no-array-index-key
        <AcademicItem key={ix} {...itm} />
      ))}
    </Section>
  );
};

export default Academic;
