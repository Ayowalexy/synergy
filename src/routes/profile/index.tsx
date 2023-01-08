import React, { useState } from "react";
import Navbar from "../../component/navbar";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlinePlus } from 'react-icons/ai';
import Anon from "../../assets/pngs/others/anon.png";
import More from "../../assets/svgs/others/more3.svg";
import Add from "../../assets/svgs/others/add2.svg";
import Resume from "../../assets/svgs/others/resume.svg";
import PortF from "../../assets/svgs/others/portfolio.svg";
import Bird from "../../assets/svgs/others/bird.svg";
import Quote2 from "../../assets/svgs/others/quote.svg";
import Quote1 from "../../assets/svgs/others/quote1.svg";

import More2 from "../../assets/svgs/others/more.svg";
import Xperience from "../../assets/svgs/others/bag.svg";
import Add_ from "../../assets/svgs/others/add_.svg";

import Soc from "../../assets/svgs/others/soc.svg";
import Cap from "../../assets/svgs/others/cap.svg";
import Cert from "../../assets/svgs/others/cert.svg";
import Send from "../../assets/svgs/home/send.svg";
import Pen from "../../assets/svgs/others/pencil.svg";
import Comments from "../../assets/svgs/home/sms.svg";
import { useNavigate } from "react-router";
import Location from "../../assets/svgs/others/location.svg";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import Plus from "../../assets/svgs/others/plus.svg";
import { BtnMidContain, BtnMidOutline } from "../../styles/components/Button";
import Nolike from "../../assets/svgs/home/dislike.svg";
import Like from "../../assets/svgs/home/like.svg";
import Like2 from "../../assets/svgs/home/like2.svg";
import Verified from "../../assets/svgs/home/verified.svg";
import Debo from "../../assets/pngs/home/pfp_xs.png";
import Avi from "../../assets/pngs/home/pfp_md.png";

import Paystack from "../../assets/pngs/others/paystack.png";
import Bells from "../../assets/pngs/others/bells.png";
import Utiva from "../../assets/pngs/others/utiva.png";

import Gal1 from "../../assets/pngs/others/gal1.png";
import Gal2 from "../../assets/pngs/others/gal2.png";
import Gal3 from "../../assets/pngs/others/gal3.png";
import Gal4 from "../../assets/pngs/others/gal4.png";
import Gal5 from "../../assets/pngs/others/gal5.png";
import Gal6 from "../../assets/pngs/others/gal6.png";

import Feed from "../../assets/svgs/home/feed.svg";

import Pic from '../../assets/svgs/others/pic_1.svg';


import PostCard from "../../component/cards/postCard";
import CenteredTabs from "../../component/tabs";
import { ProfileCard, ProfileStyle } from "../../styles/pages/ProfileStyles";
import { useMediaQuery } from "@mui/material";
import Footer from "../../component/footer";
import { PostCardContainer } from "../../component/cards/postCard/style";
import {
  MidCardRegular,
  MidCardRegularLP,
} from "../../styles/components/MidCardRegular";
import { colors } from "../../styles/colors";
import { useAppSelector } from "../../redux/store";
import { CgMoreAlt } from "react-icons/cg";
import { Slider } from "../../styles/components/Slider";
import { MdExpandMore } from "react-icons/md";
import { BiArrowBack } from "react-icons/bi";
import Nav from "./nav";

export default function Profile() {
  const matches = useMediaQuery("(max-width:600px)"); //hook to control component to render wrt viewport
  const [tabValue, setTabValue] = useState(0);
  const [enableEditing, setEnableEditing] = useState(false)
  const smSearchDisplay = useAppSelector((state) => state.nav);
  const [active, setActive] = useState(true); //state to switch between following and hot tab
  const [emptyState, setEmptyState] = useState(true);
  const navigate = useNavigate();

  return (
    <>
      {matches ? <Nav /> : <Navbar />}

      {/* prevnts the rest of the page from displaying if smSearchDisplay.search from  navbar is true */}
      {smSearchDisplay.search ? (
        ""
      ) : (
        <ProfileStyle display={emptyState}>
          <div className="firsy">
            <div className="top">
              <div className="left">
                <div className="avi">
                  <div style={{marginTop: matches ? 20 : 0}}>
                    {emptyState ? (
                      <img src={Add_}  alt="avi"  />
                    ) : (
                      <img
                        src={Avi}
                        alt="avi"
                        width={136}
                        height={136}
                        style={{ borderRadius: "50%" }}
                      />
                    )}
                  </div>
                </div>
                <div className="title">
                  <h4>Tosin Jegede</h4>

                  <p> {emptyState ? "Add Tagline" : "Product Manager"}</p>
                  <div className="base">
                    <div>
                      <img src={Location} alt="location" />
                    </div>
                    <p>{emptyState ? "Add location" : "Lagos"} </p>
                  </div>
                </div>
              </div>
              <div className="right">
                {emptyState ? (
                  <div className="cont" id="mt_cont">
                    <div className="quote1">
                      {" "}
                      <img src={Quote1} alt="quote" />
                      {/* <RiDoubleQuotesL color="white" fontSize={30} />{" "} */}
                    </div>
                    <div className="quote2">
                      {" "}
                      <img src={Quote2} alt="quote" />
                      {/* <RiDoubleQuotesR color="white" fontSize={30} /> */}
                    </div>

                    <div className="speech bubble">
                      <textarea style={{textAlign: 'center'}} disabled={enableEditing} placeholder="A brief description of yourself"></textarea>
                      {/* <textarea placeholder="Say something about yourself...." /> */}
                    </div>
                  </div>
                ) : (
                  <div className="cont">
                    <div className="quote1">
                      {" "}
                      <RiDoubleQuotesL color="white" fontSize={30} />{" "}
                    </div>
                    <div className="quote2">
                      {" "}
                      <RiDoubleQuotesR color="white" fontSize={30} />
                    </div>

                    <div className="speech bubble">
                      <p>
                        This will contain whatever description Tosin adds here
                        about herself, the words will be limited though so there
                        needs to be a character limit. This is fine.
                        {/* <span>(more)</span> */}
                      </p>
                      {/* <textarea placeholder="Say something about yourself...." /> */}
                    </div>
                  </div>
                )}

                <div className="base-flex">
                  <div className="lft">
                    <h4>2k</h4>
                    <p onClick={() => navigate('/profile/followers')} style={{cursor: 'pointer'}} >Followers</p>
                    <div className="btn">
                      <BtnMidContain onClick={() =>{
                         setEnableEditing(!enableEditing)
                          navigate('/user/edit')
                        }

                      } padding="6% 24px">
                        {" "}
                        Edit Profile
                      </BtnMidContain>
                    </div>
                  </div>
                  <div className="line"></div>
                  <div className="rht">
                    <h4>1.5k</h4>
                    <p onClick={() => navigate('/profile/following')}  style={{cursor: 'pointer'}}>Following</p>
                    <div className="btn">
                      <BtnMidOutline border padding="4.8% 15px">
                        Invite Friends
                      </BtnMidOutline>
                    </div>
                  </div>
                  <div className="more">
                    <img src={More2} alt="more" />
                  </div>
                </div>
              </div>
            </div>

            <div className="inp">
              <div className="inp_title">Interests </div>
              <div className="bord"></div>
              {emptyState ? (
                <div style={{ color: colors.textGrey3 }}>
                  {" "}
                  Add your interests
                </div>
              ) : (
                <div className="skill-cont">
                  <>
                    <div className="skill">Product Analysis</div>
                    <div className="skill">Business</div>{" "}
                    <div className="skill">Web Development</div>
                    <div className="skill">Finance</div>
                  </>
                </div>
              )}
            </div>
            <div className="line"></div>
          </div>

          {/* {matches ? (
            <h3 id="hed"> Highlights</h3>
          ) : (
            <h3 id="hed">My Highlights</h3>
          )}

          <ProfileCard>
            <div className="title">
              <div id="nil">
                <img src={Xperience} alt="experience" />
              </div>
              <div>
                <p>Experience</p>
              </div>

              <div className="add">
                <img src={Add} alt="add" />
              </div>
            </div>
            <div className="card_btm">
              {emptyState ? (
                <div>
                  <small>Add your experience</small>
                </div>
              ) : (
                <>
                  <div className="start">
                    <div>
                      <img src={Paystack} alt="experience" />
                    </div>
                    <div className="textt">
                      <h3>Junior Product Analyst</h3>
                      <h4>Paystack</h4>
                      <p>May 2021 - January 2022</p>
                    </div>
                  </div>
                  <div className="end">
                    <img src={Pen} alt="experience" />
                  </div>
                </>
              )}
            </div>
            {!emptyState ? (
              <div className="extra_">
                <p>More</p>
                <p>
                  <MdExpandMore color={colors.textGrey3} fontSize={20} />{" "}
                </p>
              </div>
            ) : (
              ""
            )}
          </ProfileCard>

          <ProfileCard>
            <div className="title">
              <div>
                <img src={Cap} alt="cap" />
              </div>
              <div>
                <p>Education</p>
              </div>

              <div className="add">
                <img src={Add} alt="add" />
              </div>
            </div>
            <div className="card_btm">
              {emptyState ? (
                <div>
                  <small>Add your education</small>
                </div>
              ) : (
                <>
                  <div className="start">
                    <div>
                      <img src={Bells} alt="experience" />
                    </div>
                    <div className="textt">
                      <h3>B.Sc Microbiology</h3>
                      <h4>Bells University of Technology, Ota, Ogun</h4>
                      <p>M2017-2021</p>
                    </div>
                  </div>
                  <div className="end">
                    <img src={Pen} alt="experience" />
                  </div>
                </>
              )}
            </div>
            {!emptyState ? (
              <div className="extra_">
                <p>More</p>
                <p>
                  <MdExpandMore color={colors.textGrey3} fontSize={20} />{" "}
                </p>
              </div>
            ) : (
              ""
            )}
          </ProfileCard>
          <ProfileCard>
            <div className="title">
              <div>
                <img src={Cert} alt="experience" />
              </div>
              <div>
                <p>Certifications</p>
              </div>

              <div className="add">
                <img src={Add} alt="add" />
              </div>
            </div>
            <div className="card_btm">
              {emptyState ? (
                <div>
                  <small>Add your certifications</small>
                </div>
              ) : (
                <>
                  <div className="start">
                    <div>
                      <img src={Utiva} alt="experience" />
                    </div>
                    <div className="textt">
                      <h3>Product Management</h3>
                      <h4>Utiva, Lagos</h4>
                      <p>January 2022</p>
                    </div>
                  </div>
                  <div className="end">
                    <img src={Pen} alt="experience" />
                  </div>
                </>
              )}
            </div>
            {!emptyState ? (
              <div className="extra_">
                <p>More</p>
                <p>
                  <MdExpandMore color={colors.textGrey3} fontSize={20} />{" "}
                </p>
              </div>
            ) : (
              ""
            )}
          </ProfileCard>

          <ProfileCard id="soc_card">
            <div className="title">
              <div>
                <img src={Soc} alt="experience" />
              </div>
              <div>
                <p>My Links </p>
              </div>

              <div className="add">
                <img src={Add} alt="add" />
              </div>
            </div>

            {emptyState ? (
              <p
                style={{
                  color: colors.textGrey3,
                  fontSize: matches ? "12px" : "14px",
                }}
              >
                Add your links which will be on your public profile
              </p>
            ) : (
              <div className="links_cont">
                <div className="link_" id="link_">
                  <div>
                    <img src={Resume} alt="icon" />
                  </div>
                  <div>Resume</div>
                </div>
                <div className="link_">
                  <div>
                    {" "}
                    <img src={PortF} alt="icon" style={{ marginTop: "4px" }} />
                  </div>
                  <div>Portfolio</div>
                </div>
                <div className="link_">
                  <div>
                    <img src={Bird} alt="add" style={{ marginTop: "4px" }} />
                  </div>
                  <div>Twitter</div>
                </div>
              </div>
            )}
          </ProfileCard> */}

          <div className="line"></div>
          <div className="rest">
            {matches ? <h3> Timeline</h3> : <h3>My Timeline</h3>}

            <Slider.Container onClick={() => setActive(!active)}>
              <Slider.Star
                active={active ? colors.primaryGreen : colors.primaryGrey}
              >
                <div className="title" id="sliderT">
                  {/* <div>
                          <AiOutlineStar fontSize={20} className="star" />
                        </div> */}
                  <div>Gallery</div>
                </div>
              </Slider.Star>
              <Slider.Hot
                className="hot"
                green={active ? colors.primaryGrey : colors.primaryGreen}
              >
                <div className="title" id="sliderT">
                  {/* <div>
                          <AiFillFire className="hot" />
                        </div> */}
                  <div>Posts</div>
                </div>
              </Slider.Hot>
            </Slider.Container>
            {!active ? (
              <>
                <PostCardContainer>
                  <MidCardRegular>
                    <div className="head">
                      <div className="identity">
                        <div>
                          <img src={Debo} alt="debo" />
                        </div>
                        <div className="name">
                          <h4 id="name">
                            <small style={{ fontSize: 16 }}>Tosin Jegede</small>
                          </h4>
                          <p id="namep">
                            <small style={{ fontSize: 14 }}>
                              Product Manager
                            </small>
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
                              4d
                            </small>
                          </p>
                        </div>
                      </div>

                      <div style={{ marginRight: "1%" }}>
                        <img src={More} alt="more" />
                      </div>
                    </div>
                    <div className="text">
                      <p id="textp">
                        So nervous about NYSC. I have never been to Gombe
                        before, but I feel better with Synergy.
                      </p>
                    </div>

                    <div className="foot">
                      <div className="liker">
                        <div>
                          <img src={Like2} alt="nolike" width={19} />
                        </div>
                        <div>
                          <small>31</small>
                        </div>
                      </div>

                      <div className="comment">
                        <div>
                          <img src={Comments} alt="comment" width={20} />
                        </div>
                        <div>12</div>
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
                  </MidCardRegular>
                </PostCardContainer>
                <PostCardContainer>
                  <MidCardRegular>
                    <div className="head">
                      <div className="identity">
                        <div>
                          <img src={Debo} alt="debo" />
                        </div>
                        <div className="name">
                          <h4 id="name">
                            <small style={{ fontSize: 16 }}>Tosin Jegede</small>
                          </h4>
                          <p id="namep">
                            <small style={{ fontSize: 14 }}>
                              Product Manager
                            </small>
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
                              4d
                            </small>
                          </p>
                        </div>
                      </div>

                      <div style={{ marginRight: "1%" }}>
                        <img src={More} alt="more" />
                      </div>
                    </div>
                    <div className="text">
                      <p id="textp">
                        Product Managers please get in here real quick. What do
                        you guys think about user flows.
                      </p>
                    </div>

                    <div className="foot">
                      <div className="liker">
                        <div>
                          <img src={Like2} alt="nolike" width={19} />
                        </div>
                        <div>
                          <small>56</small>
                        </div>
                      </div>

                      <div className="comment">
                        <div>
                          <img src={Comments} alt="comment" width={20} />
                        </div>
                        <div>30</div>
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
                  </MidCardRegular>
                </PostCardContainer>
                <div className="extra">
                  <p>See all Posts</p>
                  <p>
                    <MdExpandMore color={colors.white} fontSize={30} />{" "}
                  </p>
                </div>
              </>
            ) : (
              <div className="gallery">
                {/* <div className="grid-3">
                  <div className="img_card">
                    <img src={Pic} alt="img" />
                  </div>
                  <div className="img_card">
                    <img src={Pic} alt="img" />
                  </div>
                  <div className="img_card">
                    <img src={Pic} alt="img" />
                  </div>

                  <div className="img_card">
                    <img src={Pic} alt="img" />
                  </div>
                  <div className="img_card">
                    <img src={Pic} alt="img" />
                  </div>
                  <div className="img_card">
                    <img src={Pic} alt="img" />
                  </div>
                </div> */}

                <div style={{
                  color: '#fff',
                  textAlign: 'center'
                }}>
                 Add Photos to your gallery to make your profile pop
                </div>
                <div
                  style={{
                    width: "150px",
                    height: "37px",
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 50,
                    gap: 20,
                    margin: '30px auto',
                    color:  '#fff',
                    border: '1.5px solid #FE9730',
                  }}
                >
                  <AiOutlinePlus fill="#fff" color='#fff' />
                  <div>Add Photos</div>
                </div>
              </div>
            )}
            {/* <PostCard /> */}
          </div>
        </ProfileStyle>
      )}
      {/* <Footer onClick={() => console.log("hey")} /> */}
    </>
  );
}
