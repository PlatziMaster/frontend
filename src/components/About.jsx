import React, { useContext } from 'react';
import { ProfileStore } from '../store/ProfileStore';
import { Title, SubTitle, AboutItem, LineLayout } from '../styles/styles';

const About = () => {
  const data = useContext(ProfileStore);
  return (
    <div>
      <Title>{data.name}</Title>
      <SubTitle>{data.profession}</SubTitle>
      <LineLayout gap='20px'>
        <AboutItem>{data.phone}</AboutItem>
        <AboutItem>{data.email}</AboutItem>
        <AboutItem>{data.website}</AboutItem>
      </LineLayout>
      <LineLayout>
        <AboutItem>{data.address}</AboutItem>
      </LineLayout>
    </div>
  );
};

export default About;
