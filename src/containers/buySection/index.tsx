import * as Styled from "./styles";

import Logo from "../../assets/svg/logo.svg";
import BuyBg from "../../assets/img/buySection.png";
import TotalPrice from "../../assets/svg/totalPrice.svg";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

import Loading from "../../components/Loading";

const BuySection = ({ showModal }) => {
  const router = useRouter();

  return (
    <Styled.MainBanner
      justifyContent={["center", "center", "center"]}
      backgroundImage={[`url(${BuyBg})`, `url(${BuyBg})`, `url(${BuyBg})`]}
    >
      <Styled.TextContainer ml={[32, 70, 160]} mr={[32, 70, 160]}>
        <Styled.Title fontSize={[24, 32, 64]}>
          <Fade left>Agora vamos fazer contas.</Fade>
        </Styled.Title>
        <Styled.SubTitle
          fontSize={[22, 22, 40]}
          lineHeight={["1.1", "1.1", "1.5"]}
        >
          Para você ter tudo que a FunMídia
          <br />
          <span> oferece </span>
          dentro da sua empresa
          <br /> você precisaria de:
        </Styled.SubTitle>
      </Styled.TextContainer>

      <Styled.List
        ml={[60, 80, 120]}
        mr={[60, 80, 120]}
        alignItems={["center", "center", "flex-start"]}
      >
        <Styled.ListTitle
          flexDirection={["column", "row", "row"]}
          fontSize={[16, 18, 26]}
          textAlign={["center", "", ""]}
        >
          <Zoom>
            <Styled.Elipse />
          </Zoom>
          <Fade right>
            um copywriter
            <span>R$ 3.000,00</span>
          </Fade>
        </Styled.ListTitle>
        <Styled.ListTitle
          flexDirection={["column", "row", "row"]}
          fontSize={[16, 18, 26]}
          textAlign={["center", "", ""]}
        >
          <Zoom delay={100}>
            <Styled.Elipse />
          </Zoom>
          <Fade right delay={100}>
            um designer
            <span>R$ 3.000,00</span>
          </Fade>
        </Styled.ListTitle>
        <Styled.ListTitle
          flexDirection={["column", "row", "row"]}
          fontSize={[16, 18, 26]}
          textAlign={["center", "", ""]}
        >
          <Zoom delay={200}>
            <Styled.Elipse />
          </Zoom>
          <Fade right delay={200}>
            um gestor de tráfego -<span>R$ 5.000,00</span>
          </Fade>
        </Styled.ListTitle>
        <Styled.ListTitle
          flexDirection={["column", "row", "row"]}
          fontSize={[16, 18, 26]}
          textAlign={["center", "", ""]}
        >
          <Zoom delay={300}>
            <Styled.Elipse />
          </Zoom>
          <Fade right delay={300}>
            um analista de Business Intelligence -<span>R$ 5.000,00</span>
          </Fade>
        </Styled.ListTitle>
      </Styled.List>

      <Styled.TotalPriceContainer>
        <TotalPrice />
      </Styled.TotalPriceContainer>

      <Styled.FinalDescription mx={[30, 70, 160]}>
        E se eu te contar que você <span>consegue </span>
        <br />
        tudo isso por muito menos
        <br /> que você imagina!
      </Styled.FinalDescription>

      <Styled.ButtonContainer onClick={() => showModal()}>
        <Styled.RegisterBtn>TENHO INTERESSE</Styled.RegisterBtn>
      </Styled.ButtonContainer>
    </Styled.MainBanner>
  );
};

export default BuySection;
