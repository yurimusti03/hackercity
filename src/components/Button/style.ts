import styled from "styled-components";
import { typography, space } from "styled-system";

import { StyledProps } from "./type";

export const ButtonMain = styled.a<StyledProps>`
  height: 24px;
  /* padding: 28px; */
  background: rgb(202, 144, 55);
  background: linear-gradient(0deg, #c46d1b 0%, #b9671c 33%, #d39d46 100%);
  cursor: pointer;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px solid #c46d1b;
  z-index: 4;
  ${space}

  &:hover {
    background: linear-gradient(0deg, #d39d46 0%, #c46d1b 33%, #b9671c 100%);
  }
`;

export const ButtonText = styled.span<StyledProps>`
  font-size: 28px;
  font-family: "upheadvtt";
  text-transform: uppercase;
  color: #fff;
  ${typography}
`;
