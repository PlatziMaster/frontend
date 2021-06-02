import styled from 'styled-components';
import { device } from '../deviceStyle';

export const Img = styled.img`
  width: 100px;
  height: 100px;
  align-self: center;
  border-radius: 100%;
  margin: 20px 0 0 0;
  object-fit: cover;

  @media ${device.mobileL} {
   width: 140px;
   height: 140px;
   margin: 20px;
  }

`;
