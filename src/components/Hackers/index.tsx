import React, { useState } from "react";

import { Props } from "./type";
import * as Styled from "./style";

import bg from "../../assets/image/hackersImage.png";
import cobol from "../../assets/image/cobol-gold.png";
import fatjoe from "../../assets/image/fatjoe-rainbow.png";
import noah from "../../assets/image/noah-roxo.png";
import joyred from "../../assets/image/joy-red.png";
import frame from "../../assets/image/frame-text.png";
import { text } from "node:stream/consumers";
import { Tooltip } from "@chakra-ui/react";

import { textBallon } from "./settings";

const Hackers = ({}: Props) => {
  return (
    <Styled.HackersMain background={bg.src} display={["none", "none", "flex"]} id='roadmap'>
      <Styled.FrameHackers src={frame.src} p={[32, 64, 160]} />
      <Styled.CharactersTooltip p={[0, 0, 255]}>
        <Tooltip
          _active={true}
          label={textBallon.fatJoe}
          placement="bottom"
          bg="#2460C4"
          padding="4"
          style={{ zIndex: 8 }}
        >
          <Styled.Hackers
            background={fatjoe.src}
            style={{ cursor: "pointer" }}
          />
        </Tooltip>
        <Tooltip
          label={textBallon.mrCobol}
          placement="bottom"
          bg="#EDA61C"
          padding="4"
        >
          <Styled.Hackers
            background={cobol.src}
            style={{ cursor: "pointer" }}
          />
        </Tooltip>
        <Tooltip
          label={textBallon.joy}
          placement="bottom"
          bg="#831C41"
          padding="4"
        >
          <Styled.Hackers
            background={joyred.src}
            style={{ cursor: "pointer" }}
          />
        </Tooltip>
        <Tooltip
          label={textBallon.noah}
          placement="bottom"
          bg="#843772"
          padding="4"
        >
          <Styled.Hackers background={noah.src} style={{ cursor: "pointer" }} />
        </Tooltip>
      </Styled.CharactersTooltip>

      {/* */}
    </Styled.HackersMain>
  );
};

export default Hackers;
