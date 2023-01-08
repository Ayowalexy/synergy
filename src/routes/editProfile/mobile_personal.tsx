import React from "react";
import { Input } from "./personal";
import { MobileStyles } from "./MobileStyles";
import Img_1 from "../../assets/pngs/others/babe_1.png";
import Img_2 from "../../assets/pngs/others/babe_2.png";
import Img_3 from "../../assets/pngs/others/babe_3.png";
import { BiPlus } from "react-icons/bi";
import DP_m from '../../assets/svgs/others/dp_m.svg'

const MobilePersonal = () => {
  return (
    <MobileStyles>
      <div className="m_box">
        <div className="dp_">
            <img src={DP_m} />
            <div>Tap to change photo</div>
        </div>
        <Input required={true} placeholder="" value="Tosin" text="First name" />
        <Input
          required={false}
          placeholder="Enter your middle name"
          value=""
          text="Middle name"
        />
        <Input required={true} placeholder="" value="Jegede" text="Last name" />
        <Input
          required={true}
          placeholder="Your preffered tagline, Ex: Tech sis"
          value=""
          text="Tagline"
        />
        <div className="text">Bio</div>
        <textarea placeholder="A brief description of yourself which will be shown on your profile"></textarea>
        <Input
          required={false}
          caret={true}
          placeholder="MM/DD/YY"
          value=""
          type="date"
          text="Birth date"
        />
        <Input
          required={false}
          caret={true}
          placeholder="Select your location"
          value=""
          text="Location"
        />
        <Input
          required={false}
          caret={true}
          placeholder="Select your interests"
          value=""
          text="Interest"
        />
      </div>
      <div className="text">Add photos to your Gallery</div>
      <div className="box_c">
        {[Img_1, Img_1, Img_2, Img_3].map((el, idx) =>
          idx == 0 ? (
            <div
              style={{
                width: "45px",
                height: "45px",
                backgroundColor: "#033945",
                border: "1px dashed #3DD368",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
              }}
            >
              <BiPlus fill="#fff" size={30} />
            </div>
          ) : (
            <img height='45px' width='45px' src={el} />
          )
        )}
      </div>
      <button className="save_btn">
        Save
      </button>
    </MobileStyles>
  );
};

export default MobilePersonal;
