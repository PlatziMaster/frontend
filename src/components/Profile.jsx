import React, { useContext } from 'react';
import { ProfileStore } from '../store/ProfileStore';
import { Section, Title } from '../styles/styles';

const Profile = () => {
  const data = useContext(ProfileStore);

  return (
    <Section>
      <Title>Perfil</Title>
      <div>{data.Profile}</div>
    </Section>
  );
};

export default Profile;
