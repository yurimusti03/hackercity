import styled from "styled-components";
import { background, flexbox, layout, space, typography } from "styled-system";

export const MainBanner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  padding-top: 80px;
  ${background}
`;

export const LogoContainer = styled.div`
  margin: 0px 100px;

  svg {
    height: 332px;
    width: 480px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  ${space}
  ${typography}
`;

export const Title = styled.span`
  color: #000000;
  font-weight: 800;
  text-align: center;
  ${typography}
  ${space}
`;

export const SubTitle = styled.span`
  color: #000000;
  text-align: center;

  font-weight: 600;
  margin-top: 50px;
  ${typography}
  ${space}

  span {
    color: #e59720;
    font-weight: bold;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 60px;
`;

export const RegisterBtn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 32px;
  cursor: pointer;
  text-decoration: none;
  color: #000000;
  font-size: 22px;
  border-radius: 40px;
  font-weight: 800;
  margin-bottom: 50px;
  background-color: #11ffb3;

  ${typography}
  ${flexbox}
  ${space}

    :hover {
    color: #000000;
  }

  @media (max-width: 1040px) {
    margin-bottom: 50px;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: flex-start;
  align-self: flex-start;
  ${space}
  ${layout}
  ${flexbox}
`;

export const ListTitle = styled.span`
  display: flex;
  align-items: center;
  color: #000000;
  margin-top: 10px;
  gap: 15px;
  font-weight: bold;
  ${typography}
  ${flexbox}

  span {
    color: #e59720;
  }
`;

export const Elipse = styled.div`
  background-color: #ee9f16;
  width: 30px;
  height: 30px;
  border-radius: 50%;

  @media (max-width: 1040px) {
    display: none;
  }
`;

export const TotalPriceContainer = styled.div`
  margin: 20px 160px;
  align-self: flex-start;

  @media (max-width: 1040px) {
    margin: auto;
  }

  svg {
    height: 200px;
    width: 500px;

    @media (max-width: 1340px) {
      height: 170px;
      width: 450px;
    }

    @media (max-width: 1040px) {
      height: 150px;
      width: 430px;
    }

    @media (max-width: 770px) {
      height: 160px;
      width: 400px;
    }

    @media (max-width: 642px) {
      height: 160px;
      width: 300px;
    }
  }
`;

export const FinalDescription = styled.span`
  margin: 0px 160px;
  color: #000000;
  font-size: 30px;
  font-weight: bold;
  max-width: 750px;
  align-self: flex-start;
  ${space}
  ${typography}

  span {
    font-weight: bold;
    color: #e59720;
  }

  @media (max-width: 1040px) {
    text-align: center;
    font-size: 24px;
  }
`;
