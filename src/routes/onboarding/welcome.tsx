import React, { useState, useEffect } from "react";
import {
  BtnMidContain,
  BtnMidOutline,
  ButtonOrange,
} from "../../styles/components/Button";
import Logo from "../../assets/svgs/home/logo.svg";
import Welcom from "../../assets/svgs/others/welcome.svg";
import { FiMenu } from "react-icons/fi";
import { WelcomeStyles } from "../../styles/pages/WelcomeStyles";
import { GrFormClose } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import PageLoader from "../../component/loaders/pageLoader";
import OtpInput from "react-otp-input";
import { useMediaQuery } from "@mui/material";

export default function Welcome() {
  const [expand, setExpand] = useState(false);
  const [otp, setOtp] = useState("");
  const toggleNav = () => {
    setExpand(!expand);
  };

  const handleChange = (otp: string) => setOtp(otp);
  const navigate = useNavigate();
  const matches = useMediaQuery("(max-width:600px)"); 

  useEffect(() => {
    if(otp.length == 4){
      navigate('/status')
    }
  }, [otp])
  return (
    // <>
    //   <PageLoader />
    // </>
    <WelcomeStyles display={!expand ? "none" : "block"}>
      {/* <div className="nav">
        <div className="logo">
          <img src={Logo} alt="synergy_logo" />
        </div>
        <div className="ham" onClick={toggleNav}>
          {" "}
          {expand ? <GrFormClose /> : <FiMenu />}
        </div>
        <div
          className={!expand ? "flex" : "flex trans"}
          id={!expand ? "" : "trans"}
        >
          <div className="list">
            <BtnMidOutline>Contact</BtnMidOutline>{" "}
          </div>
          <div className="list">
            <BtnMidContain onClick={() => navigate("/signin")}>
              Join Us
            </BtnMidContain>{" "}
          </div>
        </div>
      </div> */}
      <div className="rest">
        <div className="ill">
          <img src={Welcom} className='img_' alt="thank_you" />
        </div>
        <div className="text">
          <h1>WOO HOO!</h1>tosinjegede@yahoo.com.
          <p className="welcome_">
            We have sent a 4 digit verification code to you at
            <span style={{ fontWeight: 800 }}>
              {" "}
              tosinjegede@yahoo.com.
            </span>{" "}
            <br /> Please enter the code
          </p>
        </div>
        <div className="otp">
          <div className="container">
            <OtpInput
              value={otp}
              focusStyle="focusStyle"
              inputStyle="inputStyle"
              onChange={handleChange}
              numInputs={4}
              isInputNum={true}
              isInputSecure
            />
          </div>
        </div>
        <div className="code_">
          <div>
            Didn’t get a code? <span>Resend Code</span>
          </div>
        </div>
        {/* <div className="btn">
          <Link to="/status">
            <ButtonOrange type="submit">Continue</ButtonOrange>
          </Link>
        </div> */}
      </div>
    </WelcomeStyles>
  );
}
