import styled from "styled-components";
import { layout, position, space, typography } from "styled-system";
// import {  } from "styled-system";

import { StyledProps } from "./type";

export const RoadMapMain = styled.section<StyledProps>`
  min-height: 100vh;
  ${({ background }) => background && `background-image: url(${background});`}
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  ${layout}
  position: relative;
  justify-content: center;
  padding-top: 64px;
  /* padding: 48px; */
`;

export const RoadmapBg = styled.img`
  position: absolute;
  top: 0;
  width: 80%;
  height: 110%;

  ${layout}
  ${space}
`;

export const ImageLeft = styled.img`
  width: 15%;
  position: absolute;
  top: 27%;
  left: 6%;
  ${layout}
`;

export const ImageRight = styled.img`
  width: 18%;
  position: absolute;
  top: 20%;
  right: 5%;
  ${layout}
`;

export const RoadmapForm = styled.div`
  z-index: 3;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${space}
`;

export const TitleWhiteList = styled.span`
  font-weight: 600;
  font-family: "Free Pixel";
  line-height: 1;
  text-transform: uppercase;
  color: #fbfbfb44;
  mix-blend-mode: overlay;
  ${typography}
`;

export const Form = styled.div`
  width: 45%;
`;

export const TitleContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 24px;
`;

export const Title = styled.span`
  font-family: "Free Pixel";
  color: #fff;
  ${typography}
  /* font-weight: bold; */
  text-align: justify;
  z-index: 3;
`;

export const InputForm = styled.div`
  margin-top: 24px;
`;

export const InputContainer = styled.div`
  color: #fff;
  ${typography}
`;

export const Label = styled.span`
  color: #fff;
  font-family: "Free Pixel";
  ${typography}
`;

export const Input = styled.input`
  width: 100%;
  height: 48px;
  padding-left: 16px;
  margin-top: 4px;
  border-radius: 4px;
  color: #444;
`;

export const ButtonMain = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 64px;
`;

export const ButtonContainer = styled.button<StyledProps>`
  height: 75px;
  /* padding: 28px; */
  background: #27b354;
  background: linear-gradient(0deg, #166a00 0%, #00aa3a 100%);
  cursor: pointer;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px solid #153d06;
  z-index: 4;
  ${space}
  padding: 15px;

  &:hover {
    background: linear-gradient(0deg, #00aa3a 0%, #166a00 100%);
  }
`;

export const Button = styled.span<StyledProps>`
  font-family: "upheadvtt";
  text-transform: uppercase;
  color: #fff;
  ${typography}
`;

export const SubmitedForm = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
`;

export const SubmitedText = styled.div`
  font-family: "upheadvtt";
  color: #fff;
  padding-left: 16px;
  ${typography}
`;

export const InputDarkContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${space}
`;

export const TextShare = styled.span`
  color: #fff;
  font-family: "Free Pixel";
  ${typography}
`;

export const TextShareContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${space}
`;

export const ShowSharedMain = styled.div`
  width: 100%;
`;

export const ButtonContainerDiscord = styled.div<StyledProps>`
  height: 75px;
  /* padding: 28px; */
  background-color: #7289da;
  border: 2px solid #7289da;
  color: #fff;
  cursor: pointer;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;
  ${space}
  padding: 12px;
  ${layout}
`;

export const ButtonDiscord = styled.span<StyledProps>`
  font-family: "Roboto";
  text-transform: uppercase;
  font-weight: bold;
  color: #fff;
  ${typography}
  padding-left: 8px;
  text-align: center;
`;

export const CountContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;

  z-index: 8;
  ${position}
`;

export const Count = styled.span`
  font-size: 28px;
  text-align: center;
  color: #ccc;
  font-weight: bold;
  font-family: "Free Pixel";
`;

export const TextCount = styled.span`
  font-size: 14px;
  text-align: center;
  color: #ccc;
  font-weight: normal;
  font-family: "Free Pixel";
`;
