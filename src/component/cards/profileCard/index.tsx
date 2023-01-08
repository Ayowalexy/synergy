import React from "react";
import { Container } from "./style";
import Pfp from "../../../assets/pngs/home/pfp_md.png";
import { TiLocationOutline } from "react-icons/ti";
import {
  BtnMidContain,
  BtnMidOutline,
} from "../../../styles/components/Button";
import { Link } from "react-router-dom";
export default function ProfileCard() {
  return (
    <Container>
      <div className="pfp">
        <Link to="/profile">
          <img src={Pfp} alt="profile" width={140} />
        </Link>
      </div>
      <div className="text">
        <h3>Tosin Jegede</h3>
        <h4>Product Manager</h4>
        <div className="loc">
          <p>
            <TiLocationOutline fontSize={20} />
          </p>
          <p>Lagos</p>
        </div>
      </div>
      <div className="mb-t" />

      <div className="btm">
        <div>
          <h3>2k</h3>
          <p>Followers</p>
          <div style={{ marginTop: 15 }}>
            <BtnMidContain padding="7% 15px">Edit Profile</BtnMidContain>
          </div>
        </div>
        <div>
          <h3>1.5k</h3>
          <p>Following</p>
          <div style={{ marginTop: 15 }}>
            <BtnMidOutline padding="4% 12px" border={true}>
              Invite Friends
            </BtnMidOutline>
          </div>
        </div>
      </div>
    </Container>
  );
}
