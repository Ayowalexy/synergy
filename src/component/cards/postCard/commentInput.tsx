import React, { ChangeEventHandler, useRef, useState } from "react";
import Profile from "../../../assets/svgs/home/profile.svg";
import ImageIcon from "../../../assets/svgs/others/img.svg";
import LinkIcon from "../../../assets/svgs/others/linkk.svg";
import {
  BtnMidContain,
  ButtonHighlight,
} from "../../../styles/components/Button";
import { InputContainer, SmInputContainer } from "./style";
import { VscSmiley } from "react-icons/vsc";
import { ICardDetails } from "../../../types/card";
import { useAppDispatch } from "../../../redux/store";
import { v4 } from "uuid";
import { setComment } from "../../../redux/posts/postsSlice";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as lodash from "lodash";
import { devNull } from "os";
import { clearInput } from "../../../utils/commonHelpers";

interface Props {
  postId: string;
}
export default function CommentInput({ postId }: Props) {
  const matches = useMediaQuery("(max-width:600px)"); //hook to control component to render wrt viewport

  const [text, setText] = useState("");
  const dispatch = useAppDispatch();

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = () => {
    dispatch(
      setComment({
        postId,
        comment: {
          id: v4(),
          like: "nil",
          text: text,
        },
      })
    );
    clearInput(inputRef);
    // setText("");
  };

  return (
    <>
      {!matches ? (
        <InputContainer>
          <div className="input-container">
            <div className="avi">
              <img src={Profile} alt="profile" width={35} />
            </div>
            <div>
              <input
                type="text"
                placeholder="Comment to this..."
                onChange={(e) => setText(e.target.value)}
              />
            </div>
          </div>
          <div className="action-icons">
            <div>
              <img src={ImageIcon} alt="img icon" width={18} />
            </div>
            <div>
              <VscSmiley fontSize={23} color="white" />
            </div>
            <div>
              <BtnMidContain padding="6% 34px" onClick={handleSubmit}>
                Post
              </BtnMidContain>
            </div>
          </div>
        </InputContainer>
      ) : (
        <SmInputContainer>
          <div className="input-container">
            <div className="avi">
              <img src={Profile} alt="profile" width={35} />
            </div>
            <div>
              <input
                type="text"
                placeholder="Comment to this..."
                onChange={(e) => setText(e.target.value)}
                ref={inputRef}
              />
            </div>
          </div>
          {!lodash.isEmpty(text) ? (
            <div className="icons">
              <div className="left">
                <div>
                  {" "}
                  <img src={ImageIcon} alt="img icon" width={18} />{" "}
                </div>
                <div>
                  {" "}
                  <img src={LinkIcon} alt="img icon" width={18} />
                </div>
              </div>
              <div onClick={handleSubmit} className="post">
                Post
              </div>
            </div>
          ) : (
            ""
          )}
        </SmInputContainer>
      )}
    </>
  );
}
