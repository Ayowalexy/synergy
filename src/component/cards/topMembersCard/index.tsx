import React, { useState } from "react";
import { ListCard } from "../../../styles/components/ListCard";
import Debo from "../../../assets/pngs/home/debo.png";
import AddUser from "../../../assets/svgs/home/adduser.svg";
import AddedUser from "../../../assets/svgs/home/addeduser.svg";
import Right from "../../../assets/svgs/home/arrow_right.svg";
import { users } from "../../../@fake-db/onboarding/addFriends";
import { Link } from "react-router-dom";
import { Hr } from "../../../styles/pages/Hr";
import { topMembers } from "../../../@fake-db/onboarding/addFriends";

export default function TopMembersCard() {
  const [newUser, setNewUser] = useState(users);

  const buttonToggler = (index: number) => {
    const testUser = newUser;
    testUser[index].followed = !testUser[index].followed;
    setNewUser([...testUser]);
  };
  return (
    <ListCard>
      <h2>Top Members</h2>
      {topMembers.slice(0, 5).map((user, index) => (

        <>
          <Hr />
          <div className="row" id={index === 0 ? "first" : ""} key={index}>
            <div className="user">
              <div>
                <Link to="/profile">
                  <img style={{
                    border: "2px solid #FE9730",
                    borderRadius: 50,
                    marginRight: 3,
                    height: 40,
                    width: 40
                  }} src={user.profile} alt="debo" />
                </Link>
              </div>
              <div>
                <h4>{user.name}</h4>
                <p style={{ width: 200, marginTop: 16 }}>{user.status}</p>
              </div>
            </div>
            <div style={{ marginLeft: -70 }} onClick={() => buttonToggler(index)}>

              <img src={AddUser} alt="add user" />

            </div>
          </div>
          { index == 4 ? <><Hr /></> : null}
         
        </>
      ))}
      <div className="last">
        <p>See More </p>

        <img src={Right} alt="right_arrow" />
      </div>
    </ListCard>
  );
}
