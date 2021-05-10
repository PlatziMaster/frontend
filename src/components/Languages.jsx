import React, { useContext } from 'react';
import { Chip, Section, Title } from '../styles/styles';
import { ProfileStore } from '../store/ProfileStore';

const Languages = () => {
  const data = useContext(ProfileStore);

  return (
    <Section>
      <Title classifier='Languages-title'>Lenguajes</Title>
      <Section>
        <div>
          { data.languages.map((itm, ix) => (
            // eslint-disable-next-line react/no-array-index-key
            <Chip classifier='Languages-item' key={ix}>
              {itm.name}
              {' '}
              (
              {itm.percentage}
              )
            </Chip>
          ))}
        </div>
      </Section>
    </Section>
  );
};

export default Languages;
