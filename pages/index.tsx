import React from "react";
import Banner from "../src/components/Banner";
import ChoosePerso from "../src/components/ChoosePerso";
import Hackers from "../src/components/Hackers";
import Header from "../src/components/Header";
import RoadMap from "../src/components/RoadMap";
import Team from "../src/components/Team";

import { ChakraProvider } from "@chakra-ui/react";

// import * as Styled from "./style";

const Page = ({}) => {
  return (
    <>
      <Header
        // title="Hacker City"
        route={[
          { title: "Home", routeName: "#home" },
          { title: "Choose Hacker", routeName: "#chooseHacker" },
          { title: "Roadmap", routeName: "#roadmap" },
          { title: "Whitelist", routeName: "#whitepaper" },
          { title: "Team", routeName: "#team" },
        ]}
      />
      <Banner />
      <ChoosePerso />
      <Hackers />
      <RoadMap />
      <Team />
    </>
  );
};

export default Page;
