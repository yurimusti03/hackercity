import * as Styled from "./styles";

import { gql, useMutation } from "@apollo/client";

import Logo from "../../assets/svg/logo.svg";
import MainBg from "../../assets/img/mainBg.png";

import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { Modal, Button, notification } from 'antd';

import Loading from "../../components/Loading";

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

const Main = () => {
  const router = useRouter();

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
  };

  useEffect(() => {
    if (data?.createLandingpage) {
      if (data.createLandingpage.status.status === 200) {
        notification.success({
          message: "Sucesso",
          description: "Cadastro efetuado com sucesso.",
        });
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
      nome ==="" ||
      email === "" ||
      celular === "" ||
      funcionarios === "" ||
      instagram === ""      
    ) {
      notification.warning({
        message: "Alerta",
        description: "É necessário preencher todos os campos antes de continuar.",
      });
    } else {
      createLandingpage({
        variables: {
          input: {
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
      <Styled.MainBanner
        justifyContent={["center", "center", "center"]}
        backgroundImage={[
          `url(${MainBg})`,
          `url(${MainBg})`,
          `url(${MainBg})`,
        ]}
      >
        <Styled.LogoContainer>
          <Fade left>
            <Logo />
          </Fade>
        </Styled.LogoContainer>

        <Styled.TextContainer
        mx={[50, 50, 160]}
        >
          <Styled.Title 
          fontSize={[30, 40, 60]}
          >
            <Fade left delay={100}>
              Uma solução inteligente de
              marketing e publicidade
              para sua empresa!
            </Fade>
          </Styled.Title>

          <Styled.ButtonContainer>
            <Fade left delay={200}>
              <Styled.RegisterBtn
              onClick={showModal}
              fontSize={[18, 24, 24]}
              py={[18, 25, 25]}
              width={[200, 300, 300]}
              >
                  SAIBA MAIS
              </Styled.RegisterBtn>
            </Fade>
            <Modal 
            title="Para ficar por dentro das novidades que vão acontecer, inscreva-se abaixo." 
            visible={isModalVisible} 
            onOk={_handleCreate} 
            onCancel={handleCancel}
            >
              <Styled.Form>
                <Styled.InputContainer>
                  Nome:
                  <Styled.Input 
                    placeholder="Seu nome..."
                    type="name"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                  />             
                </Styled.InputContainer>
                <Styled.InputContainer>
                  Seu melhor email:
                  <Styled.Input 
                    placeholder="exemplo@email.com.br"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />             
                </Styled.InputContainer>
                <Styled.InputContainer>
                  Seu Whatsapp
                  <Styled.Input 
                    placeholder="(DDD) 99999-8888"
                    value={celular}
                    onChange={(e) => setCelular(e.target.value)}
                  />             
                </Styled.InputContainer>
                <Styled.InputContainer>
                  Numero de funcionários:
                  <Styled.Input 
                    placeholder="Ex: 48"
                    value={funcionarios}
                    onChange={(e) => setFuncionarios(e.target.value)}
                  />             
                </Styled.InputContainer>
                <Styled.InputContainer>
                  Instagram da empresa:
                  <Styled.Input 
                    placeholder="@suaempresa"
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)}
                  />             
                </Styled.InputContainer>
              </Styled.Form>
            </Modal>

          </Styled.ButtonContainer>
        </Styled.TextContainer>
      </Styled.MainBanner>
    );
  };

export default Main;
