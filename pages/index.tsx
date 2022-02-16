import React from "react";
import Head from "next/head";

import * as Styled from "../styles/styles";

import Main from "../src/containers/main";
import Marketing from "../src/containers/marketing";
import Services from "../src/containers/services";
import BuySection from "../src/containers/buySection";
import Footer from "../src/containers/footer";


const Home: React.FC = () => {
  return (
    <>
      <Head>
        <meta name="description" content="FunMedia" />
        <title>FunMídia</title>
      </Head>

      <Styled.Container>
        <Main />
        <Marketing />
        <Services />
        <BuySection />
        <Footer />
      </Styled.Container>
    </>
  );
};

export default Home;
