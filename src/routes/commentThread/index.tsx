import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import PostCard from "../../component/cards/postCard";
import Navbar from "../../component/navbar";
import { ListCard } from "../../styles/components/ListCard";
import { HomeContainer } from "../../styles/HomeStyles";
import { BsArrowLeftShort } from "react-icons/bs";
import Activity from "./Activity";
import Nysc from "../../assets/svgs/others/nysc.svg";
import TopMembersCard from "../../component/cards/topMembersCard";
import {
  PostCardContainer,
  CommentContainer,
} from "../../component/cards/postCard/style";
import Flex, { Text } from "../../styles/pages/Flex";
import { MidCardRegular } from "../../styles/components/MidCardRegular";
import CommentInput from "./commentInput";
import Like from "../../assets/svgs/home/like.svg";
import Nolike from "../../assets/svgs/home/nolike.svg";
import Feed from "../../assets/svgs/home/feed.svg";
import More from "../../assets/svgs/home/more.svg";
import Comment from "../../assets/svgs/home/comment.svg";
import Debo from "../../assets/pngs/home/debo.png";
import Bello from "../../assets/pngs/others/Bello.png";
import Marvis from "../../assets/pngs/others/Marvis.png";
import Tega from "../../assets/pngs/others/Tega.png";
import { CommentThreadStyle } from "../../styles/pages/CommentThreadStyles";
import { SmCard } from "../../styles/components/SmCard";
import Ig from "../../assets/svgs/home/ig.svg";
import Fb from "../../assets/svgs/home/facebk.svg";
import Twitter from "../../assets/svgs/home/twitter.svg";
import LinkedIn from "../../assets/svgs/home/linkedin.svg";
import Right from "../../assets/svgs/home/arrow_right.svg";
import Arrow_up from "../../assets/svgs/home/arrow_up.svg";
import Cancel from "../../assets/svgs/home/cancel.svg";
import AddUser from "../../assets/svgs/home/adduser.svg";
import AddedUser from "../../assets/svgs/home/addeduser.svg";
import Flame from "../../assets/svgs/home/flame.svg";
import Footer from "../../component/footer";
import * as lodash from "lodash";
import { ICardDetails } from "../../types/card";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import {
  setComment,
  setCommentDislike,
  setCommentLike,
  setPostDislike,
  setPostLike,
} from "../../redux/posts/postsSlice";
import Postcard from "../../assets/svgs/others/postcard.svg";
import Send from "../../assets/svgs/others/send.svg";
import Reply from "../../assets/svgs/others/reply.svg";
import { v4 } from "uuid";
import Dislike from "../../assets/svgs/others/dislike.svg";
import SlideShow from "../../component/carousel";

export default function CommentThread() {
  const smSearchDisplay = useAppSelector((state) => state.nav);

  const [searchParams] = useSearchParams();
  const [inputDisplay, setInputDisplay] = useState(false);
  const handleInputDisplay = () => {
    setInputDisplay(!inputDisplay);
  };
  const [text, setText] = useState("");
  const [commentRestDisplay, setCommentRestDisplay] = useState(false);
  const queryId = searchParams.get("id");

  const dispatch = useAppDispatch();
  const { posts } = useAppSelector(({ posts }) => posts);
  const [postCard, setPostCard] = useState<ICardDetails>(
    posts.filter((item) => item.id === queryId)[0]
  );
  useEffect(() => {
    if (!lodash.isEmpty(text)) {
      setCommentRestDisplay(true);
    } else {
      setCommentRestDisplay(false);
    }
  }, [text]);

  const handleSubmit = () => {
    dispatch(
      setComment({ postId: queryId, comment: { text, id: v4(), like: "nil" } })
    );

    setInputDisplay(false);
  };
  useEffect(() => {
    setPostCard(posts.filter((item) => item.id === queryId)[0]);
  }, [posts]);

  const toggleLike = (id: string) => {
    dispatch(setPostLike(id));
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

  return (
    <>
      <Navbar />
      {smSearchDisplay.search ? (
        ""
      ) : (
        <CommentThreadStyle>
          <HomeContainer>
            <div />
            <div className="main-section">
              <Link to="/feed">
                <BsArrowLeftShort
                  color="white"
                  fontSize={36}
                  className="back"
                />
              </Link>
              <PostCardContainer>
                <MidCardRegular>
                  <div className="head">
                    <div className="identity">
                      <div>
                        <img src={Debo} alt="debo" />
                      </div>
                      <div className="name">
                        <h4>Debo Ade</h4>
                        <p className="sub_text" style={{ paddingTop: 10 }}>
                          Product Manager
                          <span className="time">25m</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text">
                    <h3>{postCard.title}</h3>
                    {/* <p>{postCard.comment}</p> */}
                    <p>
                      So nervous about NYSC. I have never been to Gombe before,
                      but I feel better with Synergy.
                    </p>
                  </div>
                  {postCard.img && (
                    <div>
                      <SlideShow slides={postCard.img} />
                      <br />
                    </div>
                  )}
                  <div className="foot">
                    <Activity
                      type="top_comment"
                      stats={{
                        likes: 31,
                        reply: 12,
                        send: null,
                        bookmark: null,
                      }}
                    />
                  </div>
                </MidCardRegular>

                <div className="rest">
                  {!inputDisplay ? (
                    <CommentInput
                      restDisplay={commentRestDisplay}
                      onChange={(e) => {
                        setText(e.target.value);
                        console.log(e.target.value);
                      }}
                      onClick={() => handleSubmit()}
                    />
                  ) : (
                    ""
                  )}
                  <h4>All Comments</h4>
                  {postCard.comments.map((comment, i) => (
                    <CommentContainer key={i}>
                      <div className="head">
                        <div className="identity">
                          <div>
                            <img src={Tega} alt="debo" />
                          </div>
                          <div className="name">
                            <h4>
                              Tega Oteri
                              <img src={Nysc} alt="nysc" />
                            </h4>
                            <p className="sub_text">
                              Aspiring HR Officer
                              <span className="time">20m</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="text">
                        <p>{comment.text}</p>
                      </div>
                      <div className="foot">
                        <Activity
                          filled={true}
                          stats={{
                            likes: 44,
                            reply: null,
                            send: null,
                            bookmark: null,
                          }}
                        />
                      </div>
                    </CommentContainer>
                  ))}

                  <CommentContainer>
                    <div className="head">
                      <div className="identity">
                        <div>
                          <img src={Marvis} alt="debo" />
                        </div>
                        <div className="name">
                          <h4>
                            Marvis Akakari <img src={Nysc} alt="nysc" />
                          </h4>
                          <p className="sub_text">
                            Youth Corper
                            <span className="time">32m</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="text">
                      <p>
                        This is so me, i wonder what i’d have actually done
                        without them, can’t even imagine.
                      </p>
                    </div>
                    <Activity
                      stats={{
                        likes: 36,
                        reply: 6,
                        send: null,
                        bookmark: null,
                      }}
                    />
                  </CommentContainer>
                  <div className="reply">
                    <div className="hook"></div>
                    <CommentContainer id="reply">
                      <div className="head">
                        <div className="identity">
                          <div>
                            <img src={Bello} alt="debo" />
                          </div>
                          <div className="name">
                            <h4>
                              Maryam Bello
                              <img src={Nysc} alt="nysc" />
                            </h4>
                            <p className="sub_text">
                              Youth Corper
                              <span className="time">1hr</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="text">
                        <p>
                          Product Managers, please get in here real quick. What
                          do you
                        </p>
                      </div>
                      <Activity
                        stats={{
                          likes: null,
                          reply: null,
                          send: null,
                          bookmark: null,
                        }}
                      />
                    </CommentContainer>
                  </div>
                  <div className="reply">
                    <div className="hook" id="hook2"></div>
                    <CommentContainer id="reply">
                      <div className="head">
                        <div className="identity">
                          <div>
                            <img src={Bello} alt="debo" />
                          </div>
                          <div className="name">
                            <h4>
                              Wuraola Shobande
                              <img src={Nysc} alt="nysc" />
                            </h4>
                            <p className="sub_text">
                              Youth Corper
                              <span className="time">1hr</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="text">
                        <p>Tbh, glad i didn’t have to worry</p>
                      </div>
                      <Activity
                        stats={{
                          likes: null,
                          reply: null,
                          send: null,
                          bookmark: null,
                        }}
                      />
                    </CommentContainer>
                  </div>
                  <h5>Show all replies</h5>
                  <CommentContainer>
                    <div className="head">
                      <div className="identity">
                        <div>
                          <img src={Bello} alt="debo" />
                        </div>
                        <div className="name">
                          <h4>
                            Favour Ijeh
                            <img src={Nysc} alt="nysc" />
                          </h4>
                          <p className="sub_text">
                            Aspiring Educator
                            <span className="time">2h</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="text">
                      <p>
                        Omo! Do you get? The anxiousness i experienced was
                        really crazy
                      </p>
                    </div>
                    <Activity
                      stats={{
                        likes: null,
                        reply: null,
                        send: null,
                        bookmark: null,
                      }}
                    />
                  </CommentContainer>
                  <CommentContainer>
                    <div className="head">
                      <div className="identity">
                        <div>
                          <img src={Bello} alt="debo" />
                        </div>
                        <div className="name">
                          <h4>
                            Chibuzor Ezeh
                            <img src={Nysc} alt="nysc" />
                          </h4>
                          <p className="sub_text">
                            Tech bro
                            <span className="time">4h</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="text">
                      <p>I can imagine</p>
                    </div>
                    <Activity
                      stats={{
                        likes: null,
                        reply: null,
                        send: null,
                        bookmark: null,
                      }}
                    />
                  </CommentContainer>
                </div>
              </PostCardContainer>
            </div>
          </HomeContainer>
        </CommentThreadStyle>
      )}
      <div>
        {inputDisplay && (
          <CommentInput
            restDisplay={commentRestDisplay}
            onChange={(e) => {
              setText(e.target.value);
              console.log(e.target.value);
            }}
            onClick={() => handleSubmit()}
          />
        )}
      </div>
      {/* <Footer onClick={() => console.log("heyy")} /> */}
    </>
  );
}
