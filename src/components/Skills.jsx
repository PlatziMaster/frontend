import React, { useContext } from 'react';
import { ColumnLayout, Section, SubTitle, Title } from '../styles/styles';
import { ProfileStore } from '../store/ProfileStore';

const SkillItem = ({ name, percentage }) => (
  <SubTitle>
    {name}
    {' '}
    (
    {percentage}
    )
  </SubTitle>
);

const Skills = () => {
  const data = useContext(ProfileStore);
  if (!data) {
    return <div />;
  }
  return (
    <Section>
      <Title>Habilidades</Title>
      <Section>
        <ColumnLayout columns='1fr 1fr'>
          { data.skills.map((itm, ix) => (
            // eslint-disable-next-line react/no-array-index-key
            <SkillItem key={ix} {...itm} />
          ))}
        </ColumnLayout>
      </Section>
    </Section>
  );
};

export default Skills;
