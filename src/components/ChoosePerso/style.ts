import styled from "styled-components";
import { layout } from "styled-system";

import { StyledProps } from "./type";

export const ChoosePersoMain = styled.section<StyledProps>`
  min-height: 100vh;
  ${({ background }) => background && `background-image: url(${background});`}
  background-position: revert;
  background-repeat: no-repeat;
  background-size: cover;
  flex-direction: row;
  align-items: flex-start;
  ${layout}
`;

export const BoxArrowCharacter = styled.div`
  position: relative;
  display: flex;
  flex: 4;
  /* background: #000000aa; */
  width: 100%;
  height: 100vh;
  align-items: center;
`;

export const BoxComputerChat = styled.div`
  position: relative;
  display: flex;
  flex: 3;

  width: 100%;
  height: 100vh;
`;

export const LeftArrow = styled.img`
  position: absolute;
  top: 50%;
  width: 20%;
  height: 20%;
  transform: rotate(180deg);
  flex: 1;
  cursor: pointer;
  left: 0;
  z-index: 20;
`;

export const CapsuleBox = styled.div`
  flex: 20;
  /* background: red; */
  width: 100%;
  margin-bottom: 40px;
  padding-top: 116px;
  padding-left: 10px;
  /* height: 60%; */
`;

export const RightArrow = styled.img`
  position: absolute;
  top: 50%;
  right: 0;
  width: 15%;
  height: 20%;
  flex: 1;
  cursor: pointer;
`;

export const Capsule = styled.img`
  width: 72%;
  padding-left: 15%;
  /* margin-bottom: -100px; */
`;

export const Tshirt = styled.div<StyledProps>`
  position: absolute;
  left: 0;
  top: 0;
`;

export const TshirtItem = styled.img<StyledProps>`
  width: 27%;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  /* ${({ background }) =>
    background && `background-image: url(${background});`} */
`;

export const ItemDiv = styled.div<StyledProps>`
  ${layout}
  top: 0px;
  width: 95%;
  height: 100%;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  display: flex;
  padding-top: 200px;
  padding-right: 95px;
`;

export const BoxVideoRegion = styled.div`
  padding: 76px;
  background: #05060a44 ;
  width: 100%;
  height: 85%;
  margin: 70px;
  border-radius: 20px
`;
