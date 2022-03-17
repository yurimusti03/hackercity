import React, { useEffect, useState } from "react";

import { Props } from "./type";
import * as Styled from "./style";

import bg from "../../assets/image/schenarioHackers2.png";
import arrow from "../../assets/image/setinhas-capsula.png";

import fatJoe_empty from "../../assets/image/hackersCapsule/fatjoe/fatJoe_empty.png";
import fatJoe_head_body_legs from "../../assets/image/hackersCapsule/fatjoe/fatJoe_head_body_legs.png";
import fatJoe_head from "../../assets/image/hackersCapsule/fatjoe/fatJoe_head.png";
import fatJoe_head_body from "../../assets/image/hackersCapsule/fatjoe/fatJoe_head_body.png";
import fatJoe_head_legs from "../../assets/image/hackersCapsule/fatjoe/fatJoe_head_legs.png";
import fatJoe_legs from "../../assets/image/hackersCapsule/fatjoe/fatJoe_legs.png";
import fatJoe_body_legs from "../../assets/image/hackersCapsule/fatjoe/fatJoe_body_legs.png";
import fatJoe_body from "../../assets/image/hackersCapsule/fatjoe/fatJoe_body.png";

import card_joe_head from "../../assets/image/hackersCapsule/fatjoe/card_joe_head.png";
import card_joe_body from "../../assets/image/hackersCapsule/fatjoe/card_joe_body.png";
import card_joe_legs from "../../assets/image/hackersCapsule/fatjoe/card_joe_legs.png";

import joy_empty from "../../assets/image/hackersCapsule/joy/joy_empty.png";
import joy_head_body_legs from "../../assets/image/hackersCapsule/joy/joy_head_body_legs.png";
import joy_head from "../../assets/image/hackersCapsule/joy/joy_head.png";
import joy_head_body from "../../assets/image/hackersCapsule/joy/joy_head_body.png";
import joy_head_legs from "../../assets/image/hackersCapsule/joy/joy_head_legs.png";
import joy_legs from "../../assets/image/hackersCapsule/joy/joy_legs.png";
import joy_body_legs from "../../assets/image/hackersCapsule/joy/joy_body_legs.png";
import joy_body from "../../assets/image/hackersCapsule/joy/joy_body.png";

import card_joy_head from "../../assets/image/hackersCapsule/joy/card_joy_head.png";
import card_joy_body from "../../assets/image/hackersCapsule/joy/card_joy_body.png";
import card_joy_legs from "../../assets/image/hackersCapsule/joy/card_joy_legs.png";

import mrCobol_empty from "../../assets/image/hackersCapsule/mrCobol/mrCobol_empty.png";
import mrCobol_head_body_legs from "../../assets/image/hackersCapsule/mrCobol/mrCobol_head_body_legs.png";
import mrCobol_head from "../../assets/image/hackersCapsule/mrCobol/mrCobol_head.png";
import mrCobol_head_body from "../../assets/image/hackersCapsule/mrCobol/mrCobol_head_body.png";
import mrCobol_head_legs from "../../assets/image/hackersCapsule/mrCobol/mrCobol_head_legs.png";
import mrCobol_legs from "../../assets/image/hackersCapsule/mrCobol/mrCobol_legs.png";
import mrCobol_body_legs from "../../assets/image/hackersCapsule/mrCobol/mrCobol_body_legs.png";
import mrCobol_body from "../../assets/image/hackersCapsule/mrCobol/mrCobol_body.png";

import card_mrCobol_head from "../../assets/image/hackersCapsule/mrCobol/card_mrCobol_head.png";
import card_mrCobol_body from "../../assets/image/hackersCapsule/mrCobol/card_mrCobol_body.png";
import card_mrCobol_legs from "../../assets/image/hackersCapsule/mrCobol/card_mrCobol_legs.png";

import noah_empty from "../../assets/image/hackersCapsule/noah/noah_empty.png";
import noah_head_body_legs from "../../assets/image/hackersCapsule/noah/noah_head_body_legs.png";
import noah_head from "../../assets/image/hackersCapsule/noah/noah_head.png";
import noah_head_body from "../../assets/image/hackersCapsule/noah/noah_head_body.png";
import noah_head_legs from "../../assets/image/hackersCapsule/noah/noah_head_legs.png";
import noah_legs from "../../assets/image/hackersCapsule/noah/noah_legs.png";
import noah_body_legs from "../../assets/image/hackersCapsule/noah/noah_body_legs.png";
import noah_body from "../../assets/image/hackersCapsule/noah/noah_body.png";

import card_noah_head from "../../assets/image/hackersCapsule/noah/card_noah_head.png";
import card_noah_body from "../../assets/image/hackersCapsule/noah/card_noah_body.png";
import card_noah_legs from "../../assets/image/hackersCapsule/noah/card_noah_legs.png";

import { dataConfig, charactersConfig } from "./settings";
import ReactPlayer from "react-player";
// import video from "../../assets/video/hc01.mp4";

const ChoosePerso = ({}: Props) => {
  const [data, setData] = useState(dataConfig);
  const [characters, setCharacters] = useState(charactersConfig);

  const renderCapsule = () => {
    // @ts-ignore: Unreachable code error
    const { tshirt } = characters[data.initialCharacter];
    switch (data.initialCharacter) {
      case "fatJoe":
        if (
          tshirt.head === false &&
          tshirt.body === false &&
          tshirt.legs === false
        ) {
          return <Styled.Capsule src={fatJoe_empty.src} />;
        }
        if (
          tshirt.head === true &&
          tshirt.body === true &&
          tshirt.legs === true
        ) {
          return <Styled.Capsule src={fatJoe_head_body_legs.src} />;
        }
        if (
          tshirt.head === true &&
          tshirt.body === false &&
          tshirt.legs === false
        ) {
          return <Styled.Capsule src={fatJoe_head.src} />;
        }

        if (
          tshirt.head === true &&
          tshirt.body === true &&
          tshirt.legs === false
        ) {
          return <Styled.Capsule src={fatJoe_head_body.src} />;
        }

        if (
          tshirt.head === true &&
          tshirt.body === false &&
          tshirt.legs === true
        ) {
          return <Styled.Capsule src={fatJoe_head_legs.src} />;
        }

        if (
          tshirt.head === false &&
          tshirt.body === true &&
          tshirt.legs === true
        ) {
          return <Styled.Capsule src={fatJoe_body_legs.src} />;
        }

        if (
          tshirt.head === false &&
          tshirt.body === true &&
          tshirt.legs === false
        ) {
          return <Styled.Capsule src={fatJoe_body.src} />;
        }

        if (
          tshirt.head === false &&
          tshirt.body === false &&
          tshirt.legs === true
        ) {
          return <Styled.Capsule src={fatJoe_legs.src} />;
        }

        break;

      case "joy":
        if (
          tshirt.head === false &&
          tshirt.body === false &&
          tshirt.legs === false
        ) {
          return <Styled.Capsule src={joy_empty.src} />;
        }
        if (
          tshirt.head === true &&
          tshirt.body === true &&
          tshirt.legs === true
        ) {
          return <Styled.Capsule src={joy_head_body_legs.src} />;
        }
        if (
          tshirt.head === true &&
          tshirt.body === false &&
          tshirt.legs === false
        ) {
          return <Styled.Capsule src={joy_head.src} />;
        }

        if (
          tshirt.head === true &&
          tshirt.body === true &&
          tshirt.legs === false
        ) {
          return <Styled.Capsule src={joy_head_body.src} />;
        }

        if (
          tshirt.head === true &&
          tshirt.body === false &&
          tshirt.legs === true
        ) {
          return <Styled.Capsule src={joy_head_legs.src} />;
        }

        if (
          tshirt.head === false &&
          tshirt.body === true &&
          tshirt.legs === true
        ) {
          return <Styled.Capsule src={joy_body_legs.src} />;
        }

        if (
          tshirt.head === false &&
          tshirt.body === true &&
          tshirt.legs === false
        ) {
          return <Styled.Capsule src={joy_body.src} />;
        }

        if (
          tshirt.head === false &&
          tshirt.body === false &&
          tshirt.legs === true
        ) {
          return <Styled.Capsule src={joy_legs.src} />;
        }

        break;

      case "mrCobol":
        if (
          tshirt.head === false &&
          tshirt.body === false &&
          tshirt.legs === false
        ) {
          return <Styled.Capsule src={mrCobol_empty.src} />;
        }
        if (
          tshirt.head === true &&
          tshirt.body === true &&
          tshirt.legs === true
        ) {
          return <Styled.Capsule src={mrCobol_head_body_legs.src} />;
        }
        if (
          tshirt.head === true &&
          tshirt.body === false &&
          tshirt.legs === false
        ) {
          return <Styled.Capsule src={mrCobol_head.src} />;
        }

        if (
          tshirt.head === true &&
          tshirt.body === true &&
          tshirt.legs === false
        ) {
          return <Styled.Capsule src={mrCobol_head_body.src} />;
        }

        if (
          tshirt.head === true &&
          tshirt.body === false &&
          tshirt.legs === true
        ) {
          return <Styled.Capsule src={mrCobol_head_legs.src} />;
        }

        if (
          tshirt.head === false &&
          tshirt.body === true &&
          tshirt.legs === true
        ) {
          return <Styled.Capsule src={mrCobol_body_legs.src} />;
        }

        if (
          tshirt.head === false &&
          tshirt.body === true &&
          tshirt.legs === false
        ) {
          return <Styled.Capsule src={mrCobol_body.src} />;
        }

        if (
          tshirt.head === false &&
          tshirt.body === false &&
          tshirt.legs === true
        ) {
          return <Styled.Capsule src={mrCobol_legs.src} />;
        }

        break;

      case "noah":
        if (
          tshirt.head === false &&
          tshirt.body === false &&
          tshirt.legs === false
        ) {
          return <Styled.Capsule src={noah_empty.src} />;
        }
        if (
          tshirt.head === true &&
          tshirt.body === true &&
          tshirt.legs === true
        ) {
          return <Styled.Capsule src={noah_head_body_legs.src} />;
        }
        if (
          tshirt.head === true &&
          tshirt.body === false &&
          tshirt.legs === false
        ) {
          return <Styled.Capsule src={noah_head.src} />;
        }

        if (
          tshirt.head === true &&
          tshirt.body === true &&
          tshirt.legs === false
        ) {
          return <Styled.Capsule src={noah_head_body.src} />;
        }

        if (
          tshirt.head === true &&
          tshirt.body === false &&
          tshirt.legs === true
        ) {
          return <Styled.Capsule src={noah_head_legs.src} />;
        }

        if (
          tshirt.head === false &&
          tshirt.body === true &&
          tshirt.legs === true
        ) {
          return <Styled.Capsule src={noah_body_legs.src} />;
        }

        if (
          tshirt.head === false &&
          tshirt.body === true &&
          tshirt.legs === false
        ) {
          return <Styled.Capsule src={noah_body.src} />;
        }

        if (
          tshirt.head === false &&
          tshirt.body === false &&
          tshirt.legs === true
        ) {
          return <Styled.Capsule src={noah_legs.src} />;
        }

        break;

      default:
        break;
    }
    return <>capsule</>;
  };

  const renderTshirt = () => {
    return (
      <Styled.ItemDiv display={["none", "none", "flex"]}>
        <Styled.TshirtItem
          src={
            data.initialCharacter === "fatJoe"
              ? card_joe_head.src
              : data.initialCharacter === "joy"
              ? card_joy_head.src
              : data.initialCharacter === "mrCobol"
              ? card_mrCobol_head.src
              : card_noah_head.src
          }
          onClick={() => {
            setCharacters({
              ...characters,
              [data.initialCharacter]: {
                tshirt: {
                  // @ts-ignore: Unreachable code error
                  ...characters[data.initialCharacter].tshirt,
                  // @ts-ignore: Unreachable code error
                  head: !characters[data.initialCharacter].tshirt.head,
                },
              },
            });
          }}
        />
        <Styled.TshirtItem
          src={
            data.initialCharacter === "fatJoe"
              ? card_joe_body.src
              : data.initialCharacter === "joy"
              ? card_joy_body.src
              : data.initialCharacter === "mrCobol"
              ? card_mrCobol_body.src
              : card_noah_body.src
          }
          onClick={() => {
            setCharacters({
              ...characters,
              [data.initialCharacter]: {
                tshirt: {
                  // @ts-ignore: Unreachable code error
                  ...characters[data.initialCharacter].tshirt,
                  // @ts-ignore: Unreachable code error
                  body: !characters[data.initialCharacter].tshirt.body,
                },
              },
            });
          }}
        />

        <Styled.TshirtItem
          src={
            data.initialCharacter === "fatJoe"
              ? card_joe_legs.src
              : data.initialCharacter === "joy"
              ? card_joy_legs.src
              : data.initialCharacter === "mrCobol"
              ? card_mrCobol_legs.src
              : card_noah_legs.src
          }
          onClick={() => {
            setCharacters({
              ...characters,
              [data.initialCharacter]: {
                tshirt: {
                  // @ts-ignore: Unreachable code error
                  ...characters[data.initialCharacter].tshirt,
                  // @ts-ignore: Unreachable code error
                  legs: !characters[data.initialCharacter].tshirt.legs,
                },
              },
            });
          }}
        />
      </Styled.ItemDiv>
    );
  };

  return (
    <Styled.ChoosePersoMain
      id="chooseHacker"
      background={bg.src}
      display={["none", "none", "none", "flex"]}
    >
      <Styled.BoxArrowCharacter>
        <Styled.LeftArrow
          src={arrow.src}
          onClick={() => {
            if (data.initialCharacter === "fatJoe") {
              setData({ initialCharacter: "noah" });
            }
            if (data.initialCharacter === "noah") {
              setData({ initialCharacter: "joy" });
            }
            if (data.initialCharacter === "joy") {
              setData({ initialCharacter: "mrCobol" });
            }
            if (data.initialCharacter === "mrCobol") {
              setData({ initialCharacter: "fatJoe" });
            }
          }}
        />
        <Styled.CapsuleBox>{renderCapsule()}</Styled.CapsuleBox>
        <Styled.Tshirt>{renderTshirt()}</Styled.Tshirt>
        <Styled.RightArrow
          onClick={() => {
            if (data.initialCharacter === "fatJoe") {
              setData({ initialCharacter: "mrCobol" });
            }
            if (data.initialCharacter === "mrCobol") {
              setData({ initialCharacter: "joy" });
            }
            if (data.initialCharacter === "joy") {
              setData({ initialCharacter: "noah" });
            }
            if (data.initialCharacter === "noah") {
              setData({ initialCharacter: "fatJoe" });
            }
          }}
          src={arrow.src}
        />
      </Styled.BoxArrowCharacter>
      <Styled.BoxComputerChat>
        <Styled.BoxVideoRegion>
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=n7ZJalGopgA"
            width="100%"
            height="100%"
            config={{
              youtube: {
                playerVars: { autoplay: 0, controls: 1, mute: 0 },
              },
            }}
          />
        </Styled.BoxVideoRegion>

        {/* <video autoplay loop>
          <source src="../../assets/video/hc01.mp4" type="video/mp4" />
        </video> */}
      </Styled.BoxComputerChat>
    </Styled.ChoosePersoMain>
  );
};

export default ChoosePerso;
