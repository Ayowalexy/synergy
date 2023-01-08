import React, { useState } from "react";

import Logo from "../../assets/svgs/others/sylogo.svg";
import Ytlogo from "../../assets/pngs/home/logo.png";

import Home from "../../assets/svgs/home/home.svg";

import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";

import { BtnMidContain, BtnMidOutline } from "../../styles/components/Button";
import { LandingPageNav } from "../../component/navbar/style";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Navbar() {
  const matches = useMediaQuery("(max-width:600px)");

  const [expand, setExpand] = useState(false);
  const toggleNav = () => {
    setExpand(!expand);
  };

  return (
    <LandingPageNav display={!expand ? "none" : "block"}>
      <div className="nav">
        <div className="logo">
          <img src={Ytlogo} alt="synergy_logo" />
        </div>
        <div className="ham" onClick={toggleNav}>
          {" "}
          {expand ? (
            <svg
              width={20}
              height={14}
              viewBox="0 0 20 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width={20}
                height={2}
                rx={1}
                fill="url(#paint0_linear_3205_29785)"
              />
              <rect
                y={6}
                width={20}
                height={2}
                rx={1}
                fill="url(#paint1_linear_3205_29785)"
              />
              <rect
                y={12}
                width={20}
                height={2}
                rx={1}
                fill="url(#paint2_linear_3205_29785)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_3205_29785"
                  x1="0.428571"
                  y1="0.491804"
                  x2="19.2202"
                  y2="4.82474"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.452889" stopColor="#FE9730" />
                  <stop offset={1} stopColor="#FB5046" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_3205_29785"
                  x1="0.428571"
                  y1="6.4918"
                  x2="19.2202"
                  y2="10.8247"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.452889" stopColor="#FE9730" />
                  <stop offset={1} stopColor="#FB5046" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_3205_29785"
                  x1="0.428571"
                  y1="12.4918"
                  x2="19.2202"
                  y2="16.8247"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.452889" stopColor="#FE9730" />
                  <stop offset={1} stopColor="#FB5046" />
                </linearGradient>
              </defs>
            </svg>
          ) : (
            <svg
              width={20}
              height={14}
              viewBox="0 0 20 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width={20}
                height={2}
                rx={1}
                fill="url(#paint0_linear_3205_29785)"
              />
              <rect
                y={6}
                width={20}
                height={2}
                rx={1}
                fill="url(#paint1_linear_3205_29785)"
              />
              <rect
                y={12}
                width={20}
                height={2}
                rx={1}
                fill="url(#paint2_linear_3205_29785)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_3205_29785"
                  x1="0.428571"
                  y1="0.491804"
                  x2="19.2202"
                  y2="4.82474"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.452889" stopColor="#FE9730" />
                  <stop offset={1} stopColor="#FB5046" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_3205_29785"
                  x1="0.428571"
                  y1="6.4918"
                  x2="19.2202"
                  y2="10.8247"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.452889" stopColor="#FE9730" />
                  <stop offset={1} stopColor="#FB5046" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_3205_29785"
                  x1="0.428571"
                  y1="12.4918"
                  x2="19.2202"
                  y2="16.8247"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.452889" stopColor="#FE9730" />
                  <stop offset={1} stopColor="#FB5046" />
                </linearGradient>
              </defs>
            </svg>
          )}
        </div>
        <div className="home">
          <div className="hicon">
            <img src={Home} alt="home" width={33} />
          </div>
          <div className="dash"></div>
        </div>
        <div
          className={!expand ? "flex" : "flex trans"}
          id={!expand ? "" : "trans"}
        >
          <div className="list sm" style={{ marginBottom: 20 }}>
            <Link
              to="/aboutus"
              className="aboutText"
              style={{
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "25px",
                marginTop: "5%" /* identical to box height */,
                fontFamily: "Montserrat",
                whiteSpace: "nowrap",
                textDecoration: "none",
                marginBottom: "20px",

                /* Text Colors/White */

                color: "rgb(237 120 51)",
              }}
            >
              About Synergy
            </Link>
          </div>
          <div className="list">
            <BtnMidOutline border={true}>
              <Link to="/signin">Sign In</Link>
            </BtnMidOutline>{" "}
          </div>

          <div className="list">
            <BtnMidContain padding="9% 30px">
              <Link to="/signup">Join Us</Link>
            </BtnMidContain>{" "}
          </div>
        </div>
      </div>
    </LandingPageNav>
  );
}
