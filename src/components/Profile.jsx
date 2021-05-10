import React, { useContext } from 'react';
import { ProfileStore } from '../store/ProfileStore';
import { Section, Title } from '../styles/styles';

const Profile = () => {
  const data = useContext(ProfileStore);

  return (
    <Section>
      <Title classifier='Profile-title'>Perfil</Title>
      <div className='Profile-desc'>{data.Profile}</div>
    </Section>
  );
};

export default Profile;
