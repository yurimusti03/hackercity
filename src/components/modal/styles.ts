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
  padding-left: 20px;

  ::placeholder {
    font-size: 14px;
    color: #ffffff40;
  }
`
