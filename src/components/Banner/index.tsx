import React from "react";

import { Props } from "./type";
import * as Styled from "./style";

import bg from "../../assets/image/bannerImage.png";
import framebg from "../../assets/image/frame-text.png";
import cobolGold from "../../assets/image/noah2.png";
import Button from "../Button";

import Lottie from "react-lottie";
import * as animationData from "../../assets/animation/animationHack.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Banner = ({}: Props) => {
  return (
    <Styled.BannerMain
      // background={bg.src}
      height={["65vh", "100vh", "120vh"]}
      id="home"
    >
      <Styled.FrameText
        background={framebg.src}
        fontSize={[12, 18, 25]}
        width={["100%", "100%", "40%"]}
        mt={["-20%", "-20%", "-10%"]}
        pl={[24, 0, 0]}
        pr={[24, 0, 0]}
      >
        <b style={{ textTransform: "uppercase" }}>Hello</b>, I am{" "}
        <b style={{ textTransform: "uppercase" }}>Noah</b> and welcome to our
        city!
        <p style={{ marginTop: 16 }}>
          Why don’t you join our whitelist? It will be great!
        </p>
      </Styled.FrameText>
      <Styled.ButtonContainer>
        <Button
          w={["18%", "18%", "18%"]}
          title="whitelist"
          onClick={() => {}}
        />
      </Styled.ButtonContainer>
      <Styled.Character
        background={cobolGold.src}
        display={["none", "none", "none", "flex"]}
        justifyContent="flex-end"
        bottom={["calc(60px + 25%)"]}
        left={[180]}
      >
        <Styled.CharacterImg
          width={"100%"}
          top={["30%", "30%", "30%"]}
          alt="character"
          src={cobolGold.src}
        />
      </Styled.Character>
      <Styled.AnimationContainer bottom={["10%", "10%", 16]}>
        <Lottie options={defaultOptions} width={"55%"} />
      </Styled.AnimationContainer>
    </Styled.BannerMain>
  );
};

export default Banner;
