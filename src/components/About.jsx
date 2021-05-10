import React, { useContext } from 'react';
import { ProfileStore } from '../store/ProfileStore';
import { SubTitle, AboutItem, LineLayout } from '../styles/styles';

const About = () => {
  const data = useContext(ProfileStore);
  return (
    <>
      <SubTitle classifier='About-title'>{data.profession}</SubTitle>
      <LineLayout gap='20px'>
        <AboutItem>{data.phone}</AboutItem>
        <AboutItem>{data.email}</AboutItem>
        <AboutItem>{data.website}</AboutItem>
      </LineLayout>
      <LineLayout>
        <AboutItem>{data.address}</AboutItem>
      </LineLayout>
    </>
  );
};

export default About;
