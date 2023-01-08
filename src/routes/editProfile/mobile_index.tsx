import React, { useState } from "react";
import { Slider } from "../../styles/components/Slider";
import { MobileStyles } from "./MobileStyles";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { colors } from "../../styles/colors";
import MobileCredentials from "./mobile_credentials";
import MobilePersonal from "./mobile_personal";
import { Link } from "react-router-dom";

const MobileEdit = () => {
  const [active, setActive] = useState(false);

  return (
    <MobileStyles>
      <div className="container">
        <div className="header">
          <div>
            <Link to='/profile'>
                <MdOutlineKeyboardBackspace fill="#fff" size={30} />
            </Link>
          </div>
          <div className="edit">Edit Profile</div>
          <div />
        </div>
        <div className="body_">
       
        </div>
       
       {/* { !active && <MobileCredentials />} */}
       <MobilePersonal />
      </div>
    </MobileStyles>
  );
};

export default MobileEdit;
