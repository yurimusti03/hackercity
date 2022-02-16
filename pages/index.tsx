import React, { useEffect, useState } from "react";
import Head from "next/head";

import * as Styled from "../styles/styles";

import Main from "../src/containers/main";
import Marketing from "../src/containers/marketing";
import Services from "../src/containers/services";
import BuySection from "../src/containers/buySection";
import Footer from "../src/containers/footer";
import { Button, notification } from "antd";
import { gql, useMutation } from "@apollo/client";

import Loading from "../../components/Loading";
import Modal from "antd/lib/modal/Modal";

import * as StyledFrom from "./style";

const CREATE_LEAD = gql`
  mutation CreateLandingpage($input: LandingpageInput) {
    createLandingpage(input: $input) {
      status {
        status
        message
      }
    }
  }
`;

const Home: React.FC = () => {
  const [createLandingpage, { data, loading: loadingCreate, error }] =
    useMutation(CREATE_LEAD);

  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [celular, setCelular] = useState("");
  const [funcionarios, setFuncionarios] = useState("");
  const [instagram, setInstagram] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setEmail("");
    setNome("");
    setCelular("");
    setFuncionarios("");
    setInstagram("");
  };

  useEffect(() => {
    if (data?.createLandingpage) {
      if (data.createLandingpage.status.status === 200) {
        notification.success({
          message: "Sucesso",
          description: "Cadastro efetuado com sucesso.",
        });
        handleCancel();
      } else {
        notification.error({
          message: "Error",
          description: "Ocorreu um erro ao tentar cadastrar suas informações.",
        });
      }
    }
  }, [data]);

  const _handleCreate = () => {
    if (
      nome === "" ||
      email === "" ||
      celular === "" ||
      funcionarios === "" ||
      instagram === ""
    ) {
      notification.warning({
        message: "Alerta",
        description:
          "É necessário preencher todos os campos antes de continuar.",
      });
    } else {
      createLandingpage({
        variables: {
          input: {
            idEmpresa: "620c11f9169525a636b9d917",
            nome,
            email,
            celular,
            funcionarios,
            instagram,
          },
        },
      });
    }
  };
  return (
    <>
      <Head>
        <meta name="description" content="FunMedia" />
        <title>FunMídia</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={true}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Styled.Container>
        <Main />
        <Marketing />
        <Services showModal={() => showModal()} />
        <BuySection showModal={() => showModal()} />
        <Footer />
      </Styled.Container>
      <Modal
        title="Preencha esse formulário que iremos entrar em contato com você."
        visible={isModalVisible}
        onOk={_handleCreate}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel} large>
            Fechar
          </Button>,
          <Button
            large
            key="submit"
            type="primary"
            loading={loadingCreate}
            onClick={_handleCreate}
          >
            Enviar
          </Button>,
        ]}
      >
        <StyledFrom.Form>
          <StyledFrom.InputContainer>
            Nome:
            <StyledFrom.Input
              placeholder="Seu nome..."
              type="name"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </StyledFrom.InputContainer>
          <StyledFrom.InputContainer>
            Seu melhor email:
            <StyledFrom.Input
              placeholder="exemplo@email.com.br"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </StyledFrom.InputContainer>
          <StyledFrom.InputContainer>
            Seu Whatsapp
            <StyledFrom.Input
              placeholder="(DDD) 99999-8888"
              value={celular}
              onChange={(e) => setCelular(e.target.value)}
            />
          </StyledFrom.InputContainer>
          <StyledFrom.InputContainer>
            Numero de funcionários:
            <StyledFrom.Input
              placeholder="Ex: 48"
              value={funcionarios}
              onChange={(e) => setFuncionarios(e.target.value)}
            />
          </StyledFrom.InputContainer>
          <StyledFrom.InputContainer>
            Instagram da empresa:
            <StyledFrom.Input
              placeholder="@suaempresa"
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
            />
          </StyledFrom.InputContainer>
        </StyledFrom.Form>
      </Modal>
    </>
  );
};

export default Home;
