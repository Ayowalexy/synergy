import React from "react";
import { ForgotPasswordStyles } from "../../../styles/pages/ForgotPasswordStyles";
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
    <ForgotPasswordStyles>
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
        <h1>Forgot Password</h1>
        <p>A link will be sent to your email to enable you get back into your account</p>
        <hr />
        <Form />
        <div className="alt">
          
        </div>
       
      </SigninFormContainer>
    </ForgotPasswordStyles>
  );
}
