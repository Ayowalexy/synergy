import React, { useState } from "react";
import { FooterStyle } from "./style";
import Bell from "../../assets/svgs/home/bell.svg";
import Bell2 from "../../assets/svgs/home/bell2.svg";

import Explore from "../../assets/svgs/home/explore.svg";
import Explore2 from "../../assets/svgs/home/explore2.svg";
import Msg from "../../assets/svgs/home/msg.svg";
import Msg2 from "../../assets/svgs/home/msg2.svg";
import Homen from "../../assets/svgs/home/homenn.svg";

import Settings from "../../assets/svgs/home/settings.svg";
import Home from "../../assets/svgs/home/home.svg";
import { Link, NavLink } from "react-router-dom";
import { VscBell } from "react-icons/vsc";

interface Props {
  onClick: React.MouseEventHandler<HTMLDivElement>;
}
export default function Footer({ onClick }: Props) {
  //handles style/appearance of active link
  const [activeLink, setActiveLink] = useState<
    "feed" | "explore" | "chat" | "bell"
  >("feed");
  const handleActiveLink = (
    active: boolean,
    link: "feed" | "explore" | "chat" | "bell"
  ) => {
    if (active === true) {
      setActiveLink(link);
      return "active-link";
    } else {
      return "inactive-link";
    }
  };
  return (
    <FooterStyle>
      <div id={activeLink === "feed" ? "active" : ""}>
        <NavLink
          to="/feed"
          className={({ isActive }) => handleActiveLink(isActive, "feed")}
        >
          {activeLink === "feed" ? (
            <img src={Home} alt="home" width={33} />
          ) : (
            <img src={Homen} alt="home" width={33} />
          )}
        </NavLink>
      </div>
      <div id={activeLink === "explore" ? "active" : ""}>
        <NavLink
          to="/explore"
          className={({ isActive }) => handleActiveLink(isActive, "explore")}
        >
          {activeLink === "explore" ? (
            <img src={Explore2} alt="explore" width={33} />
          ) : (
            <img src={Explore} alt="explore" width={33} />
          )}
        </NavLink>
      </div>

      <div className="" onClick={onClick}>
      <svg width={24} height={26} viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width={24} height={26} rx={4} fill="url(#paint0_linear_3799_23745)" />
        <path d="M12 8V13M12 13V18M12 13H17M12 13H7" stroke="#262E31" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        <defs>
          <linearGradient id="paint0_linear_3799_23745" x1="0.514286" y1="6.39345" x2="24.2523" y2="6.89869" gradientUnits="userSpaceOnUse">
            <stop offset="0.452889" stopColor="#FE9730" />
            <stop offset={1} stopColor="#FB5046" />
          </linearGradient>
        </defs>
      </svg>
      </div>
      <div id={activeLink === "chat" ? "active" : ""}>
        <NavLink
          to="/chat"
          className={({ isActive }) => handleActiveLink(isActive, "chat")}
        >
          {activeLink === "chat" ? (
            <img src={Msg2} alt="chat_icon" width={33} />
          ) : (
            <img src={Msg} alt="chat_icon" width={33} />
          )}
        </NavLink>
      </div>
      <div id={activeLink === "bell" ? "active" : ""}>
        <NavLink
          to="/notifications"
          className={({ isActive }) => handleActiveLink(isActive, "bell")}
        >
          {activeLink === "bell" ? (
            <img src={Bell2} alt="bell" width={33} />
          ) : (
            <img src={Bell} alt="bell" width={33} />
          )}

          {/* <img src={Bell} alt="bell" width={33} /> */}
        </NavLink>
      </div>
    </FooterStyle>
  );
}
