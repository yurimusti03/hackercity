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
      id="#marketing"
      justifyContent={["center", "flex-start", "flex-start"]}
      backgroundImage={[
        `url(${MarketingBg})`,
        `url(${MarketingBg})`,
        `url(${MarketingBg})`,
      ]}
    >
      <Styled.Title
        fontSize={[20, 30, 32]}
        ml={[55, 80, 120]}
        mr={[55, 80, 120]}
        mt={[48, 48, 64]}
        textAlign={["center", "", ""]}
      >
        Será que seu <span>negócio</span> está preparado para a nova
        <span> revolução digital?</span>
        <br />
        Estamos aqui pra te ajudar e se posicionar e vender muito mais <br />{" "}
        através da internet.
      </Styled.Title>

      <Styled.List mt={[32, 32, 32]} ml={[0, 0, 120]} mr={[0, 0, 120]}>
        <Styled.SubTitle fontSize={[14, 14, 22]}>
          <div>
            <Elipse />
          </div>
          Você tem problemas com o marketing da sua empresa?
        </Styled.SubTitle>
        <Styled.SubTitle fontSize={[14, 14, 22]}>
          <div>
            <Elipse />
          </div>
          Você acha muito caro os profissionais da área?
        </Styled.SubTitle>
        <Styled.SubTitle fontSize={[14, 14, 22]}>
          <div>
            <Elipse />
          </div>
          Ou você ainda não sabe por onde começar?
        </Styled.SubTitle>
      </Styled.List>

      <Styled.Description
        fontSize={[20, 25, 30]}
        textAlign={["center", "", ""]}
        ml={[32, 32, 120]}
        mt={[32, 32, 64]}
        pb={[64, 64, 120]}
      >
        {/* <Fade left> */}
        Sabemos o quanto é difícil se posicionar
        <br />
        da forma correta no digital,
        <br />
        tentamos oferecer o melhor serviço
        <br />
        para nossos clientes, com clareza,
        <br />
        transparência, agilidade e qualidade.
        <br />
        {/* </Fade> */}
      </Styled.Description>
    </Styled.MainBanner>
  );
};

export default Marketing;
