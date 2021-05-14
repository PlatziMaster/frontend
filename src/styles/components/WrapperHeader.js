import styled from 'styled-components';
import { device } from '../deviceStyle';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 200px;
  margin-block-start: 45px;
  margin-block-end: 80px;
  --webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
  background-color: rgba(243, 243, 243, 0.2);
  text-align: center;

  div{ 
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
  }

  @media ${device.mobileL} {
    flex-direction: row;
    max-height: 500px;
    justify-content: center;
  }
`;
