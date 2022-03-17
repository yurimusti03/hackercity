import styled from "styled-components";
import { grid, layout } from "styled-system";
// import {  } from "styled-system";

import { StyledProps } from "./type";

export const TeamMain = styled.section<StyledProps>`
  min-height: 116vh;
  /* max-height: 100vh; */
  padding: 8px;
  ${({ background }) => background && `background-image: url(${background});`}
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: grid;
  flex-direction: row;
  
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  background-color: #0A0B18;
  ${layout}
  ${grid}
  padding-bottom: 50px;
  grid-gap: 12px;
`;
