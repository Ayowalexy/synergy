import React from "react";
import FollowCard from "../../component/cards/followCard";
import { ExploreStyle } from "../../styles/pages/ExploreStyles";
import Add from "../../assets/svgs/others/addfriends.svg";
import Filter from "../../assets/svgs/others/filter.svg";
import Com from "../../assets/svgs/others/com.svg";

import Right_arrow from "../../assets/svgs/others/right_arr.svg";
import Profile from "../../assets/pngs/others/profile.png";
import Chick from "../../assets/pngs/others/chick.png";
import Navbar from "../../component/navbar";
import { BsPersonPlus } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import Footer from "../../component/footer";
import { exploreUsers } from "../../@fake-db/onboarding/addFriends";
import ExploreCard from "../../component/cards/exploreCard";
import { useAppSelector } from "../../redux/store";

const Btns = () => {
  return (
    <>
      <div className="sqr">
        <div>
          <BsPersonPlus fontSize={26} color="white" />
        </div>
      </div>
      <div className="sqr">
        <img src={Com} alt="com" />
      </div>
    </>
  );
};
export default function Explore() {
  const smSearchDisplay = useAppSelector((state) => state.nav);

  return (
    <>
      <Navbar />
      {smSearchDisplay.search ? (
        ""
      ) : (
        <ExploreStyle>
          {/* <div className="top">
          <div className="ill">
            <img src={Add} alt="add_friends" />
          </div>
          <div className="txt">
            <h1>Find Connections</h1>
            <p>Follow more users to increase your meaningful connections</p>
          </div>
        </div> */}
          <div className="flex">
            <div>
              <p>Youth Corpers Near you</p>
            </div>
            <div>
              {/* <p>Filter </p> */}

              <img src={Filter} alt="filter" />
            </div>
          </div>
          <div className="grid">
            {exploreUsers.map((user, i) => (
              <div className="fc" key={i}>
                <ExploreCard
                  profile={user.profile}
                  name={user.name}
                  status={user.status}
                />
              </div>
            ))}
          </div>
          {/* <div className="more">
          <div>See more</div>
          <div>
            <MdKeyboardArrowDown fontSize={30} color="white" />
          </div>
        </div> */}
        </ExploreStyle>
      )}
      <Footer onClick={() => console.log("hey")} />
    </>
  );
}
