import styled from "styled-components";
import { space, layout } from "styled-system";
// import {  } from "styled-system";

import { StyledProps } from "./type";

export const HackersMain = styled.section<StyledProps>`
  ${layout}
  height: 100vh;
  ${({ background }) => background && `background-image: url(${background});`}
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  align-items: center;
`;

export const FrameHackers = styled.img<StyledProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  /* ${({ background }) =>
    background && `background-image: url(${background});`}
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${space}
`;

export const CharactersTooltip = styled.div<StyledProps>`
  display: flex;
  padding: 48px;
  width: 100%;
  height: 100%;
  ${space}
`;

export const Hackers = styled.a<StyledProps>`
  width: 24%;
  height: 100%;
  ${({ background }) => background && `background-image: url(${background});`}
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  animation: animation 5s infinite;

  @keyframes animation {
    0% {
      transform: scale(1);
    }
    25% {
      /* background-color: yellow; */
      transform: scale(1.1);
    }
    50% {
      /* background-color: blue; */
      transform: scale(1.1);
    }
    100% {
      /* background-color: green; */
      transform: scale(1);
    }
  }
`;
