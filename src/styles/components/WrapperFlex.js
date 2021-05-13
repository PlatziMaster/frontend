import styled from 'styled-components';
import { device } from '../deviceStyle';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95vw;
  margin-inline: auto;
  

  @media ${device.mobileL} {
    flex-direction: row;
  }
`;
