import React, { useEffect, useState } from "react";

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

  const [metaMask, setMetamask] = useState("");
  const [email, setEmail] = useState("");
  const [dataMessage, setDataMessage] = useState({
    show: false,
    data: {
      status: 200,
      message: "",
      count: 0,
      link: "",
    },
  });

  const [modal, setModal] = useState({
    show: false,
    data: {
      title: "NO ONE SIGNED UP WITH YOUR LINK YET",
      body: () => (
        <>
          <p>
            But that's alright, don't be upset! You still have time to share
            your personal link with your friends!
          </p>
          <p style={{ marginTop: 24 }}>
            Once someone registers with your personal link, you just need to
            return here and fill in your data again and we will decode the
            results for you!
          </p>
          <p style={{ marginTop: 24 }}>See ya!</p>
        </>
      ),
    },
  });

  useEffect(() => {
    if (data?.createWhiteList) {
      if (data.createWhiteList.status.status === 200) {
        //Insert a new whitelist
        setDataMessage({
          show: true,
          data: {
            status: 200,
            message: data.createWhiteList.status.message,
            count: data.createWhiteList.data.listShared.length,
            link: `https://www.hackercity.co?tokenInvite=${data.createWhiteList.data.tokenShared}`,
          },
        });
        setModal({
          show: true,
          data: {
            title: "That's it! Now you're coded into our whitelist!",
            body: () => (
              <>
                <p>
                  You also got a <b>PERSONAL INVITE LINK!</b> Each friend that
                  registers in our whitelist using your personal link will
                  guarantee you another spot in the whitelist,{" "}
                  <b>RAISING YOUR CHANCES</b> of being selected!
                </p>
                <p style={{ marginTop: 24 }}>
                  When you wish to check how many spots you have, just come back
                  here and fill the form with your data again.
                </p>
                <p style={{ marginTop: 24 }}>See ya!</p>
              </>
            ),
          },
        });
      }
      if (data.createWhiteList.status.status === 201) {
        //Show list to user
        setDataMessage({
          show: true,
          data: {
            status: 200,
            message: data.createWhiteList.status.message,
            count: data.createWhiteList.data.listShared.length,
            link: `https://www.hackercity.co?tokenInvite=${data.createWhiteList.data.tokenShared}`,
          },
        });
        setModal({
          show: true,
          data: {
            title: "Yeah! Keep inviting your friends!",
            body: () => (
              <>
                <p>
                  Congratulations, you managed to{" "}
                  <b>
                    INVITE {data.createWhiteList.data.listShared.length} FRIENDS
                  </b>{" "}
                  to sign up for our whitelist. Thank you for your dedication.
                </p>
                <p style={{ marginTop: 24 }}>
                  Once someone registers with your personal link, you just need
                  to return here and fill in your data again and we will decode
                  the results for you!
                </p>
                {/* <p style={{ marginTop: 24 }}>See ya!</p> */}
              </>
            ),
          },
        });
      }

      console.log(data);
    }
  }, [data]);

  const _handleSendWhitelist = () => {
    if (metaMask === "" || email === "") {
      notification.warning({
        message: "Alert",
        description: "Please check the required fields.",
      });
    } else {
      create({
        variables: {
          input: {
            email,
            walletId: metaMask,
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
      <Styled.CountContainer
        top={["8%", "8%", "12%"]}
        right={["", "", "20%"]}
      >
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

          <Styled.InputForm>
            <Styled.Label fontSize={[16, 22, 24]}>
              Metamask Address
            </Styled.Label>
            <Styled.InputContainer>
              <Styled.Input
                value={metaMask}
                onChange={(e) => {
                  setMetamask(e.target.value);
                }}
              />
            </Styled.InputContainer>
          </Styled.InputForm>
          <Styled.InputForm>
            <Styled.Label fontSize={[16, 18, 24]}>E-mail</Styled.Label>
            <Styled.InputContainer>
              <Styled.Input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
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

          {dataMessage.show && (
            <Styled.ShowSharedMain>
              <Styled.SubmitedForm>
                <Icon icon="bi:check-lg" color="#00aa3a" />
                <Styled.SubmitedText fontSize={[16, 24, 28]}>
                  Submitted successfully!
                </Styled.SubmitedText>
              </Styled.SubmitedForm>
              <Styled.TextShareContainer mt={[16, 16, 16]} mb={[16, 16, 16]}>
                <Styled.TextShare fontSize={[16, 18, 16]}>
                  Share this link with your friends and raise your chances of
                  being selected!
                </Styled.TextShare>
              </Styled.TextShareContainer>

              <Styled.InputDarkContainer>
                <Input.Group compact size="large">
                  <Button icon={<ShareAltOutlined />} size="large" />

                  <Input
                    style={{ width: "calc(100% - 80px)" }}
                    value={dataMessage.data.link}
                  />
                  <Tooltip title="Copy URL">
                    <Button
                      icon={<CopyOutlined />}
                      size="large"
                      onClick={() =>
                        navigator.clipboard.writeText(dataMessage.data.link)
                      }
                    />
                  </Tooltip>
                </Input.Group>
              </Styled.InputDarkContainer>
              <Styled.ButtonMain>
                <Styled.ButtonContainerDiscord w={["100%", "100%", "45%"]}>
                  <svg
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 245 240"
                    fill="#fff"
                    style={{ width: "15%" }}
                  >
                    <path
                      class="st0"
                      d="M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z"
                    />
                    <path
                      class="st0"
                      d="M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z"
                    />
                  </svg>
                  <Styled.ButtonDiscord
                    fontSize={[16, 16, 16]}
                    onClick={() =>
                      window.open("https://discord.gg/UJ4k3VbwFw", "_blank")
                    }
                  >
                    JOIN US DISCORD
                  </Styled.ButtonDiscord>
                </Styled.ButtonContainerDiscord>{" "}
                {/**/}
              </Styled.ButtonMain>
            </Styled.ShowSharedMain>
          )}
        </Styled.Form>
      </Styled.RoadmapForm>
      <Modal
        title={modal.data.title}
        visible={modal.show}
        onOk={() => {}}
        width={1000}
        cancelText="Close"
        okButtonProps={{ style: { display: "none" } }}
        onCancel={() => {
          setModal({ ...modal, show: false });
        }}
        className="modalStyle"
        //bodyStyle={{ borderRadius: "20px" }} {/* Also tried with bodyStyle property */}
      >
        {modal.data.body()}
      </Modal>
    </Styled.RoadMapMain>
  );
};

export default RoadMap;
