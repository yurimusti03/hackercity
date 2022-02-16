import styled from "styled-components";

import { background, layout } from "styled-system";

export const Container = styled.div`
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  ${background}
  ${layout}
  font-family: "Sora"
`;
