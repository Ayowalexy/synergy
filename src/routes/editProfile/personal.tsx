import React from "react";
import { PersonalStyles } from "./Personal.styles";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import { IoIosArrowDown } from "react-icons/io";
import Img_1 from '../../assets/pngs/others/babe_1.png';
import Img_2 from '../../assets/pngs/others/babe_2.png';
import Img_3 from '../../assets/pngs/others/babe_3.png';
import DP from '../../assets/svgs/others/dp_.svg'
import { BiPlus } from 'react-icons/bi';
import { MdDateRange } from 'react-icons/md'


 const Iinput = styled.div`
    font-family: Montserrat;
    .text {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      display: flex;
      align-items: center;
      margin-top: 20px;
      text-transform: capitalize;
      color: ${colors.textGrey2};
    }

    input {
      background: ${colors.darkGreen2};
      border: 1px solid ${colors.darkGreen2};
      width: 95%;
      height: 44px;
      border-radius: 4px;
      padding-left: 15px;
      color: #fff;
      margin-top: 15px;
    }

    _input {
      background: ${colors.darkGreen2};
      border: 1px solid ${colors.darkGreen2};
      width: 27%;
      height: 44px;
      border-radius: 4px;
      padding-left: 15px;
      color: #fff;
      margin-top: 15px;
    }
    .caret {
      display: flex;
      width: 100%;
      justify-content: flex-end;
      margin-top: -39px;
    }
  `;

  type inputprops = {
    text?: string;
    required: boolean;
    value?: string;
    placeholder?: string;
    caret?: boolean;
    type?: string;
  };

 export const Input = ({
    text,
    required,
    value = "",
    placeholder,
    caret,
    type
  }: inputprops) => (
    <Iinput>
      <div className="text">
        {text} {required && <sup>*</sup>}
      </div>
      <input placeholder={placeholder} value={value} />
      {caret && (
        <div className="caret">
         {
            type == 'date'
            ?
            <MdDateRange fill="#3DD368" size={27} />
            :
            <IoIosArrowDown fill="#3DD368" size={27} />
         }
        </div>
      )}
    </Iinput>
  );

const Personal = () => {
  

  const IInput = ({ value = "", placeholder, caret }: inputprops) => (
    <Iinput>
      <input placeholder={placeholder} value={value} />
      {caret && (
        <div className="caret">
          <IoIosArrowDown fill="#3DD368" size={27} />
        </div>
      )}
    </Iinput>
  );

  return (
    <div>
      <PersonalStyles>
        <div className="container">
          <div className="form">
            <Input
              required={true}
              placeholder=""
              value="Tosin"
              text="First name"
            />
            <Input
              required={false}
              placeholder="Enter your middle name"
              value=""
              text="Middle name"
            />
            <Input
              required={true}
              placeholder=""
              value="Jegede"
              text="Last name"
            />
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
            <div className="text">BirthDay</div>
            <div className="card_">
              <IInput
                required={false}
                caret={true}
                placeholder="Month"
                value=""
              />
              <IInput
                required={false}
                caret={true}
                placeholder="Day"
                value=""
                text=""
              />
              <IInput
                required={false}
                caret={true}
                placeholder="Year"
                value=""
              />
            </div>
            <Input
              required={false}
              caret={true}
              placeholder="Select your gender"
              value=""
              text="Gender"
            />
            <div className="text">Add photos to your Gallery</div>
            <div className='box_'>
                {[Img_1, Img_1, Img_2, Img_3].map((el, idx) => (
                    idx == 0
                    ?
                    <div
                        style={{
                            width: '56px',
                            height: '56px',
                            backgroundColor: '#033945',
                            border: '1px dashed #3DD368',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: '50%'
                        }}      
                    >
                        <BiPlus fill="#fff" size={30} />
                    </div>
                    :
                    <img src={el} />
                ))}
            </div>

          </div>
          <div className="profile">
            <img src={DP} />
            <div>Change Profile photo</div>
          </div>
        </div>
      </PersonalStyles>
    </div>
  );
};

export default Personal;
