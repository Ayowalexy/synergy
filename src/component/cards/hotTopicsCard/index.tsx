import React from "react";
import { ListCard } from "../../../styles/components/ListCard";
import Debo from "../../../assets/pngs/home/debo.png";
import AddUser from "../../../assets/svgs/home/adduser.svg";
import AddedUser from "../../../assets/svgs/home/addeduser.svg";
import Right from "../../../assets/svgs/home/arrow_right.svg";
import Flame from "../../../assets/svgs/home/flame.svg";
import { Hr } from "../../../styles/pages/Hr";

export default function HotTopicsCard() {
  return (
    <ListCard>
      <h2 style={{ marginTop: 20 }}>Hot Topics</h2>

      <Hr />
      <div className="row" id="first">
        <div className="user" id="hot">
          {/* <div><img src={Debo} alt="debo" /></div> */}
          <div>
            <h3>#Wizkid</h3>
          </div>
        </div>
        <div>
          <img src={Flame} alt="add user" />
        </div>
      </div>
      <Hr />
      <div className="row">
        <div className="user" id="hot">
          {/* <div>
                  <img src={Debo} alt="debo" />
                </div> */}
          <div>
            <h3>#Lagos</h3>
          </div>
        </div>
        <div>
          <img src={Flame} alt="add user" />
        </div>
      </div>
      <Hr />
      <div className="row">
        <div className="user" id="hot">
          {/* <div>
                  <img src={Debo} alt="debo" />
                </div> */}
          <div>
            <h3>#JobsinNigeria</h3>
          </div>
        </div>
        <div>
          <img src={Flame} alt="add user" />
        </div>
      </div>{" "}
      <Hr />
      <div className="row">
        <div className="user" id="hot">
          {/* <div>
                  <img src={Debo} alt="debo" />
                </div> */}
          <div>
            <h3>#Unemployment</h3>
          </div>
        </div>
        <div>
          <img src={Flame} alt="add user" />
        </div>
      </div>{" "}
      <Hr />
      <div className="row">
        <div className="user" id="hot">
          {/* <div>
                  <img src={Debo} alt="debo" />
                </div> */}
          <div>
            <h3>#NYSC</h3>
          </div>
        </div>
        <div>
          <img src={Flame} alt="added user" />
        </div>
      </div>
      <Hr />
      <div className="row">
        <div className="user" id="hot">
          {/* <div>
                  <img src={Debo} alt="debo" />
                </div> */}
          <div>
            <h3>#Synergy</h3>
          </div>
        </div>
        <div>
          <img src={Flame} alt="added user" />
        </div>
      </div>
    </ListCard>
  );
}
