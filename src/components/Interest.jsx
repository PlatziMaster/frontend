import React, { useContext } from 'react';
import { Chip, Section, Title } from '../styles/styles';
import { ProfileStore } from '../store/ProfileStore';

const Interest = () => {
  const data = useContext(ProfileStore);

  return (
    <Section>
      <Title>Habilidades</Title>
      <Section>
        <div>
          { data.interest.map((itm, ix) => (
            // eslint-disable-next-line react/no-array-index-key
            <Chip key={ix}>{itm}</Chip>
          ))}
        </div>
      </Section>
    </Section>
  );
};

export default Interest;
