import React, { useEffect, useState } from "react";
import Add from "../../assets/svgs/others/addfriends.svg";
import Right_arrow from "../../assets/svgs/others/go.svg";
import Profile from "../../assets/pngs/others/profile.png";
import Chick from "../../assets/pngs/others/chick.png";
import GoBack from "../../assets/svgs/others/go-back.svg";
import MobileCard from "./mobile_card";
import FollowCard from "../../component/cards/followCard";
import Footer from "../../component/footer";
import Navbar from "../../component/navbar";
import {
  BtnMidContain,
  BtnMidOutline,
  ButtonOrange,
} from "../../styles/components/Button";
import styled from "styled-components";
import { AddFriendStyles } from "../../styles/pages/AddFriendStyles";
import { useNavigate } from "react-router";
import { users } from "../../@fake-db/onboarding/addFriends";
import { colors } from "../../styles/colors";
import { useMediaQuery } from "@mui/material";

const Button = styled.button`
  background: linear-gradient(91.32deg, #fe9730 46.45%, #fb5046 99.37%);
  border-radius: 4px;
  width: 100%;
  height: 44px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  font-family: "Montserrat", sans-serif;
  position: relative;
  color: rgba(4, 31, 41, 0.6);
  span {
    position: absolute;
    top: 28%;
    right: 29%;
  }
  @media only screen and (max-width: 600px) {
    span {
      position: absolute;
      top: 27%;
      right: 19%;
    }
  }
`;
export default function AddFriends() {
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState(users);
  const [no_followed, set_no_followed] = useState(0);
  const matches = useMediaQuery("(max-width:600px)");

  const buttonToggler = (index: number) => {
    const testUser = newUser;
    testUser[index].followed = !testUser[index].followed;
    setNewUser([...testUser]);
    const followed = users.filter((s) => Object.is(s.followed, true));
    set_no_followed(followed.length);
  };

  return (
    <>
      <AddFriendStyles>
        <div className="top">
          <div onClick={() => navigate("/status")} className="arrow-back">
            <img src={GoBack} alt="arrow back" />
          </div>
          <div className="ill">
            <img src={Add} alt="add_friends" />
          </div>
          <div className="txt">
            <h1>Start Making Connections</h1>
            <p>
              {!matches ? (
                <div>
                  Follow <span style={{ color: colors.textGreen }}>3</span> or
                  more people
                </div>
              ) : (
                <div style={{ width: 200, margin: "0 auto" }}>
                  Increase your feed results by following other users
                </div>
              )}
            </p>
          </div>
        </div>
        {!matches && (
          <div className="grid">
            {newUser.slice(0, 10).map((user, i) => (
              <div key={i}>
                <FollowCard
                  name={user.name}
                  status={user.status}
                  btn={
                    user.followed ? (
                      <BtnMidOutline
                        padding="8% 26px"
                        onClick={() => buttonToggler(i)}
                      >
                        {" "}
                        Followed
                      </BtnMidOutline>
                    ) : (
                      <BtnMidContain
                        padding="8% 26px"
                        onClick={() => buttonToggler(i)}
                      >
                        {" "}
                        Follow
                      </BtnMidContain>
                    )
                  }
                >
                  <img
                    src={user.img}
                    width="100%"
                    height="100%"
                    alt="profile"
                  />
                </FollowCard>
              </div>
            ))}
          </div>
        )}

        {matches && (
          <>
            {newUser.slice(0, 10).map((user, idx) => (
              <MobileCard
                onClick={ () => buttonToggler(idx)}
                key={idx}
                name={user.name}
                title={user.status}
                img={user.img}
                followed={user.followed}
              />
            ))}
          </>
        )}

        <div className="btn">
          <div
            style={{
              opacity: no_followed < 3 ? 0.5 : 1,
            }}
          >
            <Button
              onClick={() => {
                if (no_followed >= 3) {
                  navigate("/feed");
                }
              }}
            >
              Go to My Feed{" "}
              <span>
                {" "}
                <img src={Right_arrow} alt="right_arr" />{" "}
              </span>
            </Button>
          </div>
        </div>
      </AddFriendStyles>
    </>
  );
}
