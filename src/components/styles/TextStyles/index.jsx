// Dependencies
import styled from 'styled-components';

export const H1 = styled.h1`
  font-weight: 700;
  font-size: 60px;

  @media (max-width: 450px) {
    font-size: 34px;
  }
`;

export const H2 = styled.h2`
  font-weight: 400;
  font-size: 40px;

  @media (max-width: 450px) {
    font-size: 28px;
  }
`;

export const H3 = styled.h3`
  font-weight: bold;
  font-size: 30px;

  @media (max-width: 450px) {
    font-size: 24px;
  }
`;

export const BodyIntro = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 130%;
`;

export const BodyMain = styled.p`
  font-weight: normal;
  font-size: 20px;
  line-height: 140%;

  @media (max-width: 976px) {
    font-size: 16px;
  }
`;

export const MediumText = styled.p`
  font-weight: normal;
  font-size: 17px;
  line-height: 130%;
`;

export const Caption = styled.p`
  font-weight: normal;
  font-size: 15px;
  line-height: 130%;
`;

export const Caption2 = styled.p`
  font-weight: 600;
  font-size: 15px;
  line-height: 130%;
  text-transform: uppercase;
`;

export const SmallText = styled.p`
  font-weight: normal;
  font-size: 13px;
  line-height: 130%;
`;

export const SmallText2 = styled.p`
  font-weight: 600;
  font-size: 13px;
  line-height: 130%;
  text-transform: uppercase;
`;
