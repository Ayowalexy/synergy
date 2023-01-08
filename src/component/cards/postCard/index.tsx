import React, { useState } from "react";
import { MidCardRegular } from "../../../styles/components/MidCardRegular";
import axios from "axios";
import Nolike from "../../../assets/svgs/home/dislike.svg";
import { BsBookmarkFill } from "react-icons/bs";

import Dislike from "../../../assets/svgs/others/dislike.svg";
import Like from "../../../assets/svgs/home/like.svg";
import Like2 from "../../../assets/svgs/home/like2.svg";
import Feed from "../../../assets/svgs/home/feed.svg";
import Saved from "../../../assets/svgs/home/bookmark.svg";
import Send from "../../../assets/svgs/home/send.svg";

import More from "../../../assets/svgs/home/more.svg";
import Nysc from "../../../assets/svgs/home/nysc.svg";
import More_ from "../../../assets/svgs/others/more_.svg";
import Flag from "../../../assets/svgs/others/flag.svg";
import Verified from "../../../assets/svgs/home/verified.svg";

import Comment from "../../../assets/svgs/home/sms.svg";
import Debo from "../../../assets/pngs/home/debo.png";
import { CommentContainer, PostCardContainer } from "./style";
import CommentInput from "./commentInput";
import { Link } from "react-router-dom";
import Activity from "../../../routes/commentThread/Activity";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import LikeBtn from "../../like/likeBtn";
import Girl from "../../../assets/jpgs/home/girl.jpg";
import Boy from "../../../assets/jpgs/home/boy.jpg";
import {
  setCommentDislike,
  setPostDislike,
  setPostLike,
  setPosts,
  setSave,
  setCommentLike,
  setCommentDisplay,
  setFlagDisplay,
} from "../../../redux/posts/postsSlice";
import SlideShow from "../../carousel";
import { colors } from "../../../styles/colors";

const LikeBtnStyles = styled.div`
  width: 100px;
  height: 100px;
  background: url("https://cssanimation.rocks/images/posts/steps/heart.png")
    no-repeat;
  background-position: 0 0;
  cursor: pointer;
  transition: background-position 1s steps(28);
  transition-duration: 0s;

  &.is-active {
    transition-duration: 1s;
    background-position: -2800px 0;
  }

  body {
    background: #000000;
  }

  .placement {
    // position: fixed;
    // top: 50%;
    // left: 50%;
    transform: scale(0.7);
  }
`;

export default function PostCard() {
  const dispatch = useAppDispatch();
  const [isClick, setClick] = useState(false);
  const { posts } = useAppSelector(({ posts }) => posts);

  const toggleCommentDisplay = (id: string) => {
    dispatch(setCommentDisplay(id));
  };

  console.log(posts, "commentDetails");

  const toggleLike = (id: string) => {
    dispatch(setPostLike(id));
  };
  const toggleSave = (id: number) => {
    dispatch(setSave(id));
  };

  const toggleFlagDisplay = (index: number) => {
    dispatch(setFlagDisplay(index));
  };

  const toggleDisLike = (id: string) => {
    dispatch(setPostDislike(id));
  };
  const toggleCommentLike = (id: string, postId: string) => {
    dispatch(setCommentLike({ id, postId }));
  };
  const toggleCommentDisLike = (id: string, postId: string) => {
    dispatch(setCommentDislike({ id, postId }));
  };

  const [flag, setFlag] = useState(false);

  const handlebtnClick = () => {
    const btn = document.querySelector(".heart");
    btn?.classList.toggle("is-active");
  };

  return (
    <div>
      {posts?.map((detail, i) => (
        <PostCardContainer key={i}>
          <MidCardRegular>
            <div className="head">
              <Link to="/user/profile">
                <div className="identity">
                  <div>
                    <img src={Debo} alt="debo" />
                  </div>
                  <div className="name">
                    <h4>
                      <small style={{ fontSize: 16 }}>Debo Ade</small>
                      <img style={{ marginLeft: "2%" }} src={Nysc} alt="debo" />
                      {i == 2 ? (
                        <img
                          style={{ marginLeft: "2%" }}
                          src={Verified}
                          alt="debo"
                        />
                      ) : null}
                    </h4>
                    <p>
                      <small style={{ fontSize: 14 }}>Youth Corper</small>
                      <small
                        style={{
                          color: colors.textGrey3,
                          marginTop: "-3px",
                        }}
                      >
                        .
                      </small>
                      <small
                        style={{
                          color: colors.textGrey3,
                          fontSize: " 12px",
                          marginTop: " 1px",
                        }}
                      >
                        1m
                      </small>
                    </p>
                  </div>
                </div>
              </Link>

              <div style={{ marginRight: "1%" }} className="more_popup">
                <img
                  src={More}
                  alt="more"
                  onClick={() => toggleFlagDisplay(i)}
                />
                {detail.flag && (
                  <>
                    <div
                      className="overlay"
                      onClick={() => toggleFlagDisplay(i)}
                    ></div>
                    <div className="flag">
                      <div>
                        <img src={Flag} alt="flag" />
                      </div>
                      <div>Report Post</div>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="text">
              <h3>{detail.title}</h3>
              <p>{detail.comment}</p>
            </div>
            {detail.img && (
              <div>
                <SlideShow slides={detail.img} />
                {/* <br /> */}
              </div>
            )}
            <div className="foot">
              <div className="liker" onClick={() => toggleLike(detail.id)}>
                  {/* <LikeBtnStyles onClick={handlebtnClick} className="heart"> */}
                    {/* {detail.like === "like" ? (
                    <img src={Like} alt="nolike" width={19} />
                  ) : (
                    <img src={Like2} alt="nolike" width={19} />
                  )} */}
                  {/* </LikeBtnStyles> */}
                  <LikeBtn />
                <div>
                  <small>20</small>
                </div>
              </div>

              <div
                className="comment"
                onClick={() => toggleCommentDisplay(detail.id)}
              >
                <div>
                  <img src={Comment} alt="comment" width={20} />
                </div>
                <div>12</div>
              </div>

              <div className="send">
                <img src={Send} alt="nolike" width={16.9} />
              </div>

              <div className="right">
                <div onClick={() => toggleSave(i)}>
                  {detail.save ? (
                    // <img src={Saved} alt="feed" width={19} />
                    <BsBookmarkFill fill="#3DD368" />
                  ) : (
                    // <img src={Feed} alt="feed" width={15} />
                    <BsBookmarkFill
                      fill="#012B37"
                      stroke="#fff"
                      strokeWidth={1}
                    />
                  )}
                </div>
              </div>
            </div>
            {detail.open && <div className="mb-t" />}
          </MidCardRegular>

          {detail.open ? (
            <div className="rest">
              {/* <h4>Top Comments</h4> */}
              {detail.comments &&
                detail.comments.map((comment, index) => (
                  <CommentContainer key={index}>
                    <div className="head">
                      <div className="identity">
                        <div>
                          <img src={Debo} alt="debo" />
                        </div>
                        <div className="name">
                          <h4>Hauwa Ahmed</h4>
                          <p style={{ paddingTop: 10 }}>Recent Graduate</p>
                        </div>
                      </div>

                      <div style={{ marginRight: 10 }}>
                        <img src={More_} alt="more " />
                      </div>
                    </div>
                    <div className="text" style={{ paddingTop: 10 }}>
                      <p>{comment.text}</p>
                    </div>
                    <div className="foot" style={{ marginTop: -20 }}>
                      <Activity
                        stats={{
                          likes: 31,
                          reply: 12,
                          send: null,
                          bookmark: null,
                        }}
                      />
                    </div>
                  </CommentContainer>
                ))}
              <CommentInput postId={detail.id} />

              <h5>
                <Link to={`comment?id=${detail.id}`}>View all comments</Link>{" "}
              </h5>
            </div>
          ) : (
            ""
          )}
        </PostCardContainer>
      ))}
    </div>
  );
}
