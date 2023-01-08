import React from "react";
import { MdExpandMore } from "react-icons/md";
import { BiArrowBack } from "react-icons/bi";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import { CgMoreAlt } from "react-icons/cg";
import { Link } from "react-router-dom";

const NavStyle = styled.div`
  height: 38px;
  left: 0px;
  top: 38px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2%;
  color: ${colors.white};
  a {
    color: ${colors.white};
  }

  /* Synergy Colors/Teal 2 */

  background-color: ${colors.darkGreen};
  .profile {
    color: #fff;
    font-size: 18;
    font-weight: 600;
    font-family: Montserrat;
  }
`;
export default function Nav() {
  return (
    <div
      style={{
        position: 'fixed',
        width: '100%',
        zIndex: 100
      }}
    >
      <NavStyle>
        <Link to="/feed">
          <div>
            <BiArrowBack fontSize={24} />
          </div>
        </Link>
        <div className="profile_">Profile</div>
        <div>
          <CgMoreAlt fontSize={22} />
        </div>
      </NavStyle>
    </div>
  );
}
