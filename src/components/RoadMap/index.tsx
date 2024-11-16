import React, { useEffect, useState } from "react";
import { ethers } from "ethers"; // Importante para conexão com MetaMask

import { Props } from "./type";
import * as Styled from "./style";

import bgScenario from "../../assets/image/roadMapImage.png";
import bg from "../../assets/image/whitelist/bg.png";
import fatJoe from "../../assets/image/whitelist/fatjoe.png";
import noah from "../../assets/image/whitelist/noah-roxo.png";

import { Icon } from "@iconify/react";
import { Input, Tooltip, Button, notification, Modal } from "antd";
import { ShareAltOutlined, CopyOutlined } from "@ant-design/icons";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const GET_WHITELIST_COUNT = gql`
  query {
    getAllWhiteList {
      data
    }
  }
`;

const CREATE = gql`
  mutation CreateWhiteList($input: CreateWhiteListInput) {
    createWhiteList(input: $input) {
      data {
        _id
        email
        walletId
        tokenShared
        listShared
        createdAt
      }
      status {
        status
        message
      }
    }
  }
`;

const RoadMap = (props: Props) => {
  const router = useRouter();
  const [countWhitelist, setCountWhiteList] = useState(0);
  const [metaMaskAddress, setMetaMaskAddress] = useState("");
  const [email, setEmail] = useState("");

  const [create, { data, loading, error }] = useMutation(CREATE);
  const {
    data: dataCount,
    loading: loadingCount,
    error: errorCount,
  } = useQuery(GET_WHITELIST_COUNT);

  useEffect(() => {
    if (dataCount?.getAllWhiteList) {
      setCountWhiteList(dataCount.getAllWhiteList.data);
    }
  }, [dataCount]);

  const connectMetaMask = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setMetaMaskAddress(accounts[0]);
      } catch (error) {
        console.error("MetaMask connection error:", error);
      }
    } else {
      alert(
        "MetaMask is not installed. Please install it to use this feature."
      );
    }
  };

  const _handleSendWhitelist = () => {
    if (metaMaskAddress === "" || email === "") {
      notification.warning({
        message: "Alert",
        description: "Please check the required fields.",
      });
    } else {
      create({
        variables: {
          input: {
            email,
            walletId: metaMaskAddress,
            tokenShared:
              Object.keys(router.query).length === 0
                ? ""
                : router.query.tokenInvite,
          },
        },
      });
    }
  };

  return (
    <Styled.RoadMapMain
      background={bgScenario.src}
      display={["flex", "flex", "flex"]}
      id="whitepaper"
    >
      <Styled.RoadmapBg
        src={bg.src}
        paddingBottom={[0, 0, 45]}
        height={["100%", "100%", "100%"]}
      />
      <Styled.ImageLeft src={fatJoe.src} display={["none", "none", "flex"]} />
      <Styled.ImageRight src={noah.src} display={["none", "none", "flex"]} />
      <Styled.CountContainer top={["8%", "8%", "12%"]} right={["", "", "20%"]}>
        <Styled.Count>{countWhitelist}</Styled.Count>
        <Styled.TextCount>Total Entries</Styled.TextCount>
      </Styled.CountContainer>

      <Styled.RoadmapForm pt={[160, 160, 0]}>
        <Styled.TitleWhiteList fontSize={[16, 22, 32]}>
          Hacker City - Whitelist
        </Styled.TitleWhiteList>
        <Styled.Form>
          <Styled.TitleContainer>
            <Styled.Title fontSize={[16, 22, 32]}>
              Hey there, join our whitelist!
            </Styled.Title>
          </Styled.TitleContainer>

          <Styled.InputForm style={{ marginBottom: -50 }}>
            <Styled.Label fontSize={[16, 22, 24]}>
              Metamask Address
            </Styled.Label>
            <Styled.InputContainer
              style={{ display: "flex", alignItems: "center" }}
            >
              <Styled.Input value={metaMaskAddress} readOnly />
              <Styled.ButtonMain style={{ marginLeft: 10, marginTop: 32 }}>
                <Styled.ButtonContainer onClick={() => connectMetaMask()}>
                  <Styled.Button fontSize={[16, 22, 28]}>
                    Connect Wallet
                  </Styled.Button>
                </Styled.ButtonContainer>
              </Styled.ButtonMain>
            </Styled.InputContainer>
          </Styled.InputForm>

          <Styled.InputForm>
            <Styled.Label fontSize={[16, 18, 24]}>E-mail</Styled.Label>
            <Styled.InputContainer>
              <Styled.Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Styled.InputContainer>
          </Styled.InputForm>

          <Styled.ButtonMain>
            <Styled.ButtonContainer onClick={() => _handleSendWhitelist()}>
              <Styled.Button fontSize={[16, 22, 28]}>
                Let's do it!
              </Styled.Button>
            </Styled.ButtonContainer>
          </Styled.ButtonMain>
        </Styled.Form>
      </Styled.RoadmapForm>
    </Styled.RoadMapMain>
  );
};

export default RoadMap;
