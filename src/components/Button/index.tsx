import React from "react";

import { Props } from "./type";
import * as Styled from "./style";

// import { overflow } from "styled-system";

const Button = ({ title, onClick, style }: Props) => {
  return (
    <Styled.ButtonMain
      w={["25%", "100%", "100%"]}
      p={[12, 28, 28]}
      onClick={() => onClick()}
      style={style}
      mt={[24, 12, 50]}
      href='#whitepaper'
    >
      <Styled.ButtonText  fontSize={[12, 18, 28]}>
        {title}
      </Styled.ButtonText>
    </Styled.ButtonMain>
  );
};

export default Button;
