import React from "react";

import { Props } from "./type";
import * as Styled from "./style";

import bg from "../../assets/image/teamCard/card.png";
import title from "../../assets/image/teamCard/title.png";
import insta from "../../assets/image/teamCard/insta.png";
import twit from "../../assets/image/teamCard/twit.png";
import linkedin from "../../assets/image/teamCard/link.png";

const CardMembers = ({ name, tag, description, photo, links }: Props) => {
  return (
    <Styled.CardMain height={550}>
      <Styled.BackgroundTeam src={bg.src} />
      <Styled.LogoContainer top={[36, 42, 50]}>
        <Styled.Title background={title.src} />
      </Styled.LogoContainer>

      <Styled.InfoContainer >
        <Styled.Photo background={photo}></Styled.Photo>
        <Styled.NameContainer>
          <Styled.Name fontSize={[16, 20, 24]}>{name}</Styled.Name>
        </Styled.NameContainer>
        <Styled.TagContainer>
          <Styled.Name fontSize={[16, 16, 20]}>{tag}</Styled.Name>
        </Styled.TagContainer>
        <Styled.DescriptionContainer>
          <Styled.Text fontSize={[12, 12, 14]}>{description}</Styled.Text>
        </Styled.DescriptionContainer>
        <Styled.BoxLink>
          {links?.instagram !== "" && (
            <Styled.Link
              background={insta.src}
              onClick={() => {
                window.open(links?.instagram, "_blank");
              }}
            />
          )}
          {links?.twitter !== "" && (
            <Styled.Link
              background={twit.src}
              onClick={() => {
                window.open(links?.twitter, "_blank");
              }}
            />
          )}
          {links?.linkedin !== "" && (
            <Styled.Link
              background={linkedin.src}
              onClick={() => {
                window.open(links?.linkedin, "_blank");
              }}
            />
          )}
        </Styled.BoxLink>{" "}
        {/**/}
      </Styled.InfoContainer>
    </Styled.CardMain>
  );
};

export default CardMembers;
