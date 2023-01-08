import React, { useState } from "react";

import Nolike from "../../assets/svgs/home/dislike.svg";
import Like from "../../assets/svgs/home/like.svg";
import Like2 from "../../assets/svgs/home/like2.svg";
import useMediaQuery from "@mui/material/useMediaQuery";
import Dave from "../../assets/pngs/home/dave.png";

import Verified from "../../assets/svgs/home/verified.svg";
import Nysc from "../../assets/svgs/home/nysc.svg";

import Girls from "../../assets/pngs/others/girls.png";

import Feed from "../../assets/svgs/home/feed.svg";
import Saved from "../../assets/svgs/home/saved.svg";
import Send from "../../assets/svgs/home/send.svg";

import More from "../../assets/svgs/home/more.svg";
import Comment from "../../assets/svgs/home/sms.svg";
import Debo from "../../assets/pngs/home/debo.png";
import BigS from "../../assets/svgs/others/bigS.svg";
import Girl from "../../assets/jpgs/home/girl.png";
import People from "../../assets/pngs/others/people.png";

import { dummyPosts } from "../../@fake-db/posts/posts";
import { PostCardContainer } from "../../component/cards/postCard/style";
import {
  MidCardRegular,
  MidCardRegularLP,
} from "../../styles/components/MidCardRegular";
import { Link } from "react-router-dom";
import { colors } from "../../styles/colors";

export default function DummyPostCard() {
  const matches = useMediaQuery("(max-width:600px)");

  return (
    <div>
      <PostCardContainer>
        <MidCardRegularLP>
          <div className="head">
            <div className="identity " id="tities">
              <div id="synergy">
                <img src={BigS} alt="debo" />
              </div>
              <div className="name">
                <h4>
                  <small className="small">Synergy NG</small>
                  {/* <img src={Nysc} alt="debo" /> */}
                  <img src={Verified} alt="debo" />
                </h4>
                <p>
                  <small className="sub-text">The Leading Youth Platform</small>
                </p>
              </div>
            </div>
          </div>
          <div className="text">
            <h3></h3>
            <p>
              Welcome to Synergy, the free, fun and trusted platform to acheive
              your dreams. We are that friend who helps you find the best
              opportunities, valuable connections and all the latest gist.
              <span style={{ fontWeight: 600, color: colors.orange }}>
                {" "}
                <br /> Join the wave!
              </span>
            </p>
          </div>

          <div className="imgcont">
            <img src={Girls} alt="img" />
            <br />
          </div>

          <div className="foot">
            <div className="liker">
              <div>
                <img src={Like} alt="nolike" width={19} />
              </div>
              <div>
                <small>4.8k</small>
              </div>
            </div>

            <div className="comment">
              <div>
                <img src={Comment} alt="comment" width={20} />
              </div>
              <div>362</div>
            </div>

            <div className="send">
              <img src={Send} alt="nolike" width={16.9} />
            </div>

            <div className="right">
              <div>
                <img src={Feed} alt="feed" width={15} />
              </div>
            </div>
          </div>
        </MidCardRegularLP>
      </PostCardContainer>
      {dummyPosts?.map((detail, i) => (
        <PostCardContainer key={i}>
          <MidCardRegularLP>
            <div className="head">
              <div className="identity " id="tities">
                <div>
                  <img src={detail.pfp} alt="debo" />
                </div>
                <div
                  className="name"
                  style={detail.verified == 0 ? { marginTop: "12px" } : {}}
                >
                  <h4
                    style={detail.verified == 0 ? { marginBottom: "13px" } : {}}
                  >
                    <small className="small">{detail.name}</small>
                    {detail.verified == 0 ? (
                      ""
                    ) : detail.verified == 1 ? (
                      <img src={Nysc} alt="debo" />
                    ) : detail.verified == 2 ? (
                      <img src={Verified} alt="debo" />
                    ) : (
                      <>
                        <img src={Nysc} alt="debo" />
                        <img src={Verified} alt="debo" />
                      </>
                    )}
                  </h4>
                  <p>
                    <small className="sub-text">{detail.role}</small>
                  </p>
                </div>
              </div>
            </div>
            <div className="text">
              <h3>{detail.title ? "Achieve Your Full Potential  " : ""}</h3>
              <p>
                {detail.comment}{" "}
                {detail.hash ? (
                  <span
                    style={{
                      color: colors.textGreen,
                    }}
                  >
                    #MySynergy
                  </span>
                ) : (
                  ""
                )}{" "}
              </p>
            </div>
            {detail.img && (
              <div className="imgcont">
                <img src={detail.img} alt="img" />
                <br />
              </div>
            )}

            <div className="foot">
              <div className="liker">
                <div>
                  {detail.like ? (
                    <img src={Like} alt="nolike" width={19} />
                  ) : (
                    <img src={Like2} alt="nolike" width={19} />
                  )}
                </div>
                <div>
                  <small>{detail.likeCount}</small>
                </div>
              </div>

              <div className="comment">
                <div>
                  <img src={Comment} alt="comment" width={20} />
                </div>
                <div>{detail.commentCount}</div>
              </div>

              <div className="send">
                <img src={Send} alt="nolike" width={16.9} />
              </div>

              <div className="right">
                <div>
                  {detail.save ? (
                    <img src={Saved} alt="feed" width={15} />
                  ) : (
                    <img src={Feed} alt="feed" width={15} />
                  )}
                </div>
              </div>
            </div>
          </MidCardRegularLP>
        </PostCardContainer>
      ))}

      <PostCardContainer>
        <MidCardRegularLP>
          <div className="head">
            <div className="identity " id="tities">
              <div id="synergy">
                <img src={BigS} alt="debo" />
              </div>
              <div className="name">
                <h4>
                  <small className="small">Synergy NG</small>
                  {/* <img src={Nysc} alt="debo" /> */}
                  <img src={Verified} alt="debo" />
                </h4>
                <p>
                  <small className="sub-text">The Leading Youth Platform</small>
                </p>
              </div>
            </div>
          </div>
          <div className="text">
            <h3>Synergy is the Future</h3>
            <p>
              Access exclusive opportunities, get informed, enjoy rewards, and
              grow your circle with Synergy. Your dedicated partner for success
            </p>
          </div>

          <div className="imgcont">
            <img src={People} alt="img" />
            <br />
          </div>

          <div className="foot">
            <div className="liker">
              <div>
                <img src={Like} alt="nolike" width={19} />
              </div>
              <div>
                <small>3k</small>
              </div>
            </div>

            <div className="comment">
              <div>
                <img src={Comment} alt="comment" width={20} />
              </div>
              <div>689</div>
            </div>

            <div className="send">
              <img src={Send} alt="nolike" width={16.9} />
            </div>

            <div className="right">
              <div>
                <img src={Saved} alt="feed" width={15} />
              </div>
            </div>
          </div>
        </MidCardRegularLP>
      </PostCardContainer>

      <PostCardContainer>
        <MidCardRegularLP>
          <div className="head">
            <div className="identity " id="tities">
              <div>
                <img src={Dave} alt="dave" />
              </div>
              <div className="name" style={{ marginTop: "12px" }}>
                <h4 style={{ marginBottom: "13px" }}>
                  <small className="small">Aminu Mustapha</small>
                </h4>
                <p>
                  <small className="sub-text">Mechanical Engineer</small>
                </p>
              </div>
            </div>
          </div>
          <div className="text">
            <h3></h3>
            <p>
              The Youth are the most marginalized in society today, with
              millions currently without hope. We need to build our future
              ourselves. Together!
            </p>
          </div>

          {/* <div className="imgcont">
            <img src={Girl} alt="img" />
            <br />
          </div> */}

          <div className="foot">
            <div className="liker">
              <div>
                <img src={Like2} alt="nolike" width={19} />
              </div>
              <div>
                <small>124</small>
              </div>
            </div>

            <div className="comment">
              <div>
                <img src={Comment} alt="comment" width={20} />
              </div>
              <div>32</div>
            </div>

            <div className="send">
              <img src={Send} alt="nolike" width={16.9} />
            </div>

            <div className="right">
              <div>
                <img src={Feed} alt="feed" width={15} />
              </div>
            </div>
          </div>
        </MidCardRegularLP>
      </PostCardContainer>
    </div>
  );
}
