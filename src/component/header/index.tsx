import React, { ChangeEventHandler, MouseEventHandler, useState } from "react";
import Profile from "../../assets/svgs/home/profile.svg";
import ImageIcon from "../../assets/svgs/home/image.svg";
import LinkIcon from "../../assets/svgs/others/link2.svg";
import { HeaderContainer } from "./style";
import { BtnMidContain, ButtonHighlight } from "../../styles/components/Button";
import { useSearchParams } from "react-router-dom";

interface IheaderProps {
  onClick: MouseEventHandler<HTMLDivElement>;
}
export default function Header({ onClick }: IheaderProps) {
  const query = useSearchParams();
  console.log(query, "query");
  return (
    <HeaderContainer>
      <div className="input-container">
        <div className="avi">
          <img src={Profile} alt="profile" width={38} />
        </div>
        <div onClick={onClick}>
          <input type="text" placeholder="What’s up Tosin ?" />
        </div>
      </div>
      <div className="action-icons">
        <div>
          <img src={ImageIcon} alt="img icon" width={25} />
        </div>
        <div>
          <img src={LinkIcon} alt="link icon" width={23} />
        </div>
        <div>
          <BtnMidContain padding="5% 34px">Post</BtnMidContain>
        </div>
      </div>
    </HeaderContainer>
  );
}
