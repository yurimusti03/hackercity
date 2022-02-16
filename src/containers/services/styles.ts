import styled from "styled-components";
import {
  background,
  flexbox,
  layout,
  space,
  typography,
  grid,
} from "styled-system";

export const MainBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  ${layout}
  ${flexbox}
  ${background}
`;

export const Title = styled.span`
  font-size: 55px;
  color: #fff;
  text-align: center;
  line-height: 70px;
  font-weight: bold;
  ${typography}
  ${space}

  .react-reveal {
    text-align: center;
    font-size: 40px;
  }

  span {
    color: #004357;
  }

  @media (max-width: 1040px) {
    line-height: 60px;
    text-align: center;
  }

  @media (max-width: 630px) {
    line-height: 40px;
  }

  @media (max-width: 390px) {
    line-height: 40px;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 100px;
`;

export const SubTitle = styled.span`
  font-size: 32px;
  color: #fff;
  align-items: center;
  text-align: center;
  margin-top: 20px;
  font-family: Sora;
  ${typography}
  ${space}

  .react-reveal {
    text-align: center;
    font-size: 36px;
  }

  span {
    color: #004357;
    font-weight: bold;
  }

  @media (max-width: 1040px) {
    text-align: center;
  }

  @media (max-width: 638px) {
    max-width: 400px;

    .react-reveal {
      text-align: center;
      font-size: 30px;
    }
  }

  @media (max-width: 390px) {
    max-width: 300px;
  }
`;
export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 60px;
  margin-top: 100px;
  ${layout}
  ${space}
  ${typography}
  ${flexbox}
  ${grid}

  @media (max-width: 1040px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (max-width: 638px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (max-width: 390px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const CardTitle = styled.span`
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
  text-align: center;

  @media (max-width: 1040px) {
    font-size: 16px;
  }

  @media (max-width: 638px) {
    font-size: 16px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #fff;
  border-radius: 30px;
  padding-bottom: 42px;
  padding-left: 24px;
  padding-right: 24px;
  ${space}
  ${layout}
`;

export const Description = styled.div`
  color: #101010;
  margin-top: 30px;
  max-width: 400px;
  font-weight: 600;
  text-align: center;
  ${typography}
`;

export const IconContainer = styled.div`
  margin-top: 50px;

  svg {
    width: 140px;
    height: 140px;
  }
`;

export const RegisterBtn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 3px;
  width: 330px;
  cursor: pointer;
  text-decoration: none;
  color: #000000;
  font-size: 24px;
  font-weight: bold;
  border-radius: 40px;
  background-color: #11ffb3;
  margin-bottom: 50px;
  letter-spacing: 1px;
  ${typography}
  ${flexbox}
  ${space}

    :hover {
    color: #000000;
  }

  @media (max-width: 1040px) {
    padding: 25px 20px;
    width: 300px;
    font-size: 24px;
    margin-bottom: 60px;
  }

  @media (max-width: 638px) {
    padding: 20px 20px;
    width: 240px;
    font-size: 18px;
    margin-bottom: 60px;
  }

  @media (max-width: 390px) {
    padding: 20px 20px;
    width: 240px;
    font-size: 18px;
    margin-bottom: 60px;
  }
`;
