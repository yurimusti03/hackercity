import * as Styled from "./styles";

import Logo from "../../assets/svg/logo.svg";
import BuyBg from "../../assets/img/buySection.png";
import TotalPrice from "../../assets/svg/totalPrice.svg";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

import Loading from "../../components/Loading";

const BuySection = () => {
  const router = useRouter();

  return (
    <Styled.MainBanner
      justifyContent={["center", "center", "center"]}
      backgroundImage={[`url(${BuyBg})`, `url(${BuyBg})`, `url(${BuyBg})`]}
    >
      <Styled.TextContainer mx={[30, 70, 160]}>
        <Styled.Title>
          <Fade left>Agora vamos fazer contas.</Fade>
        </Styled.Title>
        <Styled.SubTitle>
          <Fade right>
            Para você ter tudo que a FunMídia
            <span>
              <Fade left>oferece</Fade>
            </span>
            dentro da sua emprsa você precisaria de:
          </Fade>
        </Styled.SubTitle>
      </Styled.TextContainer>

      <Styled.List>
        <Styled.ListTitle>
          <Zoom>
            <Styled.Elipse />
          </Zoom>
          <Fade right>
            um copywriter
            <span>R$ 1.000,00</span>
          </Fade>
        </Styled.ListTitle>
        <Styled.ListTitle>
          <Zoom delay={100}>
            <Styled.Elipse />
          </Zoom>
          <Fade right delay={100}>
            um designer
            <span>R$ 3.000,00</span>
          </Fade>
        </Styled.ListTitle>
        <Styled.ListTitle>
          <Zoom delay={200}>
            <Styled.Elipse />
          </Zoom>
          <Fade right delay={200}>
            um gestor de tráfego -
            <span>R$ 5.000,00</span>
          </Fade>
        </Styled.ListTitle>
        <Styled.ListTitle>
          <Zoom delay={300}>
            <Styled.Elipse />
          </Zoom>
          <Fade right delay={300}>
            um analista de Business Intelligence -
            <span>R$ 5.000,00</span>
          </Fade>
        </Styled.ListTitle>
      </Styled.List>

      <Fade>
        <Styled.TotalPriceContainer>
          <TotalPrice />
        </Styled.TotalPriceContainer>
      </Fade>

      <Styled.FinalDescription mx={[30, 70, 160]}>
        E se eu te contar que você <span>consegue </span>
        tudo isso por muito menos que você imagina!
      </Styled.FinalDescription>

      <Fade>
        <Styled.ButtonContainer>
          <Styled.RegisterBtn>TENHO INTERESSE</Styled.RegisterBtn>
        </Styled.ButtonContainer>
      </Fade>
    </Styled.MainBanner>
  );
};

export default BuySection;
