import styled from 'styled-components';
import { device } from '../deviceStyle';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 94.2vw;
  margin-block-start: 5px;
  margin-inline: auto;
  padding: 10px;
  border-radius: 5px;
  background-color: rgba(4, 26, 42, 0.9);
  color: white;
  div{ 
    align-items: center;
  }
  h1, h1, h3 {
    color: #ADC1D7;
    font-size: 1.6rem;
  }

  @media ${device.mobileL} {
    justify-content: center;
    font-size: 1.6rem;
  }
`;
