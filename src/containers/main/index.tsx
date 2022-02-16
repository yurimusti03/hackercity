import * as Styled from "./styles";

import { gql, useMutation } from "@apollo/client";

import Logo from "../../assets/svg/logo.svg";
import MainBg from "../../assets/img/mainBg.png";

import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { Modal, Button, notification } from "antd";

const Main = () => {
  return (
    <Styled.MainBanner
      id="#"
      justifyContent={["center", "center", "center"]}
      backgroundImage={[`url(${MainBg})`, `url(${MainBg})`, `url(${MainBg})`]}
    >
      <Styled.LogoContainer mt={[50, 50, 0]} ml={[50, 50, 128]}>
        <Logo />
      </Styled.LogoContainer>

      <Styled.TextContainer ml={[50, 70, 124]} mt={[0, 0, 16]}>
        <Styled.Title fontSize={[30, 30, 64]} lineHeight={["1", "1", "1.2"]}>
          Uma solução inteligente de
          <br /> marketing e publicidade <br />
          para sua empresa!
        </Styled.Title>

        <Styled.ButtonContainer mt={[32, 32, 16]}>
          <Styled.RegisterBtn
            onClick={() => {
              window.scrollBy(0, 764);
            }}
            fontSize={[18, 18, 26]}
            width={[150, 230, 230]}
          >
            SAIBA MAIS
          </Styled.RegisterBtn>
        </Styled.ButtonContainer>
      </Styled.TextContainer>
    </Styled.MainBanner>
  );
};

export default Main;
