import React, { ReactNode } from "react";
import { BtnMidContain } from "../../../styles/components/Button";
import { FollowCardContainer } from "./style";
import Profile from "../../../assets/pngs/others/profile.png";
interface IfollowCard {
  children?: JSX.Element;
  btn?: JSX.Element;
  name?: string;
  status?: string;
}
export default function FollowCard({
  children,
  btn,
  name,
  status,
}: IfollowCard) {
  return (
    <FollowCardContainer>
      <div className="left">
        <div className="circle">
          {children}
          {/* <img src={Profile} alt="profile" /> */}
        </div>
        <div className="text">
          <div>
            <h4>{name}</h4>
            <p>{status}</p>
          </div>
        </div>
      </div>
      <div className="btns">
        {btn}
        {/* <BtnMidContain padding="5% 30px"> Follow</BtnMidContain> */}
      </div>
    </FollowCardContainer>
  );
}
