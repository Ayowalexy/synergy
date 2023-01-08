 import React, { useEffect, useState } from "react";
import Header from "../component/header";
import Navbar from "../component/navbar";
import { Slider } from "../styles/components/Slider";
import { HomeContainer } from "../styles/HomeStyles";

import Ig from "../assets/svgs/home/ig.svg";
import Fb from "../assets/svgs/home/facebk.svg";
import Twitter from "../assets/svgs/home/twitter.svg";
import LinkedIn from "../assets/svgs/home/linkedin.svg";
import More from "../assets/svgs/others/more_blk.svg";

import Arrow_up from "../assets/svgs/home/arrow_up.svg";
import Cancel from "../assets/svgs/home/cancel.svg";

import { colors } from "../styles/colors";
import { MidCard } from "../styles/components/MidCard";

import { ButtonHighlight } from "../styles/components/Button";

import { SmCard } from "../styles/components/SmCard";
import Footer from "../component/footer";
import { AiOutlineStar, AiFillFire } from "react-icons/ai";
import CreatePostCard from "../component/cards/createPostCard";
import useMediaQuery from "@mui/material/useMediaQuery";

import PostCard from "../component/cards/postCard";

import { Link } from "react-router-dom";
import TopMembersCard from "../component/cards/topMembersCard";
import HotTopicsCard from "../component/cards/hotTopicsCard";
import { useAppSelector } from "../redux/store";
import ProfileCard from "../component/cards/profileCard";
import BasicModal from "../component/modals/BasicModal";

export default function Home() {
  const [active, setActive] = useState(true); //state to switch between following and hot tab

  const [postTyping, setPostTyping] = useState(false); // state to toggle post card. Also handles display of navbar and footer
  const [search, setSearch] = useState(false); // state to toggle searchlist for mobile. Also handles display of navbar and footer
  const matches = useMediaQuery("(max-width:600px)"); //hook to control component to render wrt viewport

  const { posts } = useAppSelector(({ posts }) => posts);
  const smSearchDisplay = useAppSelector((state) => state.nav);

  return (
    <div>
      <>
        {matches && postTyping ? (
          <CreatePostCard
            toggleCard={() => setPostTyping(false)}
            setPostTyping={setPostTyping} //props to toggle postcard in creatpostcard component for mobile
          /> //conditional rendering of postcard
        ) : (
          <>
            <Navbar />
            {/* prevnts the rest of the page from displaying if smSearchDisplay.search from  navbar is true */}
            {smSearchDisplay.search ? (
              ""
            ) : (
              <HomeContainer>
                <div className="left-section">
                  <ProfileCard />
                </div>
                <div className="main-section">
                  {postTyping ? (
                    <BasicModal
                      top="18rem"
                      left="47.6%"
                      width={"35.5%"}
                      open={postTyping}
                      setOpen={setPostTyping}
                    >
                      <CreatePostCard
                        toggleCard={() => setPostTyping(false)}
                        setPostTyping={setPostTyping}
                      />
                    </BasicModal>
                  ) : (
                    <Header onClick={() => setPostTyping(true)} />
                  )}

                  <Slider.Container onClick={() => setActive(!active)}>
                    <Slider.Star
                      active={active ? colors.primaryGreen : colors.primaryGrey}
                    >
                      <div className="title">
                        <div>
                          <AiOutlineStar fontSize={20} className="star" />
                          {/* <img src={Star} alt="star" /> */}
                        </div>
                        <div>Following</div>
                      </div>
                    </Slider.Star>
                    <Slider.Hot
                      className="hot"
                      green={active ? colors.primaryGrey : colors.primaryGreen}
                    >
                      <div className="title">
                        <div>
                          <AiFillFire className="hot" />
                          {/* <img src={Hot} alt="hot" /> */}
                        </div>
                        <div>Hot</div>
                      </div>
                    </Slider.Hot>
                  </Slider.Container>
                  {active ? (
                    <>
                      <MidCard>
                        <div className="cancel"></div>
                        <h1>Your World of Opportunities</h1>
                        <p>
                          Synergy is the zone to get inspired, share ideas, make
                          connections and achieve your dreams.
                        </p>
                        <div>
                          <ButtonHighlight padding=" 3% 36px">
                            <Link to={"/explore"}>Explore </Link>
                          </ButtonHighlight>
                        </div>
                      </MidCard>
                      {posts.length > 0 && <PostCard />}
                    </>
                  ) : (
                    ""
                  )}
                </div>

                <div className="right-section">
                  <TopMembersCard />

                  <HotTopicsCard />
                  <br />
                  <SmCard>
                    <div className="flex">
                      <div>
                        <img src={Twitter} alt="twitter" />
                      </div>
                      <div>
                        <img src={Ig} alt="instagram" />
                      </div>
                      <div id="fb">
                        <img src={Fb} alt="facebook" />
                      </div>
                      <div>
                        <img src={LinkedIn} alt="linkedIn" />
                      </div>
                    </div>
                    <div className="flex-b">
                      <div>About </div>
                      <div>Contact</div>
                      <div>Guidelines</div>
                      <div className="more">
                        <div>More</div>
                        <div>
                          <img src={More} alt="More" />
                        </div>
                      </div>
                    </div>
                    <p>© 2022 Synergy NG, Inc.</p>
                  </SmCard>
                  <div className="arr_up">
                    <img src={Arrow_up} alt="arrow_up" />
                  </div>
                </div>
              </HomeContainer>
            )}
          </>
        )}
      </>

      {postTyping || search ? (
        ""
      ) : (
        <Footer onClick={() => setPostTyping(true)} />
      )}
    </div>
  );
}
