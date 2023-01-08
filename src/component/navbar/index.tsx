import React, { ChangeEventHandler, useEffect, useState } from "react";
import { Nav, SmNav } from "./style";
import Logo from "../../assets/svgs/home/logo.svg";
import Bell from "../../assets/svgs/home/bell.svg";
import Bell2 from "../../assets/svgs/home/bell2.svg";

import Explore from "../../assets/svgs/home/explore.svg";
import Explore2 from "../../assets/svgs/home/explore2.svg";
import Msg from "../../assets/svgs/home/msg.svg";
import Job from "../../assets/svgs/home/brief.svg";
import Job_1 from "../../assets/svgs/home/brief_2.svg";

import Msg2 from "../../assets/svgs/home/msg2.svg";
import Settings from "../../assets/svgs/home/settings.svg";
import Home from "../../assets/svgs/home/home.svg";
import Homen from "../../assets/svgs/home/homenn.svg";

import Profile from "../../assets/svgs/home/profile.svg";
import * as lodash from "lodash";
import { FaRegCommentDots } from "react-icons/fa";
import { VscBell } from "react-icons/vsc";
import Search from "./search";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link, NavLink } from "react-router-dom";
import SmSearchList from "./smSearchList";
import BasicModal from "../modals/BasicModal";
import ProfileCard from "../cards/profileCard";
import ProfilePopup from "../cards/modalCards/profile/Profile";
import { useDispatch } from "react-redux";
import { toggleSearch } from "../../redux/nav/navSlice";
import { useSelector } from "react-redux";
import { useAppSelector } from "../../redux/store";

interface Props {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}
export default function Navbar({ onClick }: Props) {
  const matches = useMediaQuery("(max-width:600px)");
  const [search, setSearch] = useState("");
  const [display, setDisplay] = useState(false);
  const [smSearch, setSmSearch] = useState(false);
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [activeLink, setActiveLink] = useState<
    "feed" | "explore" | "chat" | "bell"
  >("feed");

  //handle style and appearance of active links
  const handleActiveLink = (
    active: boolean,
    link: "feed" | "explore" | "chat" | "bell"
  ) => {
    if (active === true) {
      setActiveLink(link);
      return "active-link";
    }
  };
  const handleSearchListDisplay = () => {
    if (!lodash.isEmpty(search)) {
      setDisplay(true);
    } else {
      setDisplay(false);
    }
    // console.log(lodash.isEmpty(search));
  };

  useEffect(() => {
    handleSearchListDisplay();
  }, [search]);

  const handleMobileSearchDisplay = () => {
    dispatch(toggleSearch());
  };

  //for mobile searchList
  const smSearchDisplay = useAppSelector((state) => state.nav);

  return (
    <>
      {/* profile Modal */}
      <BasicModal
        width={matches ? "65%" : "20%"}
        top="18rem"
        left={matches ? "65%" : "80%"}
        open={openModal}
        setOpen={setOpenModal}
        rounded={matches ? " 0px 0px 0px 40px" : ""}
      >
        <ProfilePopup onClick={() => setOpenModal(false)} />
      </BasicModal>
      {matches ? (
        //mobile navbar
        smSearchDisplay.search ? (
          <SmSearchList onClick={handleMobileSearchDisplay} /> //display searchlist for mobile view
        ) : (
          <SmNav>
            <div className="logo">
              <Link to="/jobs">
                {matches ? (
                  <img src={Job_1} alt="Job" />
                ) : (
                  <img src={Job} alt="Job" />
                )}
              </Link>
            </div>
            <div
              className="search-container"
              onClick={handleMobileSearchDisplay}
            >
              <Search searchListDisplay={display} />
            </div>
            {/* <div className="logo">
              <Link to="/jobs">
                <img src={Job} alt="Job" />
              </Link>
            </div> */}
            <div className="avi" onClick={() => setOpenModal(true)}>
              <img src={Profile} alt="profile" width={28} />
            </div>
          </SmNav>
        )
      ) : (
        //desktop navbar
        <Nav>
          <div className="logo">
            <Link to="/feed">
              <img src={Logo} alt="synergy.ng" />
            </Link>
          </div>
          <div className="search-container">
            <Search
              onChange={(e) => setSearch(e.target.value)}
              searchListDisplay={display}
            />
          </div>
          <div className="icons-container">
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
                className={({ isActive }) =>
                  handleActiveLink(isActive, "explore")
                }
              >
                {activeLink === "explore" ? (
                  <img src={Explore2} alt="explore" width={33} />
                ) : (
                  <img src={Explore} alt="explore" width={33} />
                )}
              </NavLink>
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
              </NavLink>
            </div>
            <div className="line"></div>
            <div className="job">
              <NavLink to="/jobs">
                <img src={Job} alt="job" width={40} />
              </NavLink>
            </div>
          </div>
          <div className="avi" onClick={() => setOpenModal(true)}>
            <img src={Profile} alt="profile" width={42} />
          </div>
        </Nav>
      )}
    </>
  );
}
