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

const Main = () => {
  const router = useRouter();

  return (
    <Styled.MainBanner
      justifyContent={["center", "center", "center"]}
      backgroundImage={[
        `url(${Services})`,
        `url(${Services})`,
        `url(${Services})`,
      ]}
    >
      <Styled.Title
        fontSize={[20, 30, 50]}
        textAlign={["center", "center", "inherit"]}
        mx={[20, 80, 120]}
      >
        <Fade right>Como a FunMídia pode contribuir com meu negócio?</Fade>
      </Styled.Title>

      <Styled.SubTitle
        fontSize={[20, 30, 50]}
        textAlign={["center", "center", "center"]}
        mx={[20, 80, 120]}
      >
        <Fade left>
          A FunMídia é uma empresa de{" "}
          <span>
            <Fade left>marketing e publicidade</Fade>
          </span>
          que vai te ajudar a posicionar seu negócio na internet de forma
          profissional!
        </Fade>
      </Styled.SubTitle>

      <Styled.CardsContainer>
        <Fade bottom>
          <Styled.Card>
            <Styled.IconContainer>
              <Icon1 />
            </Styled.IconContainer>
            <Styled.CardTitle>Criação de Identidade Visual</Styled.CardTitle>
            <Styled.Description>
              Uma identidade visual arquitetada e marcante é uma estratégia
              essencial para a marca,isso porque elal eva ao reconhecimento e a
              o valor damarca. Oprincipal fator de importância é que, com
              ela,épossível definir de forma visual, prática e “à primeira
              vista” quem é a empresa.
            </Styled.Description>
          </Styled.Card>
        </Fade>

        <Fade bottom>
          <Styled.Card>
            <Styled.IconContainer>
              <Icon2 />
            </Styled.IconContainer>
            <Styled.CardTitle>Criação de sites/landigin page</Styled.CardTitle>
            <Styled.Description>
              As landing pages são as páginas por onde os usuários acessam o
              site de sua empresa. Elas são essenciais pois possuem uma taxa de
              conversão maior em comparação às outras páginas de seu
              site,garantindo lucros maiores para suaempresa.
            </Styled.Description>
          </Styled.Card>
        </Fade>

        <Fade>

        <Styled.Card bottom>
          <Styled.IconContainer>
            <Icon3 />
          </Styled.IconContainer>
          <Styled.CardTitle>
            Tráfego para capitação de clientes
          </Styled.CardTitle>
          <Styled.Description>
            Otráfego pago é uma das maneiras mais efetivas de gerar lead
            sevender pela internetÉ composto por anúncios publicitários
            elaborados por meio de plataformas específicas e que costum a trazer
            bons resultados rapidamente, direcionando o usuário para o site da
            empresa, também é chamado delinks patrocinados.
          </Styled.Description>
        </Styled.Card>
        </Fade>

      <Fade>

        <Styled.Card bottom>
          <Styled.IconContainer>
            <Icon4 />
          </Styled.IconContainer>
          <Styled.CardTitle>Criação de conteúdo</Styled.CardTitle>
          <Styled.Description>
            Criação de conteúdo para sua empresa, materiais diversos para
            divulgação do produto/serviço, social media, copywriter gestão de
            tráfego e muito mais.
          </Styled.Description>
        </Styled.Card>
      </Fade>
      </Styled.CardsContainer>

        <Styled.ButtonContainer>
          <Fade>
            <Styled.RegisterBtn>TENHO INTERESSE</Styled.RegisterBtn>
          </Fade>
        </Styled.ButtonContainer>

    </Styled.MainBanner>
  );
};

export default Main;
