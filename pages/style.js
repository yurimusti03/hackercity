import styled from "styled-components";
import { layout, space } from "styled-system";

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  ${space}
  ${layout}
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  ${space}

  & + div {
    margin-top: 20px;
  }
`;

export const Input = styled.input`
  background-color: #0078a1;
  border: 0px;
  margin-top: 5px;
  border-radius: 10px;
  height: 40px;

  padding-left: 20px;
  ${layout}

  ::placeholder {
    font-size: 14px;
    color: #ffffff40;
  }
`;
