import React from "react";

import { Props } from "./type";
import * as Styled from "./style";

import bg from "../../assets/image/TeamImage.jpg";

import CardMembers from "../Members";

import { dataTeam, dataTeamTest } from "./settings";

const Team = ({}: Props) => {
  return (
    <Styled.TeamMain
      background={bg.src}
      id="team"
      display={["grid", "grid", "grid"]}
      gridTemplateColumns={["1fr", "1fr 1fr", "1fr 1fr", "1fr 1fr 1fr 1fr"]}
    >
      {dataTeam.map((e, i) => (
        <CardMembers
          key={`${e.name}_${e.tag}_${i}`}
          name={e.name}
          tag={e.tag}
          description={e.description}
          photo={e.photo.src}
          links={e.links}
        />
      ))}
    </Styled.TeamMain>
  );
};

export default Team;
