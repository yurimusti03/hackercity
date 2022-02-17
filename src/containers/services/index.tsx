import * as Styled from "./styles";

import Icon1 from "../../assets/svg/icon1.svg";
import Icon2 from "../../assets/svg/icon2.svg";
import Icon3 from "../../assets/svg/icon3.svg";
import Icon4 from "../../assets/svg/icon4.svg";
import Services from "../../assets/img/servicesBg.png";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

import Loading from "../../components/Loading";

const Main = ({ showModal }) => {
  const router = useRouter();

  return (
    <Styled.MainBanner
      justifyContent={["center", "center", "center"]}
      backgroundImage={[
        `url(${Services})`,
        `url(${Services})`,
        `url(${Services})`,
      ]}
      backgroundPosition={["left", "left", "center"]}
    >
      <Styled.Title
        fontSize={[24, 30, 36]}
        textAlign={["center", "center", "inherit"]}
        ml={[20, 80, 120]}
        mt={[32, 120, 120]}
      >
        Como a FunMídia pode contribuir com meu negócio?
      </Styled.Title>

      <Styled.SubTitle
        fontSize={[20, 30, 28]}
        textAlign={["center", "center", "center"]}
        mx={[20, 80, 120]}
      >
        A FunMídia é uma empresa de <span>marketing e publicidade</span>
        <br />
        que vai te ajudar a posicionar seu negócio na internet de forma
        profissional!
      </Styled.SubTitle>

      <Styled.CardsContainer mt={[24, 32, 100]} gridGap={[0, 0, 60]}>
        <Fade bottom>
          <Styled.Card m={[48, 64, 0]}>
            <Styled.IconContainer>
              <Icon1 width={[120, 140, 140]} />
            </Styled.IconContainer>
            <Styled.CardTitle>Criação de Identidade Visual</Styled.CardTitle>
            <Styled.Description fontSize={[12, 14, 16]}>
              Uma identidade visual arquitetada
              <br /> e marcante é uma estratégia essencial
              <br /> para a marca, isso porque eleva
              <br /> ao reconhecimento e ao valor da marca.
              <br /> O principal fator de importância é que,
              <br /> com ela, é possível definir de forma visual,
              <br /> prática e “à primeira vista” quem <br />é a empresa.
            </Styled.Description>
          </Styled.Card>
        </Fade>

        <Fade bottom>
          <Styled.Card ml={[48, 64, 0]} mr={[48, 64, 0]} mb={[48, 64, 0]}>
            <Styled.IconContainer>
              <Icon2 />
            </Styled.IconContainer>
            <Styled.CardTitle>Criação de sites/landigin page</Styled.CardTitle>
            <Styled.Description fontSize={[12, 14, 16]}>
              As landing pages são as páginas
              <br /> por onde os usuários
              <br /> acessam o site de sua empresa.
              <br /> Elas são essenciais pois possuem
              <br /> uma taxa de conversão <br /> maior em comparação
              <br /> às outras páginas de seu site, garantindo
              <br /> lucros maiores para sua empresa.
            </Styled.Description>
          </Styled.Card>
        </Fade>

        <Fade bottom>
          <Styled.Card ml={[48, 64, 0]} mr={[48, 64, 0]} mb={[48, 64, 0]}>
            <Styled.IconContainer>
              <Icon3 />
            </Styled.IconContainer>
            <Styled.CardTitle>
              Tráfego para capitação de clientes
            </Styled.CardTitle>
            <Styled.Description fontSize={[12, 14, 16]}>
              O tráfego pago é uma das maneiras mais
              <br /> efetivas de gerar lead e se vender
              <br /> pela internet. É composto por anúncios
              <br /> publicitários elaborados por meio <br /> de plataformas
              específicas e que
              <br /> costuma trazer bons resultados
              <br /> rapidamente, direcionando o usuário para
              <br /> o site da empresa, também é<br /> chamado de links
              patrocinados.
            </Styled.Description>
          </Styled.Card>
        </Fade>

        <Fade bottom>
          <Styled.Card
            ml={[48, 64, 0]}
            mr={[48, 64, 0]}
            minHeight={[545, 545, 545]}
          >
            <Styled.IconContainer>
              <Icon4 />
            </Styled.IconContainer>
            <Styled.CardTitle>Criação de conteúdo</Styled.CardTitle>
            <Styled.Description fontSize={[16, 16, 16]}>
              Criação de conteúdo
              <br /> para sua empresa,
              <br /> materiais diversos para
              <br />
              divulgação do produto/serviço,
              <br /> social media, copywriter
              <br /> gestão de tráfego <br /> e muito mais.
            </Styled.Description>
          </Styled.Card>
        </Fade>
      </Styled.CardsContainer>

      <Styled.ButtonContainer onClick={() => showModal()}>
        <Styled.RegisterBtn>TENHO INTERESSE</Styled.RegisterBtn>
      </Styled.ButtonContainer>
    </Styled.MainBanner>
  );
};

export default Main;
