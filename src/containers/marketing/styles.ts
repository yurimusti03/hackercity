import styled from "styled-components";
import { background, flexbox, layout, space, typography } from "styled-system";

export const MainBanner = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  ${layout}
  ${flexbox}
  ${background}
  
  @media (max-width: 390px) {
    height: 90%;
  }

  @media (max-width: 375px) {
    height: 100%;
  }
`;

export const LogoContainer = styled.div`
  margin: 0px 100px;

  svg {
    height: 332px;
    width: 480px;
  }
`;

export const Title = styled.span`
  color: #000000;
  font-weight: 600;
  font-family: "Sora";
  ${typography}
  ${space}

  span {
    color: #ee9f16;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 80px;
`;

export const RegisterBtn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 22px;
  width: 150px;
  cursor: pointer;
  text-decoration: none;
  color: #000000;
  font-size: 16px;
  border-radius: 40px;
  font-weight: bold;
  background-color: #11ffb3;
  letter-spacing: 1px;
  box-shadow: inset 0px -6px 3px rgba(0, 0, 0, 0.25);
  -webkit-transition: box-shadow 0.5s ease;
  -moz-transition: box-shadow 0.5s ease;
  -o-transition: box-shadow 0.5s ease;
  -ms-transition: box-shadow 0.5s ease;
  transition: box-shadow 0.5s ease;
  transition: 0.5s;

  ${typography}
  ${flexbox}
  ${space}
  ${layout}

    :hover {
    transform: scale(1.02);
    color: #fff;
    background-color: #11ffb3;
    border-color: #11ffb3;
    box-shadow: inset 0px -6px 3px rgba(0, 0, 0, 0.25);
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 0px 120px;
  ${typography}
  ${space}
  ${layout}

  @media (max-width: 829px) {
    text-align: center;

    svg {
      display: none;
    }
  }

  @media (max-width: 478px) {
    margin: 0px 60px;
  }
`;

export const SubTitle = styled.span`
  color: #000000;
  display: flex;
  font-weight: normal;
  font-family: Sora;
  align-items: center;
  margin-top: 16px;
  flex-direction: row;
  ${typography}
  ${space}

div {
    display: flex;
    align-items: center;
  }

  svg {
    width: 80%;
  }
`;

export const Description = styled.span`
  color: #000000;
  font-size: 40px;
  font-weight: bold;
  max-width: 1000px;
  ${typography}
  ${space}
`;

export const Elipse = styled.div`
  background-color: #ee9f16;
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;
