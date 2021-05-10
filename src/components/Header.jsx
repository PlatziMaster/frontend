import React, { useContext } from 'react';
import { ProfileStore } from '../store/ProfileStore';
import { ColumnLayout, Image, Section } from '../styles/styles';

const Header = ({ children }) => {
  const data = useContext(ProfileStore);

  return (
    <Section>
      <ColumnLayout columns='max-content 1fr'>
        <Image src={data.avatar} alt='avatar' />
        {children}
      </ColumnLayout>
    </Section>
  );
};

export default Header;
