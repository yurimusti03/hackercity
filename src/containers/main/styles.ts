import styled from "styled-components";
import { background, flexbox, layout, space, typography } from "styled-system";

export const MainBanner = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  height: 100vh;
  ${layout}
  ${flexbox}
  ${background}

  @media (max-width: 642px) {
    height: 100vh;
  }
`;

export const LogoContainer = styled.div`
  ${space}
  ${layout}
  svg {
    width: 80%;
  }
`;

export const TextContainer = styled.div`
  ${typography}
  ${space} /* @media (max-width: 390px) {
    margin-left: 36px;
  } */
`;

export const Title = styled.span`
  color: #fff;
  font-weight: bold;
  ${typography}
  ${space}
`;

export const ButtonContainer = styled.div`
  /* margin-top: 16px; */
  ${typography}
  ${space}
  ${layout}

  .ant-modal-content {
    background-color: red;
  }
`;

export const RegisterBtn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 3px;

  cursor: pointer;
  text-decoration: none;
  color: #000000;
  font-size: 24px;
  border-radius: 40px;
  font-weight: 800;
  background-color: #ffcb11;

  &:hover {
    color: #000;
  }

  ${typography}
  ${flexbox}
  ${space}
  ${layout}
`;
