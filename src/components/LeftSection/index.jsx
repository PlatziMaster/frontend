// Dependencies
import React from 'react';
import { ProfilePicture } from '../ProfilePicture';
import { UserLogo } from '../UserLogo';

// Styled Components
import { LeftSectionStyled } from './styles';

export const LeftSection = ({ resumeInfo }) => {
  console.log('resumeInfo: ', resumeInfo);
  const { logo, ...data } = resumeInfo;
  return (
    <LeftSectionStyled className='splitleft'>
      <UserLogo logo={logo} />
      <ProfilePicture data={data} />
    </LeftSectionStyled>
  );
};
