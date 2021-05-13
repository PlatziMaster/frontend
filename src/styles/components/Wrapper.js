import styled from 'styled-components';
import { device } from '../deviceStyle';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 95vw;

  margin-inline: 5px;
  margin-block-start: 5px;
  padding: 10px;
  border-radius: 5px;
  background-color: rgba(4, 26, 42, 0.9);
  color: white;
  div{ 
    align-items: center;
  }
  h1, h1, h3 {
    font-size: 1.6rem;
    color: #ADC1D7;
  }

  @media ${device.mobileL} {
    width: 95vw;
    justify-content: center;
    font-size: 1.6rem;
  }
`;
