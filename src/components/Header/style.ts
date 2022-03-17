import styled from "styled-components";
import { typography, layout, space, flexbox } from "styled-system";

import { StyledProps } from "./type";

export const MainHeader = styled.div<StyledProps>`
  width: 100%;
  background-color: #161822;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  /* box-shadow: 0px -28px 15px 25px rgb(0 0 0 / 72%); */
  ${layout}
  position: fixed;
  z-index: 999;
  justify-content: space-between;
`;

export const Title = styled.div<StyledProps>`
  width: 100%;
  color: #fbfbfb;
  cursor: pointer;
  ${typography}
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Nav = styled.ul<StyledProps>`
  list-style: none;
  align-items: center;
  flex: 3;
  ${flexbox}
  ${layout}
  justify-content: flex-end;
`;

export const Route = styled.a<StyledProps>`
  display: block;
  padding: 25px 30px;
  font-weight: 500;
  text-transform: uppercase;
  color: #fff;
  cursor: pointer;
  ${layout}
  ${typography}
  transition: all 0.5s ease-in-out;
  overflow: hidden;
  ${({ active }) => active && ` background-color: #0e1016;`}

  &:hover {
    background-color: #0e1016;
  }
`;

export const RouteHackNow = styled.a<StyledProps>`
  display: block;
  padding: 25px 30px;
  font-weight: 500;
  text-transform: uppercase;
  color: #fff;
  font-family: "upheadvtt";
  cursor: pointer;
  ${layout}
  ${typography}
  transition: all 0.5s ease-in-out;
  overflow: hidden;

  background: #37a8df;
  background: linear-gradient(0deg, #37a8df 0%, #37a8df 33%, #37a8df 100%);
  cursor: pointer;

  border-right: 8px solid red;
  border-bottom: 8px solid red;
  border-top-right-radius: 20px;

  &:hover {
    color: #fff;
    background: linear-gradient(0deg, #37a8df 0%, #37a8df 33%, #37a8df 100%);
  }
`;
