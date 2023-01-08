import React, { useState } from "react";
import ImageIcon from "../../assets/svgs/home/image.svg";
import Profile from "../../assets/svgs/home/profile.svg";
import LinkIcon from "../../assets/svgs/home/link.svg";
import { VscSmiley } from "react-icons/vsc";
import { ButtonHighlight } from "../../styles/components/Button";
import {
  CommentThreadStyle,
  InputContainer,
  SmInput,
} from "../../styles/pages/CommentThreadStyles";
import useMediaQuery from "@mui/material/useMediaQuery";

interface Props {
  onChange: React.ChangeEventHandler<HTMLInputElement> &
    React.ChangeEventHandler<HTMLTextAreaElement>;
  restDisplay: boolean;
  onClick: React.MouseEventHandler<HTMLDivElement> &
    React.MouseEventHandler<HTMLButtonElement>;
}
export default function commentInput({
  onChange,
  restDisplay,
  onClick,
}: Props) {
  const matches = useMediaQuery("(max-width:600px)");

  return (
    <>
      {matches ? (
        <SmInput>
          <div className="top">
            <div className="inp_cont">
              <div className="avi">
                <img src={Profile} alt="profile" width={26} />
              </div>
              <div>
                <div>
                  <textarea placeholder="Comment..." onChange={onChange} />{" "}
                </div>
                <div onClick={onClick}> Post</div>
              </div>
            </div>
          </div>
          {restDisplay ? (
            <div className="btm">
              <div>
                <img src={ImageIcon} alt="img icon" width={18} />
              </div>
              <div>
                <img src={LinkIcon} alt="link icon" width={18} />
              </div>
            </div>
          ) : (
            ""
          )}
        </SmInput>
      ) : (
        <InputContainer>
          <div className="top">
            <div className="avi">
              <img src={Profile} alt="profile" width={35} />
            </div>
            <div>
              <textarea placeholder="Comment" onChange={onChange} />{" "}
            </div>
          </div>
          <hr />
          <div className="action-icons">
            <div>
              <img src={ImageIcon} alt="img icon" width={25} />
            </div>
            <div>
              <VscSmiley fontSize={23} color="white" />
            </div>
            <div>
              <ButtonHighlight padding="5% 30px" onClick={onClick}>
                Post
              </ButtonHighlight>
            </div>
          </div>
        </InputContainer>
      )}
    </>
  );
}
