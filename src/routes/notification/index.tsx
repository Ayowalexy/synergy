import React from "react";
import { Container } from "../../styles/pages/NotificationStyle";
import AddUser from "../../assets/svgs/home/adduser.svg";
import AddedUser from "../../assets/svgs/home/addeduser.svg";
import Shalom from "../../assets/pngs/others/shalom.png";
import Jim from "../../assets/pngs/others/jim.png";
import Mike from "../../assets/pngs/others/mike.png";
import Navbar from "../../component/navbar";
import TopMembersCard from "../../component/cards/topMembersCard";
import { SmCard } from "../../styles/components/SmCard";
import Ig from "../../assets/svgs/home/ig.svg";
import Fb from "../../assets/svgs/home/facebk.svg";
import Twitter from "../../assets/svgs/home/twitter.svg";
import LinkedIn from "../../assets/svgs/home/linkedin.svg";
import More from "../../assets/svgs/others/more_blk.svg";

import Arrow_up from "../../assets/svgs/home/arrow_up.svg";
import Footer from "../../component/footer";
import HotTopicsCard from "../../component/cards/hotTopicsCard";
import { useAppSelector } from "../../redux/store";

export default function Notification() {
  const smSearchDisplay = useAppSelector((state) => state.nav);

  return (
    <>
      <Navbar />
      {smSearchDisplay.search ? (
        ""
      ) : (
        <Container>
          <div className="main-section">
            <div className="flex-card">
              <div className="flex">
                <div className="left">
                  <div className="img-cont">
                    <img src={Shalom} alt="profile" />
                  </div>
                  <div>
                    <p>
                      <b>Shalom Jim </b> followed you
                    </p>
                  </div>
                </div>
                <div className="right">
                  <img src={AddUser} alt="icon" />
                </div>
              </div>
              <div className="flex">
                <div className="left">
                  <div className="img-cont">
                    <img src={Shalom} alt="profile" />
                  </div>
                  <div>
                    <p>
                      <b>Chris Yen</b> followed you
                    </p>
                  </div>
                </div>
                <div className="right">
                  <img src={AddUser} alt="icon" />
                </div>
              </div>
              <div className="flex">
                <div className="left">
                  <div className="img-cont">
                    <img src={Mike} alt="profile" />
                  </div>
                  <div>
                    <p>
                      <b>Mike Thompson</b> followed you
                    </p>
                  </div>
                </div>
                <div className="right">
                  <img src={AddUser} alt="icon" />
                </div>
              </div>
              <div className="flex">
                <div className="left">
                  <div className="img-cont">
                    <img src={Shalom} alt="profile" />
                  </div>
                  <div>
                    <p>
                      <b>Adaeze Igbanibo</b> followed you
                    </p>
                  </div>
                </div>
                <div className="right">
                  <p> View</p>
                </div>
              </div>
              <div className="flex">
                <div className="left">
                  <div className="img-cont">
                    <img src={Jim} alt="profile" />
                  </div>
                  <div>
                    <p>
                      <b>Deji Akintade </b> followed you
                    </p>
                  </div>
                </div>
                <div>
                  <img src={AddedUser} alt="icon" />
                </div>
              </div>
              <div className="flex">
                <div className="left">
                  <div className="img-cont">
                    <img src={Mike} alt="profile" />
                  </div>
                  <div>
                    <p>
                      <b>Hauwa Ahmed</b> followed you
                    </p>
                  </div>
                </div>
                <div className="right">
                  <img src={AddUser} alt="icon" />
                </div>
              </div>
              <div className="flex">
                <div className="left">
                  <div className="img-cont">
                    <img src={Shalom} alt="profile" />
                  </div>
                  <div>
                    <p>
                      <b>Tosin Joshua </b> followed you
                    </p>
                  </div>
                </div>
                <div className="right">
                  <img src={AddedUser} alt="icon" />
                </div>
              </div>
              <div className="flex">
                <div className="left">
                  <div className="img-cont">
                    <img src={Jim} alt="profile" />
                  </div>
                  <div>
                    <p>
                      <b>Ifeoma Apala </b> followed you
                    </p>
                  </div>
                </div>
                <div className="right">
                  <p>View</p>
                  {/* <img src={AddUser} alt="icon" /> */}
                </div>
              </div>
              <div className="flex">
                <div className="left">
                  <div className="img-cont">
                    <img src={Mike} alt="profile" />
                  </div>
                  <div>
                    <p>
                      <b>Valerie Jim </b> followed you
                    </p>
                  </div>
                </div>
                <div className="right">
                  <img src={AddUser} alt="icon" />
                </div>
              </div>
              <div className="flex">
                <div className="left">
                  <div className="img-cont">
                    <img src={Shalom} alt="profile" />
                  </div>
                  <div>
                    <p>
                      <b>Michael Babs </b> followed you
                    </p>
                  </div>
                </div>
                <div className="right">
                  <img src={AddUser} alt="icon" />
                </div>
              </div>
              <div className="flex">
                <div className="left">
                  <div className="img-cont">
                    <img src={Mike} alt="profile" />
                  </div>
                  <div>
                    <p>
                      <b>Debo Ade </b> followed you
                    </p>
                  </div>
                </div>
                <div className="right">
                  <img src={AddUser} alt="icon" />
                </div>
              </div>
              <div className="flex">
                <div className="left">
                  <div className="img-cont">
                    <img src={Shalom} alt="profile" />
                  </div>
                  <div>
                    <p>
                      <b>Shalom Jim </b> followed you
                    </p>
                  </div>
                </div>
                <div className="right">
                  <img src={AddUser} alt="icon" />
                </div>
              </div>
              <div className="flex">
                <div className="left">
                  <div className="img-cont">
                    <img src={Shalom} alt="profile" />
                  </div>
                  <div>
                    <p>
                      <b>Shalom Jim </b> followed you
                    </p>
                  </div>
                </div>
                <div className="right">
                  <img src={AddUser} alt="icon" />
                </div>
              </div>
              <div className="flex">
                <div className="left">
                  <div className="img-cont">
                    <img src={Shalom} alt="profile" />
                  </div>
                  <div>
                    <p>
                      <b>Shalom Jim </b> followed you
                    </p>
                  </div>
                </div>
                <div className="right">
                  <img src={AddUser} alt="icon" />
                </div>
              </div>
            </div>
          </div>

          <div className="right-section">
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
        </Container>
      )}
      <Footer onClick={() => console.log("")} />
    </>
  );
}
