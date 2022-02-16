import * as Styled from "./styles";

import Logo from "../../assets/svg/logo.svg";
import Instagram from "../../assets/svg/instagram.svg";
import Facebook from "../../assets/svg/facebook.svg";
import Twitter from "../../assets/svg/twitter.svg";
import Linkedin from "../../assets/svg/linkedin.svg";
import Youtube from "../../assets/svg/youtube.svg";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

import Loading from "../../components/Loading";

const Footer = () => {
  const router = useRouter();

  return (
    <Styled.MainBanner justifyContent={["center", "center", "center"]}>
      <Styled.MainContainer>
        <Styled.LogoContainer>
          <Logo />
        </Styled.LogoContainer>

        <Styled.Section>
          <Styled.Title>
            {/* <Fade right>Sobre a FunMídia</Fade> */}
          </Styled.Title>
          <Styled.Title>
            <Fade right>Fale Conosco</Fade>
          </Styled.Title>
          <Styled.Title>
            {/* <Fade right>Trabalhe Conosco</Fade> */}
          </Styled.Title>

          <Styled.SocialMedia>
            <Fade bottom>
              <Styled.IconContainer>
                <Instagram
                  onClick={() => {
                    const url =
                      "https://instagram.com/funmidiaoficial?utm_medium=copy_link";
                    window.open(url, "_blank");
                  }}
                />
              </Styled.IconContainer>
            </Fade>
            <Fade bottom>
              <Styled.IconContainer>
                <Facebook
                  onClick={() => {
                    const url = "https://www.facebook.com/funmidiaoficial";
                    window.open(url, "_blank");
                  }}
                />
              </Styled.IconContainer>
            </Fade>
            <Fade bottom>
              <Styled.IconContainer>
                <Linkedin
                  onClick={() => {
                    const url = "https://www.linkedin.com/company/funmidia";
                    window.open(url, "_blank");
                  }}
                />
              </Styled.IconContainer>
            </Fade>
            <Fade bottom>
              <Styled.IconContainer>
                <Youtube
                  onClick={() => {
                    const url =
                      "https://youtube.com/channel/UC_Out54KqolOpPzTdoQlYrg";
                    window.open(url, "_blank");
                  }}
                />
              </Styled.IconContainer>
            </Fade>
          </Styled.SocialMedia>
        </Styled.Section>
      </Styled.MainContainer>

      <Styled.Name>
        <Fade>FunMídia Tecnlogia e informação LTDA</Fade>
      </Styled.Name>
      <Styled.Copyright>
        <Styled.Cnpj>{/* <Fade>CNPJ: 00.00000.0000/00</Fade> */}</Styled.Cnpj>

        <Styled.Terms>
          <span>Termos de Uso | Política e Privacidade | Disclaimer</span>

          <span>2022 - FunMídia Todos os direios reservados</span>
        </Styled.Terms>
      </Styled.Copyright>
    </Styled.MainBanner>
  );
};

export default Footer;
