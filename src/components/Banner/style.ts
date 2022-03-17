import styled from "styled-components";
import { flexbox, layout, position, space, typography } from "styled-system";

import { StyledProps } from "./type";

export const BannerMain = styled.section<StyledProps>`
  /* height: calc(100vh - 75px); */
  ${({ background }) => background && `background-image: url(${background});`}
  background-position: center;
  background-color: #161822;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 50px;
  ${layout}
`;

export const Frame = styled.img<StyledProps>`
  position: absolute;
  /* ${({ background }) =>
    background && `background-image: url(${background});`}
  background-position: center;
  background-repeat: no-repeat;
  background-size: initial; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${space}
  ${layout}
  ${position}
  z-index: 2;
`;

export const FrameText = styled.span<StyledProps>`
  font-family: "Free Pixel";
  color: #fff;
  ${typography}
  ${space}
  ${layout}
  /* font-weight: bold; */
  text-align: justify;
  z-index: 3;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  ${space}
`;

export const Button = styled.div<StyledProps>``;

export const Character = styled.div<StyledProps>`
  position: absolute;
  /* bottom: 160px;
  right: 25px; */
  ${position}
  ${layout}
  ${flexbox}
  z-index: 3;
`;

export const CharacterImg = styled.img<StyledProps>`
  ${layout}
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

export const AnimationContainer = styled.div`
  /* padding-bottom: 200px; */
  width: 100%;
  position: absolute;
  ${position}
`;
