import React from "react";
import { SigninStyles } from "../../../styles/pages/SigninStyles";
import Logo from "../../../assets/svgs/home/logo.svg";
import Form from "./form";
import { FormContainer } from "../signup/formStyle";
import { Link } from "react-router-dom";
import BigS from "../../../assets/svgs/others/bigS.svg";
import Fbox from "../../../assets/svgs/others/fbox.svg";
import Gbox from "../../../assets/svgs/others/gbox.svg";
import Ytlogo from "../../assets/svgs/home/logo.svg";
import Goo from "../../../assets/pngs/auth/goo.png";
import Fb from "../../../assets/pngs/auth/fb.png";

import { SigninFormContainer } from "./formStyle";
export default function Signin() {
  return (
    <SigninStyles>
      <div className="smtop">
        <div className="cont">
          {/* <div className="bigS">
            <img src={BigS} alt="synergy_logo" />
          </div> */}
          <div className="logo">
            <img src={Logo} alt="synergy_logo" />
          </div>
        </div>
        {/* <div className="option">
          <p>
            Not a member?{" "}
            <span>
              {" "}
              <Link to="/signup"> Sign Up</Link>{" "}
            </span>{" "}
          </p>
        </div> */}
      </div>
      <SigninFormContainer className="form-container">
        <h1>Welcome Back</h1>
        <p>Kindly login your details to access your account.</p>
        <hr />
        <Form />
        <div className="alt">
          <div></div>
          <div>
            <p>or continue with</p>
          </div>
          <div></div>
        </div>
        <div className="box">
          <div className="fb">
            <div>
              <img src={Goo} alt="sign_up with fb" />
            </div>
            <div>
              <h4>Google</h4>{" "}
            </div>
          </div>
          
        </div>
        <div className="last">
          <p>
            Not a member?{" "}
            <span>
              {" "}
              <Link to="/signup"> Sign Up</Link>{" "}
            </span>{" "}
          </p>
        </div>
      </SigninFormContainer>
    </SigninStyles>
  );
}