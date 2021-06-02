import styled from 'styled-components';
//import { device } from '../deviceStyle';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 30px;
  border-radius: 5px;
  background-color: rgba(4, 26, 42, 0.9);
  
  .container{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
     text-align: center;
  }
  
  span{
    position: relative;
    bottom: 20px;
    color: #ADC1D7;
  }
`;

