import React, { useState } from "react";
import { HeaderContainer } from "../../header/style";
import { Container, SmContainer } from "./style";
import { AiOutlineClose } from "react-icons/ai";
import Profile from "../../../assets/svgs/home/profile.svg";
import ImageIcon from "../../../assets/svgs/home/image.svg";
import LinkIcon from "../../../assets/svgs/others/link2.svg";
import VideoIcon from "../../../assets/svgs/others/video.svg";

import {
  BtnMidContain,
  BtnMidOutline,
} from "../../../styles/components/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ICardDetails } from "../../../types/card";
import { v4 } from "uuid";
import { useAppDispatch } from "../../../redux/store";
import { setPost } from "../../../redux/posts/postsSlice";

interface Props {
  toggleCard: React.MouseEventHandler<HTMLDivElement>;

  setPostTyping: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function CreatePostCard({
  toggleCard,

  setPostTyping,
}: Props) {
  const dispatch = useAppDispatch();
  const matches = useMediaQuery("(max-width:600px)");
  const [cardDetail, setCardDetail] = useState({
    title: "",
    comment: "",
    like: "nil",
    id: v4(),
    open: false,
    comments: [],
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> &
      React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setCardDetail({
      ...cardDetail,
      [name]: value,
    });
    console.log(name, value, "hey");
  };

  const handleSubmit = () => {
    dispatch(setPost(cardDetail));
    setPostTyping(false);
    // console.log(cardDetail);
  };
  return (
    <>
      {matches ? (
        <SmContainer>
          <div className="top">
            <div onClick={toggleCard}>
              <AiOutlineClose fontSize={"1.3rem"} color={"#fff"} />
            </div>
            <div
               style={{
                opacity: cardDetail?.comment?.length == 0 ? 0 : 1
              }}
            >
              <BtnMidContain padding="8% 35px" onClick={handleSubmit}>
                Post
              </BtnMidContain>
            </div>
          </div>
          <div className="rest">
            <div className="title">
              <div className="avi">
                <img src={Profile} alt="profile" width={26} />
              </div>
              <div className="inp">
                <input
                  type={"text"}
                  placeholder="Title (optional)"
                  name="title"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="content">
              <textarea
                style={{outline: 'none'}}
                placeholder="What’s on your mind Tosin ?"
                name="comment"
                onChange={handleChange}
              />
            </div>
            <div className="foot">
              <div>
                <img src={ImageIcon} alt="img icon" width={20} />
              </div>
              {/* <div>
                <img src={VideoIcon} alt="img icon" width={20} />
              </div> */}
              <div>
                <img src={LinkIcon} alt="link icon" width={20} />
              </div>
            </div>
          </div>
        </SmContainer>
      ) : (
        <Container>
          <div className="nav">
            <div className="left">
              <div className="avi">
                <img src={Profile} alt="profile" />
              </div>
              <div>Create a Post</div>
            </div>
            <div className="action-icons">
              <div className="cancel" onClick={toggleCard}>
                <AiOutlineClose fontSize={"1.3rem"} color={"#fff"} />
              </div>
            </div>
          </div>
          <div className="rest">
            <div className="text__">
              <div className="title">
                <input
                  type={"text"}
                  placeholder="Title (optional)"
                  name="title"
                  onChange={handleChange}
                />
              </div>
              <div className="title__">
                {cardDetail?.comment?.length}/75
              </div>

            </div>
            <div className="content">
              <textarea
                placeholder="What’s on your mind Tosin ?"
                name="comment"
                style={{outline: 'none'}}
                onChange={(e: any) => {
                  if(cardDetail?.comment?.length >= 75){
                    e.preventDefault();
                  } else {
                    handleChange(e);
                  }
                }}
              />
            </div>
            <div className="foot">
              <div className="icons">
                <div>
                  <img src={ImageIcon} alt="img icon" width={30} />
                </div>
                <div>
                  <img src={LinkIcon} alt="link icon" width={25} />
                </div>
              </div>
              <div className="btns">
                <div>
                  {/* <BtnMidOutline padding="7% 0%">Save Draft</BtnMidOutline> */}
                </div>
                <div
                  style={{
                    opacity: cardDetail?.comment?.length == 0 ? 0 : 1
                  }}
                >
                  <BtnMidContain padding="9% 0px" onClick={handleSubmit}>
                    Post
                  </BtnMidContain>
                </div>
              </div>
            </div>
          </div>
        </Container>
      )}
    </>
  );
}
