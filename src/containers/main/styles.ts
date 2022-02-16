import styled from "styled-components";
import { background, flexbox, layout, space, typography } from "styled-system";

export const MainBanner = styled.div`
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
  margin: 0px 100px;

  svg {
    height: 332px;
    width: 480px;

    @media (max-width: 830px) {
      height: 300px;
      width: 440px;
    }

    @media (max-width: 642px) {
      height: 250px;
      width: 350px;
    }
    @media (max-width: 400px) {
      height: 200px;
      width: 260px;
    }
  }

  @media (max-width: 830px) {
      margin: 0px
    }
`

export const TextContainer = styled.div`
  margin: 60px 160px;
  max-width: 900px;
  ${typography}
  ${space}

  @media (max-width: 390px) {
    margin-left: 36px;
  }
`

export const Title = styled.span`
  font-size: 60px;
  color: #fff;
  font-weight: bold;
  line-height: 70px;
  ${typography}
  ${space}

  @media (max-width: 400px) {
    font-size: 22px;
    line-height: 45px;
  }
`

export const ButtonContainer = styled.div`
  margin-top: 80px;
  ${typography}
  ${space}

  .ant-modal-content {
    background-color: red;
  }
` 

export const RegisterBtn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px 25px;
  width: 290px;
  cursor: pointer;
  text-decoration: none;
  color: #000000;
  font-size: 24px;
  border-radius: 40px;
  font-weight: bold;
  background-color: #FFCB11;
  letter-spacing: 1px;
  box-shadow: inset 0px -8px 3px rgba(0, 0, 0, 0.35);
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
    color: #000000;
    background-color: #fbcf2f;
    border-color: #fbcf2f;
    box-shadow: inset 0px -6px 3px rgba(0, 0, 0, 0.25);
  }

`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  color: #fff;
  font-size: 16px;
  font-weight: bold;

  & + div {
    margin-top: 20px;
  }
`

export const Input = styled.input`
  background-color: #0078a1;
  border: 0px;
  margin-top: 5px;
  border-radius: 10px;
  height: 40px;
  width: 360px;
  padding-left: 20px;

  ::placeholder {
    font-size: 14px;
    color: #ffffff40;
  }
`
