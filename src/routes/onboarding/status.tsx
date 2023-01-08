import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Student from "../../assets/svgs/others/student.svg";
import Prof from "../../assets/svgs/others/prof.svg";
import Corper from "../../assets/svgs/others/corper.svg";
import Right from "../../assets/svgs/others/right_arrow.svg";

import { StatusContainer } from "../../styles/pages/StatusStyle";

export default function Status() {
  const navigate = useNavigate();
  const [selectedStatus, setSelectedStatus] = useState<
    "student" | "prof" | "corper" | "nil"
  >("nil");

  const handleSelectedStatus = (
    choice: "student" | "prof" | "corper" | "nil"
  ) => {
    setSelectedStatus(choice);
    setTimeout(() => {
      navigate(`/addfriends`);
    }, 2000);
  };
  return (
    <StatusContainer>
      <div className="top">
        <h3>What’s your status?</h3>
        <p>Please choose from the following</p>
      </div>
      <div className="card_flex">
        <div
          className="card"
          onClick={() => handleSelectedStatus("student")}
          id={selectedStatus == "student" ? "bord" : ""}
        >
          <div className="top">
            <div className="img_card">
              <img src={Student} alt="" />
            </div>
          </div>
          <div className="rest">
            <div>
              <p>Student</p>
            </div>
            <div>
              <img src={Right} alt="" />
            </div>
          </div>
        </div>
        <div
          className="card"
          onClick={() => handleSelectedStatus("corper")}
          id={selectedStatus == "corper" ? "bord" : ""}
        >
          <div className="top">
            <div className="img_card">
              <img src={Corper} alt="" width={195} />
            </div>
          </div>
          <div className="rest">
            <div>
              <p>Youth Corper</p>
            </div>
            <div>
              <img src={Right} alt="" />
            </div>
          </div>
        </div>
        <div
          className="card"
          onClick={() => handleSelectedStatus("prof")}
          id={selectedStatus == "prof" ? "bord" : ""}
        >
          <div className="top">
            <div className="img_card" id="cen">
              <img src={Prof} alt="" />
            </div>
          </div>
          <div className="rest">
            <div>
              <p>Young Graduate</p>
            </div>
            <div>
              <img src={Right} alt="" />
            </div>
          </div>
        </div>{" "}
      </div>
      {/* <div>
        <div className="btn">
          <Link to="/addfriends">
            <ButtonOrange type="submit">Continue</ButtonOrange>
          </Link>
        </div>
      </div> */}
    </StatusContainer>
  );
}
