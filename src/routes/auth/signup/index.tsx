import React from "react";
import { SignupStyles } from "../../../styles/pages/SignupStyles";
import { FormContainer } from "./formStyle";
import Logo from "../../../assets/svgs/home/logo.svg";
import BigS from "../../../assets/svgs/others/bigS.svg";
import Fbox from "../../../assets/svgs/others/fbox.svg";
import Gbox from "../../../assets/svgs/others/gbox.svg";
import Goo from "../../../assets/pngs/auth/goo.png";
import Fb from "../../../assets/pngs/auth/fb.png";

import Ytlogo from "../../../assets/svgs/home/logo.svg";

import Form from "./form";
import { Link } from "react-router-dom";
import { ButtonOutline } from "../../../styles/components/Button";
export default function Signup() {
  return (
    <SignupStyles>
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
            Already a member?
            <span>
              {" "}
              <Link to="/signin"> Log In</Link>{" "}
            </span>{" "}
          </p>
        </div> */}
      </div>
      <FormContainer>
        <h1>Join Synergy</h1>
        <p>Get access to life changing opportunties</p>
        <hr />
        <Form />
        <div className="alt">
          <div></div>
          <div>
            <p>or sign up with</p>
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
        <div className="foot">
          <p>
            By clicking the button, you agree to the terms of service and
            privacy policy.
          </p>
        </div>

        <div>
          <p>
            Already a member?
            <span>
              {" "}
              <Link to="/signin"> Log In</Link>{" "}
            </span>{" "}
          </p>
        </div>
      </FormContainer>
    </SignupStyles>
  );
}
