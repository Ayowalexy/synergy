import React, { useEffect, useRef, useState } from "react";
import PostCard from "../../component/cards/postCard";
import { ButtonHighlight } from "../../styles/components/Button";
import { MidCard } from "../../styles/components/MidCard";
import { SmCardTransparent } from "../../styles/components/SmCard";
import { HomeContainer } from "../../styles/HomeStyles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Twitter from "../../assets/svgs/others/gtwit.svg";
import Ig from "../../assets/svgs/others/ginsta.svg";
import Fb from "../../assets/svgs/others/gfb.svg";
import LinkedIn from "../../assets/svgs/others/gln.svg";
import Phones from "../../assets/svgs/others/phones.svg";
import Debo from "../../assets/pngs/home/debo.png";

import More from "../../assets/svgs/others/more2.svg";
import Cancel from "../../assets/svgs/home/cancel.svg";
import { LandingPageNav } from "../../component/navbar/style";
import Navbar from "./navbar";
import DummyPostCard from "./dummyPostCard";
import { LandingPageContainer } from "../../styles/pages/LandingPageStyle";
import { Link } from "react-router-dom";
import { TextChange, TextSlide } from "../../component/carousel";
export default function LandingPage() {
  const texts = ["Youth Community!", " Youth Service!", "Youth Opportunity!"];
  const [displayIcon, setDisplayIcon] = useState(false);
  const toggleDisplayIcon = () => {
    setDisplayIcon(!displayIcon);
  };

  const matches = useMediaQuery("(max-width:600px)");

  const cardRef: React.LegacyRef<HTMLDivElement> | undefined | null =
    useRef(null);

  const scrollCheck = (e: React.WheelEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      cardRef.current.scrollTop = e.deltaY + cardRef.current.scrollTop; //adds deltaY value to the card div, and increases it by that value onscroll or onwheel
      // console.log(cardRef.current.scrollTop, e.deltaY, "heyy");
    }
    // e.preventDefault();
  }; //

  return (
    <>
      <Navbar />
      <div onWheel={scrollCheck}>
        <LandingPageContainer>
          {/* for mobile */}
          {matches && (
            <div className="right-section">
              <div className="fones">
                <img src={Phones} alt="phones" />
              </div>
              <div className="maintext">
                <TextChange />

                <p>Special Rewards for Early Birds</p>
              </div>
              <div className="smbtn">
                <ButtonHighlight padding="5% 40px">
                  <Link to="/signup">Join for Free</Link>
                </ButtonHighlight>{" "}
              </div>
            </div>
          )}

          <div className="main-section" ref={cardRef}>
            <MidCard
              onMouseEnter={toggleDisplayIcon}
              onMouseLeave={toggleDisplayIcon}
            >
              {displayIcon && (
                <div className="cancel">
                  <img src={Cancel} alt="cancel" />
                </div>
              )}
              <h1>Your World of Opportunities</h1>
              <p>
                Synergy is the zone to get inspired, share ideas, 
                make connections and achieve your dreams. Together!
              </p>
            </MidCard>
            {<DummyPostCard />}
          </div>

          <div className="right-section">
            {/* desktop mode */}
            {!matches && (
              <>
                <div className="fones">
                  <img src={Phones} alt="phones" />
                </div>
                <div className="maintext">
                  <TextChange />

                  <p>Special Rewards for Early Birds</p>
                </div>
                <div className="smbtn">
                  <ButtonHighlight padding="2% 45px">
                    <Link to="/signup">Join for Free</Link>
                  </ButtonHighlight>{" "}
                </div>
              </>
            )}

            <SmCardTransparent>
              <div className="flex">
                <div>
                  <img id="tw" src={Twitter} alt="twitter" />
                </div>
                <div>
                  <img id="ins" src={Ig} alt="instagram" />
                </div>
                <div >
                  <img id="fb" src={Fb} alt="facebook" />
                </div>
                <div>
                  <img  id="lin"src={LinkedIn} alt="linkedIn" />
                </div>
              </div>
              <div className="flex-b">
                <div> <Link to="/aboutus">About</Link> </div>
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
            </SmCardTransparent>
          </div>
        </LandingPageContainer>
      </div>
    </>
  );
}
