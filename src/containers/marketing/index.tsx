import * as Styled from "./styles";

import Elipse from "../../assets/svg/elipse.svg";
import MarketingBg from "../../assets/img/marketingBg.png";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

import Loading from "../../components/Loading";



const Marketing = () => {
  const router = useRouter();

    return (
      <Styled.MainBanner
        justifyContent={["center", "flex-start", "flex-start"]}
        backgroundImage={[
          `url(${MarketingBg})`,
          `url(${MarketingBg})`,
          `url(${MarketingBg})`,
        ]}
      >
          <Styled.Title
          fontSize={[20, 30, 40]}
          textAlign={["center", "center", "inherit"]}
          mx={[55, 80, 120]}
          >
              Séra que seu <span>negócio</span> está preparado para a nova <span>revolução digital?</span>
              Estamos aqui pra te ajudar e se posicionar e vender muito mais
              atravéss da internet.
          </Styled.Title>

        <Styled.List>
          <Styled.SubTitle>
            <Zoom>
              <Elipse />
            </Zoom>
            <Fade bottom>
              Você tem problemas com o marketing da sua empresa?
            </Fade>
          </Styled.SubTitle>
          <Styled.SubTitle>
            <Zoom delay={100}>
              <Elipse />
            </Zoom>
            <Fade bottom>
              Você acha muito caro os profissionais da área?
            </Fade>
          </Styled.SubTitle>
          <Styled.SubTitle>
            <Zoom delay={200}>
              <Elipse />
            </Zoom>
            <Fade bottom>
              Ou você ainda não sabe por onde começar?
            </Fade>
          </Styled.SubTitle>
        </Styled.List>

          <Styled.Description 
          fontSize={[20, 25, 30]}
          textAlign={["center", "center", "inherit"]}
          mx={[55, 80, 120]}
          >
            <Fade left>
              Sabemos o quanto é difícil se posicionar
              da forma correta no digital,
              tentamos oferecer o melhor serviço
              para nossos clientes, com clareza,
              transparência, agilidade e qualidade.
            </Fade>
          </Styled.Description>
      </Styled.MainBanner>
    );
  };

export default Marketing;
