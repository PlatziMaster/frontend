import React, { useContext } from 'react';
import { ProfileStore } from '../store/ProfileStore';
import { ColumnLayout, Image, Section, Title } from '../styles/styles';

const Header = ({ children }) => {
  const data = useContext(ProfileStore);

  return (
    <Section>
      <ColumnLayout columns='max-content 1fr'>
        <Image src={data.avatar} alt='avatar' />
        <div>
          <Title classifier='Header-title'>{data.name}</Title>
          {children}
        </div>
      </ColumnLayout>
    </Section>
  );
};

export default Header;
