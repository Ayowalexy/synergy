import React, { useState } from "react";
import Navbar from "../../component/navbar";
import { EditContainer } from "./Edit.Style";
import { useMediaQuery } from "@mui/material";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { Slider } from "../../styles/components/Slider";
import { colors } from "../../styles/colors";
import { BtnMidContain } from "../../styles/components/Button";
import Credentials from "./credentials";
import Personal from "./personal";
import { MobileStyles } from "./MobileStyles";
import MobileEdit from "./mobile_index";
import { Link } from "react-router-dom";

const EditProfile = () => {
  const matches = useMediaQuery("(max-width:600px)");
  const [active, setActive] = useState(true);

  return (
    <div>
      {!matches && (
        <>
          <Navbar />
          <EditContainer>
            <div className="container">
              <div className="box">
                <div className="header">
                  <Link to='/profile'>
                    <MdOutlineKeyboardBackspace fill="#fff" size={30} />
                  </Link>
                  <div className="edit">Edit Profile</div>
                  <AiOutlineClose fill="#fff" size={30} />
                </div>


                {/* {!active && <Credentials />} */}
                 <Personal />

                <div
                  style={{
                    width: 100,
                    paddingTop: 40,
                    float: "right",
                  }}
                >
                  <div></div>
                  <div>
                    <BtnMidContain>Save</BtnMidContain>
                  </div>
                </div>
              </div>
            </div>
          </EditContainer>
        </>
      )}
      {matches && <MobileEdit />}
    </div>
  );
};

export default EditProfile;
