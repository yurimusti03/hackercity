/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

import { Props } from "./type";
import * as Styled from "./style";

import logo from "../../assets/image/logo.svg";
import logoOlho from "../../assets/image/logoOlho.png";

const Header = ({ title, route }: Props) => {
  const [active, setActive] = useState("#home");
  return (
    <Styled.MainHeader height={[60, 70]}>
      <Styled.Title margin-left={[10, 15, 20]} fontSize={[20, 25, 30]}>
        <img src={logoOlho.src} alt="" style={{ width: "25%" }} />
        <img src={logo.src} alt="" style={{ width: "50%", marginLeft: 12 }} />
      </Styled.Title>
      <Styled.Nav display={["none", "none", "none", "flex"]}>
        {route?.map((e, i) => {
          return (
            <Styled.Route
              href={e.routeName}
              active={e.routeName === active}
              onClick={() => {
                setActive(e.routeName);
                if (e.title === "White paper" || e.title === "HACK NOW")
                  window.open(e.url, "_blank");
              }}
              fontSize={[10, 13, 15]}
              key={`${e.routeName}_${i}`}
            >
              {e.title}
            </Styled.Route>
          );
        })}
        <Styled.RouteHackNow
          active={setActive}
          onClick={() => {
            window.open("https://app.hackercity.co", "_blank");
          }}
          fontSize={[10, 23, 23]}
        >
          COMRE AGORA
        </Styled.RouteHackNow>
      </Styled.Nav>
    </Styled.MainHeader>
  );
};

export default Header;
