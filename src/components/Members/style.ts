import styled from "styled-components";
import { typography, space, layout, position } from "styled-system";

import { StyledProps } from "./type";

export const CardMain = styled.div<StyledProps>`
  width: 100%;

  /* ${({ background }) =>
    background && `background-image: url(${background});`}
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain; */

  justify-content: center;
  display: flex;
  flex-direction: row;
  position: relative;
  ${layout}
  ${space}
`;

export const BackgroundTeam = styled.img`
  position: absolute;
  max-width: 90%;
  height: 105%;
`;

export const Title = styled.div<StyledProps>`
  width: 50%;
  height: 50%;
  ${({ background }) => background && `background-image: url(${background});`}
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const TagContainer = styled.div<StyledProps>`
  position: absolute;
  top: 49%;
  left: 37%;
  z-index: 9;
`;

export const DescriptionContainer = styled.div<StyledProps>`
  position: absolute;
  top: 55%;
  left: 37%;
  width: 40%;
  z-index: 9;
`;

export const Text = styled.span<StyledProps>`
  height: 100%;
  width: 100%;
  color: #004948;
  font-family: "Free Pixel";
  ${typography}
`;

export const BoxLink = styled.div<StyledProps>`
  position: absolute;
  top: 86%;
  left: 37%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  z-index: 10;
`;

export const Link = styled.div<StyledProps>`
  height: 100%;
  width: 100%;
  padding: 24px;
  ${({ background }) => background && `background-image: url(${background});`}
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
`;

export const LogoContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  flex: 1;
  z-index: 9;
  position: absolute;
  /* top: 50px; */
  ${position}
`;

export const InfoContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  flex: 8;
  position: absolute;
`;

export const Photo = styled.div<StyledProps>`
  width: 100%;
  height: 20%;
  position: absolute;
  top: 20%;
  padding-left: 4%;
  ${({ background }) => background && `background-image: url(${background});`}
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const NameContainer = styled.div<StyledProps>`
  position: absolute;
  width: 63%;
  top: 44%;
  left: 37%;
  z-index: 9;
`;

export const Name = styled.span<StyledProps>`
  color: #004948;
  font-family: "Free Pixel";
  text-transform: uppercase;
  font-weight: bold;
  ${typography}
`;
